from flask import Flask, render_template, jsonify, request
from flask_cors import CORS
import pandas as pd
import os
import logging

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = Flask(__name__)
CORS(app)

# Global variable to store the minimized tree data
tree_locations = None

def initialize_tree_data():
    """Load and prepare tree location data once when the server starts"""
    global tree_locations
    
    file_path = './../data/raw_data/2015_Street_Tree_Census.csv'
    
    try:
        # Log the absolute path for debugging
        abs_path = os.path.abspath(file_path)
        logger.info(f"Attempting to read CSV from: {abs_path}")
        
        # Verify file exists
        if not os.path.exists(abs_path):
            logger.error(f"File not found at: {abs_path}")
            return False
            
        # Read only necessary columns
        logger.info("Reading CSV file...")
        df = pd.read_csv(file_path, 
                        usecols=['latitude', 'longitude', 'status'])
        
        # Filter for living trees and valid coordinates
        logger.info("Filtering data...")
        df = df[df['status'] == 'Alive'].dropna(subset=['latitude', 'longitude'])
        
        # Convert to simple list of coordinate pairs for efficiency
        tree_locations = df[['latitude', 'longitude']].values.tolist()
        
        logger.info(f"Successfully loaded {len(tree_locations)} tree locations")
        return True
    except Exception as e:
        logger.error(f"Error loading tree data: {str(e)}")
        return False

@app.route('/')
def index():
    """Render the main page."""
    return render_template('index.html')

@app.route('/api/tree-locations')
def get_tree_locations():
    """API endpoint to fetch tree locations with pagination"""
    if tree_locations is None:
        success = initialize_tree_data()
        if not success:
            return jsonify({
                'error': 'Failed to load tree data. Please check server logs.'
            }), 500
    
    chunk = int(request.args.get('chunk', 0))
    chunk_size = int(request.args.get('chunk_size', 10000))
    
    start_idx = chunk * chunk_size
    end_idx = min(start_idx + chunk_size, len(tree_locations))
    
    return jsonify({
        'locations': tree_locations[start_idx:end_idx],
        'total': len(tree_locations),
        'chunk': chunk,
        'hasMore': end_idx < len(tree_locations)
    })

@app.route('/api/data-info')
def get_data_info():
    """API endpoint to get total number of trees and chunks"""
    if tree_locations is None:
        initialize_tree_data()
    
    return jsonify({
        'totalTrees': len(tree_locations),
        'totalChunks': (len(tree_locations) + 9999) // 10000  # Round up division by chunk_size
    })

if __name__ == '__main__':
    # Try to load data when server starts
    logger.info("Starting Flask application...")
    success = initialize_tree_data()
    if not success:
        logger.warning("Failed to load initial tree data. Will retry when requested.")
    app.run(debug=True)