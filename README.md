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


### Combined Visualization Analysis of Tree Diameter and Air Quality
![image](https://github.com/user-attachments/assets/bc57aa85-1484-4c86-bc95-299ee58e2232)
![image](https://github.com/user-attachments/assets/52e55c3d-ff0a-4dfa-afa9-86d850e22524)

1. **Transition in Correlation with Tree Diameter**:
   - In the **broader range (Tree DBH < 100)**, the regression line shows a slight positive slope (0.01), indicating that larger trees have a minimal positive influence on air quality. However, the correlation is weak, as reflected by the near-zero R-squared value.
   - In the **narrower range (Tree DBH < 60)**, the slope of the regression line is negative (-0.03), suggesting that smaller trees might slightly worsen air quality as their diameter increases.

2. **Localized Trends and Scale-Dependence**:
   - The contrasting slopes in the two graphs suggest that the relationship between tree diameter and air quality is not linear across all sizes. Small trees (DBH < 60) may contribute differently to air quality compared to larger trees in the broader range (DBH < 100). This could be due to various factors such as the tree’s stage of maturity, leaf density, or its ability to absorb pollutants.

3. **Threshold Effects**:
   - The analysis suggests the potential presence of a threshold where tree diameter transitions from having a negative to a positive impact on air quality. Trees with DBH between 60 and 100 inches may represent this transitional zone, where larger trees begin to contribute more significantly to air quality improvement.
  
### Analysis of Air Quality Metrics by Borough/District
![image](https://github.com/user-attachments/assets/c443f431-ac04-410f-b95d-cec707ba43a7)

This heatmap compares pollutant levels across boroughs, focusing on SO2 emissions, PM2.5, NO2, and O3. Darker colors indicate higher pollution levels.

#### Key Observations:
1. **SO2 Emissions**:
   - Highest in Upper Manhattan (21.0) and South Bronx (10.5).
   - Minimal in Staten Island and North Brooklyn (< 1.0).

2. **PM2.5**:
   - Consistently moderate across districts (~8–9.9).
   - Slightly higher in Lower Manhattan (9.9) and South Bronx (9.5).

3. **NO2**:
   - Highest in Lower Manhattan (23.6).
   - Moderate in Central Brooklyn and Eastern Queens (~19–20).

4. **O3**:
   - Highest in South Brooklyn (33.5) and South Queens (32.3).
   - Urban areas like Lower Manhattan have slightly lower levels (~28).


#### Insights:
- **Urban areas** (Upper/Lower Manhattan, South Bronx) face higher SO2 and NO2 due to traffic and industry.
- **Suburban areas** (South Brooklyn, South Queens) show elevated ozone levels.
- Pollution hotspots pose health risks, particularly respiratory and cardiovascular issues.

### Analysis of Tree Health Distribution by Borough
![image](https://github.com/user-attachments/assets/57435bd6-9db7-44c0-9e30-3470b1278325)

This visualization shows the health distribution of the top 10 tree species across five boroughs (Bronx, Brooklyn, Manhattan, Queens, and Staten Island). The health categories are classified as **Good**, **Fair**, and **Poor**, and are represented by green, yellow, and red bars, respectively.

#### Key Observations:
1. **Bronx**:
   - London plane trees dominate in the "Good" category (~40%), with relatively fewer trees in "Fair" or "Poor" health.
   - Pin oaks show higher percentages in the "Fair" and "Poor" categories, indicating potential issues with this species.

2. **Brooklyn**:
   - Callery pears and pin oaks have a significant proportion of trees in "Fair" or "Poor" health, especially compared to London plane trees and honeylocusts.
   - Japanese zelkovas are primarily in "Good" health (~50%).

3. **Manhattan**:
   - London plane trees and Japanese zelkovas show a balanced health distribution, with a notable percentage in the "Good" category.
   - Norway maples and pin oaks have a higher proportion of trees in "Poor" health.

4. **Queens**:
   - Pin oaks have a prominent "Fair" and "Poor" health representation, suggesting a potential species-specific challenge in this borough.
   - Honeylocusts and London plane trees perform well, with higher proportions in "Good" health.

5. **Staten Island**:
   - London plane trees and callery pears are predominantly in "Good" health (~50% and 40%, respectively).
   - Honeylocusts and ginkgos show more balanced health distributions across the three categories.

#### Insights:
- **Species-Specific Trends**:
  - London plane trees generally have the highest proportion of trees in "Good" health across all boroughs.
  - Pin oaks consistently show a concerning distribution, with a larger percentage in "Fair" and "Poor" health, possibly due to environmental or species-specific vulnerabilities.

- **Borough Variations**:
  - The health distribution varies by borough, reflecting differing environmental conditions, maintenance practices, or species diversity.

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
