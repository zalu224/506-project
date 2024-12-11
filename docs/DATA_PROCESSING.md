# Data Processing for NYC Trees and Air Quality Analysis

This project provides a Python class `DataProcessor` to preprocess and validate datasets related to NYC Trees and Air Quality. The script ensures data is clean, consistent, and ready for analysis or modeling.

## Features

### 1. Data Loading
The `load_data` method loads raw data from CSV files into pandas DataFrames.
- **Tree Census Data**: Information on tree species, health, status, diameter, and geographic location.
- **Air Quality Data**: Contains air quality measurements, start dates, and locations.

### 2. Tree Census Data Cleaning (`clean_tree_data`)
- Removes duplicate records based on `tree_id`.
- Fills missing `tree_dbh` (tree diameter) values with the median value grouped by tree species (`spc_common`).
- Filters out non-living trees (keeps `status == 'Alive'`).
- Converts `latitude` and `longitude` to numeric types.
- Encodes categorical columns (`health`, `spc_common`, `steward`, `guards`, `sidewalk`) using `LabelEncoder`.
- Maps tree health values (`Poor`, `Fair`, `Good`) to numerical scores (`1`, `2`, `3`).

### 3. Air Quality Data Cleaning (`clean_air_quality_data`)
- Removes duplicate records.
- Converts the `start_date` column to a datetime format.
- Ensures `data_value` (air quality metric) is numeric, handling invalid entries.
- Adds a `season` column based on the quarter of the year derived from `start_date`.

### 4. Data Validation (`validate_data`)
Checks the consistency and completeness of the cleaned data. Outputs include:
- Total record counts.
- Missing values summary for each column.
- Numeric value ranges for critical fields:
  - **Tree Data**: `tree_dbh`, `latitude`, `longitude`.
  - **Air Quality Data**: `data_value`.

### 5. Saving Processed Data (`save_processed_data`)
The `save_processed_data` method saves:
- **Processed Data**: Cleaned tree census and air quality data as `.pkl` files.
- **Encoders**: Label encoders for categorical features.
- **Validation Results**: Quality checks in a dictionary.
- **File Names**: All files are timestamped for versioning (e.g., `tree_data_YYYYMMDD_HHMMSS.pkl`).

Files are stored in the `processed_data` directory.

## Data relevance and provenance

We are working with two datasets that complements each other. The combination of these datasets allowed the project to answer important about how trees affect air quality in different parts of the city. We were able to create the interactive map that help us discover patterns in different locations. 

To enhance the quality of the data, we standardized the measurement unit across both datasets, we aligned the geographic coordinates so the datasets can be expressed correctly on map. In addition, we did manual checks and ran tests on both data sets to validate the data and make sure it is consistent. Although the data had its limitation such as its year range differences and using different levels of specificities for locations, we tried to overcome those by matching those datasets and draw those connections ourselves.

## Data Collection

### Tree Data Source
- NYC Open Data: 2015 Street Tree Census, with 666,134 individual trees.
- Includes complete species and health information.

### Air Quality Data Source
- NYC Open Data: Historical air quality measurements from 2008-2022.
- Contains multiple pollutant measurements.

### Supporting Geographic Data
- ZIP Code land areas (web-scraped from USA.com).
- UHF34 to ZIP code mapping tables and borough integration data.

## Data Cleaning and Processing

### Tree Data Processing
- Filtered out invalid or incomplete records.
- Categorized tree status (Alive, Stump, Dead) and standardized location data.
- Extracted health indicators and calculated stewardship metrics.

### Air Quality Data Processing
- Aligned temporal data with tree census, normalized geographically.
- Handled missing values and identified outliers.

### Geographic Integration
- Normalized ZIP code area, matched UHF34 neighborhoods, and aggregated data at the borough level.
- Performed density calculations accounting for area size.

---
[← Back to Main README](../README.md)