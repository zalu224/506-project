from flask import Flask, render_template, jsonify, request
from flask_cors import CORS
import pandas as pd
import os
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = Flask(__name__)
CORS(app)

# Global variable to store the tree data
tree_data = None

def initialize_tree_data():
    """Load and prepare tree location data with health information"""
    global tree_data
    
    file_path = './../flask-app2/data/raw_data/2015_Street_Tree_Census.csv'
    
    try:
        abs_path = os.path.abspath(file_path)
        logger.info(f"Attempting to read CSV from: {abs_path}")
        
        if not os.path.exists(abs_path):
            logger.error(f"File not found at: {abs_path}")
            return False
        
        logger.info("Reading CSV file...")
        df = pd.read_csv(file_path, usecols=['latitude', 'longitude', 'status', 'health'])
        
        logger.info("Filtering data...")
        df = df[df['status'] == 'Alive'].dropna(subset=['latitude', 'longitude', 'health'])
        
        # Store complete tree data
        tree_data = df[['latitude', 'longitude', 'health']].to_dict('records')
        
        logger.info(f"Successfully loaded {len(tree_data)} tree locations")
        return True
    except Exception as e:
        logger.error(f"Error loading tree data: {str(e)}")
        return False

@app.route('/api/tree-data')
def get_tree_data():
    """API endpoint to fetch tree locations and health with boundaries"""
    if tree_data is None:
        success = initialize_tree_data()
        if not success:
            return jsonify({
                'error': 'Failed to load tree data.'
            }), 500
    
    # Get map boundaries from request
    try:
        bounds = {
            'north': float(request.args.get('north')),
            'south': float(request.args.get('south')),
            'east': float(request.args.get('east')),
            'west': float(request.args.get('west'))
        }
        
        # Filter trees within bounds
        filtered_trees = [
            tree for tree in tree_data
            if (bounds['south'] <= tree['latitude'] <= bounds['north'] and
                bounds['west'] <= tree['longitude'] <= bounds['east'])
        ]
        
        # Count health status within bounds
        health_counts = {}
        for tree in filtered_trees:
            health = tree['health']
            health_counts[health] = health_counts.get(health, 0) + 1
            
        return jsonify({
            'locations': [[tree['latitude'], tree['longitude']] for tree in filtered_trees],
            'healthCounts': health_counts,
            'total': len(filtered_trees)
        })
    except (ValueError, TypeError) as e:
        return jsonify({
            'error': 'Invalid boundary parameters'
        }), 400

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    logger.info("Starting Flask application...")
    success = initialize_tree_data()
    if not success:
        logger.warning("Failed to load initial tree data. Will retry when requested.")
    app.run(debug=True)