# NYC Environmental Health: Impact of Urban Forestry on Air Quality

**Presentation Video Link**: [Presentation Video YouTube Link](https://youtu.be/GwchIiqQQ1I)

## Project Overview
This project investigates the relationship between urban tree distribution and air quality metrics in New York City through comprehensive data analysis and visualization. By combining the 2015 Street Tree Census data with air quality measurements, we aim to understand how urban forestry impacts environmental health across different neighborhoods.

---
# Data Processing for NYC Trees and Air Quality Analysis

This project provides a Python class `DataProcessor` to preprocess and validate datasets related to NYC Trees and Air Quality. The script ensures data is clean, consistent, and ready for analysis or modeling.

---

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

---

## Directory Structure
The script creates the following directories if they don't exist:
- `raw_data`: For input raw data files (e.g., CSVs).
- `processed_data`: For cleaned datasets and metadata.
- `log`: For logs tracking data processing and errors.

---


## Current Progress and Results

### Preliminary Visualizations

#### 1. Tree Analysis Visualizations

- **Species Distribution Heat Map**
  - Created an interactive heat map showing the top 10 tree species’ average diameter by borough.
  - Color intensity represents diameter in inches.
  - Allows for borough-by-borough comparison, revealing geographic patterns.
  - Interactive tooltips display exact measurements.

- **Tree Health Analysis**
  - Analyzed health distribution for living trees among the top 10 species.
  - Bar charts compare health categories (Good, Fair, Poor).
  - Identified species-specific health patterns.
  - Geographic distribution of tree health status.

#### 2. Air Quality Visualizations

- **PM2.5 Temporal Analysis (2008-2022)**
  - Line graph shows significant improvement in air quality over time.
  - Tracks the top 5 worst-performing locations.
  - Nearly 50% reduction in PM2.5 across all monitored areas, with seasonal variation patterns identified.

- **Geographic Distribution**
  - Heat map showing pollution concentration by neighborhood.
  - Upper Manhattan and Harlem identified as areas of concern, with notable pollution patterns in the Bronx.
  - Includes ozone distribution analysis and cross-neighborhood comparison metrics.

#### 3. Integrated Analysis Visualizations

- **Multi-pollutant Heatmap**
  - X-axis: Pollutants (NO2, SO2, PM2.5); Y-axis: NYC neighborhoods.
  - Color intensity indicates concentration levels, with a side color bar showing value ranges.

- **Tree Health vs. Air Quality**
  - Bar chart comparing PM2.5 levels across tree health categories.
  - Error bars display confidence intervals, with statistical significance markers and sample size indicators.

---

## Data Processing Details

## Data relevance and provenance

We are working with two datasets that complements each other. The combination of these datasets allowed the project to answer important about how trees affect air quality in different parts of the city. We were able to create the interactive map that help us discover patterns in different locations. 

To enhance the quality of the data, we standardized the measurement unit across both datasets, we aligned the geographic coordinates so the datasets can be expressed correctly on map. In addition, we did manual checks and ran tests on both data sets to validate the data and make sure it is consistent. Although the data had its limitation such as its year range differences and using different units for locations, we tried to overcome those by matching those datasets and draw those connections ourselves.

## Data Preprocessing for Visualizing

The data preprocessing in this project involves integrating and preparing datasets to analyze the impact of tree dimensions on air quality metrics. Below are the detailed steps:

1. **Merging Datasets**:
   - Air quality data and tree census data are merged into a unified dataset for joint analysis.

2. **Filtering**:
   - The dataset is filtered to include only tree diameters (`tree_dbh`) below 100 inches. This step reduces noise and focuses on the most relevant observations.

3. **Feature Engineering**:
   - Additional features, such as `tree_area`, are computed using geometric formulas. This helps to evaluate the relationship between tree size and air quality metrics.

4. **Group Aggregation**:
   - Average air quality values are calculated for each unique tree diameter to provide a simplified view for regression analysis.

5. **Dimensional Reduction (Regression Application)**:
   - Linear regression is applied to explore the relationship between tree diameter and average air quality. The outputs include slope, intercept, p-value, and R-squared value.

6. **Threshold Analysis**:
   - An incremental method is used to identify thresholds in tree diameter where the contribution to air quality changes from negative to positive. This involves repeated regression calculations with filtered subsets of data.
---
### Tools and Methods
- **Libraries**: The preprocessing and analysis are conducted using Python libraries such as `pandas`, `numpy`, and `scipy`.
- **Visualization**: Scatter plots and regression lines are generated with `matplotlib` to provide visual insights into the data trends.
### 1. Data Collection

- **Tree Data Source**
  - NYC Open Data: 2015 Street Tree Census, with 666,134 individual trees.
  - Includes complete species and health information.

- **Air Quality Data Source**
  - NYC Open Data: Historical air quality measurements from 2008-2022.
  - Contains multiple pollutant measurements.

- **Supporting Geographic Data**
  - ZIP Code land areas (web-scraped from USA.com).
  - UHF34 to ZIP code mapping tables and borough integration data.

### 2. Data Cleaning and Processing

- **Tree Data Processing**
  - Filtered out invalid or incomplete records.
  - Categorized tree status (Alive, Stump, Dead) and standardized location data.
  - Extracted health indicators and calculated stewardship metrics.

- **Air Quality Data Processing**
  - Aligned temporal data with tree census, normalized geographically.
  - Handled missing values and identified outliers.

- **Geographic Integration**
  - Normalized ZIP code area, matched UHF34 neighborhoods, and aggregated data at the borough level.
  - Performed density calculations accounting for area size.

---

## Modeling Methods and Preliminary Results

### 1. Statistical Analysis

- **Linear Regression Model**
  - Independent Variable: Tree Diameter (DBH).
  - Dependent Variable: PM2.5 Concentrations.
  - R-squared value: [Value], Confidence Intervals: [Range].
  - Residual analysis details: [Results].

### 2. Geographic Analysis
- Identified clustering patterns in both tree and air quality datasets.
- Created density maps for tree distribution and analyzed pollution concentration patterns.
- Cross-referenced tree density with air quality metrics.

---

## Planned Next Steps

### Further Analysis
- **Deeper Statistical Modeling**
  - Multiple regression and time series modeling.
  - Explore machine learning approaches.

- **Additional Data Integration**
  - Incorporate demographic and socioeconomic data.
  - Integrate historical weather data for enhanced analysis.

- **Enhanced Visualization**
  - Develop an interactive dashboard and time-series animations.
  - Add 3D visualization for pollution patterns.

---

## Implementation and Documentation

### Project Structure
```
├── data/
│   ├── raw/                # Original datasets
│   └── processed/          # Cleaned and processed data
├── notebooks/              # Jupyter notebooks for analysis
├── src/                    # Source code
│   ├── data_processing/    # Data cleaning scripts
│   ├── analysis/           # Analysis modules
│   └── visualization/      # Visualization code
├── tests/                  # Test files
├── requirements.txt        # Project dependencies
└── README.md               # This file
```

### Running the Code
```
# Clone the repository
git clone [repository-url]

# Install dependencies
pip install -r requirements.txt

# Run the analysis
python src/main.py
```

## Future Deliverables
- Final statistical analysis and modeling.
- Interactive visualization dashboard.
- Policy recommendation document.
- Cost-benefit analysis of urban forestry initiatives.

## Acknowledgments
- NYC Parks & Recreation
- NYC Open Data
