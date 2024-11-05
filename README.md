# NYC Environmental Health: Impact of Urban Forestry on Air Quality

[**Presentation Video Link**: TBD]

## Project Overview
This project investigates the relationship between urban tree distribution and air quality metrics in New York City through comprehensive data analysis and visualization. By combining the 2015 Street Tree Census data with air quality measurements, we aim to understand how urban forestry impacts environmental health across different neighborhoods.

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
### Project Structure
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