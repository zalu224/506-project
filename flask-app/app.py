from flask import Flask, render_template, jsonify, request
from flask_cors import CORS  # If you need CORS support

app = Flask(__name__)
CORS(app)  # Enable CORS if needed

# Sample data - to be replaced
# data = {
#     "type": "FeatureCollection",
#     "features": []
# }

@app.route('/')
def index():
    """Render the main page."""
    return render_template('index.html')

@app.route('/api/data')
def get_data():
    """API endpoint to fetch map data."""
    return jsonify(data)

@app.route('/api/update', methods=['POST'])
def update_data():
    """API endpoint to update map data."""
    try:
        new_data = request.json
        # Process the new data here
        return jsonify({"status": "success"})
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)