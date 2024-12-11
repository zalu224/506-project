# NYC Environmental Health: Impact of Urban Forestry on Air Quality

**Presentation Video Link**: [Presentation Video YouTube Link](https://youtu.be/GwchIiqQQ1I)

## Table of Contents
- [Project Overview](#project-overview)
- [Key Findings](#key-findings)
- [Data Sources & Processing](#data-sources--processing)
- [Analysis & Visualizations](#analysis--visualizations)
- [Implementation](#implementation)
- [Results & Conclusions](#results--conclusions)
- [Future Work](#future-work)
- [Acknowledgments](#acknowledgments)

*For detailed documentation, please see:*
- [Data Processing Details](docs/DATA_PROCESSING.md)
- [Analysis Methods & Results](docs/ANALYSIS.md)
- [Visualization Documentation](docs/VISUALIZATIONS.md)

## Project Overview
This project investigates the relationship between urban tree distribution and air quality metrics in New York City through comprehensive data analysis and visualization. By combining the 2015 Street Tree Census data with air quality measurements, we aim to understand how urban forestry impacts environmental health across different neighborhoods.

## Key Findings (Placeholder)

### 1. Tree Size and Air Quality Relationship
- Large trees (DBH > 60 inches) show positive correlation with air quality improvement
- Smaller trees (DBH < 60 inches) demonstrate different impact patterns
- Identified threshold effects in tree diameter's influence on air quality

### 2. Geographic Distribution Patterns
- Upper Manhattan and South Bronx show highest SO2 emissions
- PM2.5 levels are consistently moderate across districts
- Lower Manhattan experiences highest NO2 levels
- Suburban areas (South Brooklyn, South Queens) show elevated ozone levels

### 3. Tree Health Distribution
- London plane trees show best overall health across boroughs
- Pin oaks consistently show concerning health patterns
- Borough-specific variations reflect different environmental conditions

## Data Sources & Processing

### Primary Data Sources
1. **NYC Street Tree Census (2015)**
   - 666,134 individual trees
   - Complete species and health information
   - Geographic location data

2. **NYC Air Quality Data (2008-2022)**
   - Multiple pollutant measurements
   - Historical air quality trends
   - Location-specific measurements

3. **Supporting Geographic Data**
   - ZIP Code land areas (USA.com)
   - UHF34 to ZIP code mapping
   - Borough integration data

### Data Processing Pipeline
1. **Data Cleaning**
   - Removed duplicate records
   - Standardized location data
   - Handled missing values
   - Validated data consistency

2. **Feature Engineering**
   - Calculated tree area metrics
   - Created seasonal indicators
   - Generated health scores
   - Computed density metrics

3. **Geographic Integration**
   - Normalized ZIP code areas
   - Matched UHF34 neighborhoods
   - Aggregated borough-level data

## Analysis & Visualizations

### Key Visualizations
1. **Multi-pollutant Heatmap**
   - Comparison across boroughs
   - Multiple pollutant analysis
   - Seasonal variation patterns

2. **Tree Health Distribution**
   - Species-specific patterns
   - Borough-wise comparisons
   - Health category analysis

3. **Air Quality Temporal Analysis**
   - PM2.5 trends (2008-2022)
   - Seasonal variations
   - Geographic patterns

### Statistical Analysis
- Regression analysis of tree diameter vs. air quality
- Geographic clustering patterns
- Cross-referencing tree density with pollution levels

## Implementation

### Project Structure
```
project/
├── data/
│   ├── raw/                # Original datasets
│   └── processed/          # Cleaned data
├── notebooks/              # Analysis notebooks
├── src/                    # Source code
│   ├── data_processing/    
│   ├── analysis/          
│   └── visualization/      
├── tests/                  # Test files
├── requirements.txt        # Dependencies
└── README.md              
```

### Setup Instructions
```bash
# Clone the repository
git clone [repository-url]

# Install dependencies
pip install -r requirements.txt

# Run the analysis
python src/main.py
```

### Dependencies
- Python 3.8+
- pandas
- numpy
- matplotlib
- seaborn
- folium
- scikit-learn

## Results & Conclusions (Placeholder)

### Major Findings
1. **Tree Size Impact**
   - Identified critical threshold at 60-inch diameter
   - Larger trees show more positive environmental impact
   - Species-specific variations in effectiveness

2. **Geographic Patterns**
   - Urban core shows higher pollution concentrations
   - Tree density correlates with air quality improvements
   - Borough-specific patterns identified

3. **Policy Implications**
   - Support for large tree preservation
   - Strategic planting recommendations
   - Maintenance priority insights

### Limitations
- Time gap between tree census and air quality data
- Geographic resolution differences
- Seasonal data variations

## Acknowledgments
- NYC Parks & Recreation
- NYC Open Data
- CS506 Course Staff and Instructors

---
*Last Updated: December 2024*