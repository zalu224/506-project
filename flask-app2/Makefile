# Define the environment name
ENV_NAME = venv

# Create a virtual environment and install dependencies
setup:
	python3 -m venv $(ENV_NAME)
	$(ENV_NAME)/bin/pip install --upgrade pip
	$(ENV_NAME)/bin/pip install -r requirements.txt

# Run the Flask application
run:
	$(ENV_NAME)/bin/python app.py

# Clean the environment
clean:
	rm -rf $(ENV_NAME)
	find . -type d -name '__pycache__' -exec rm -rf {} +

# Install additional packages (example usage: make install package=<package_name>)
install:
	$(ENV_NAME)/bin/pip install $(package)
