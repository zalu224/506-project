# NYC Environmental Health: Impact of Urban Forestry on Air Quality

**Presentation Video Link**: [Presentation Video YouTube Link](https://youtu.be/GwchIiqQQ1I)

**NYC Street 2015 Tree Census Heatmap Interactive Flask Application Demo**: [YouTube Video Demo Link](https://youtu.be/eNIO4V8ZVKI)

## Table of Contents
- [Project Overview](#project-overview)
- [Key Findings](#key-findings)
- [Data Sources & Processing](#data-sources--processing)
- [Analysis & Visualizations](#analysis--visualizations)
- [Implementation](#implementation)
- [Interactive Web Applications](#interactive-web-applications)
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

### 1. Tree Size and Air Quality

   - Trees with diamter > 60 inches correlate with 30% lower PM2.5 levels
   - Trees with diameter < 60 inches show 15% less pollutant reduction
   - Air quality improvement accelerates at 60-inch diameter threshold

### 2. Geographic Distribution Patterns
   - High SO2 in Upper Manhattan/South Bronx, potentially related to transportation hubs and industrial activity

   - Consistent PM2.5 levels, might suggest widespread vehicle emissions and construction impact

   - NO2 peak in Lower Manhattan correlates with high vehicle traffic density

   - Higher ozone in outer boroughs likely due to sunlight interaction with pollutants and lower building density

### 3. Tree Health Distribution
   - London plane trees have a 85% health rating across all boroughs, which means they are highly adaptable

   - Pin oaks displayed a 45% stress indicators, which means they are vulnerable in the NYC environment

   - Health metrics vary by borough environmental conditions. These can include soil quality and air quality.

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
├── docs/                   # Files that describe the technical details of the project
├── notebooks/              # Analysis notebooks
├── src/                    # Source code
│   ├── data_processing/    
│   ├── analysis/          
│   └── visualization/      
├── tests/                  # Test files
├── heatmap-flask-app/      # Flask application files
├── .gitignore
├── data.zip                # All necessary data files
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

## Interactive Web Applications

The project includes two Flask applications for data visualization and exploration.

### Data Exploration Application
```bash
cd data-exploration-flask-app
pip install -r requirements.txt
python app.py
```
Access the application at `http://localhost:5000`

### Heatmap Visualization Application
```bash
cd heatmap-flask-app
pip install -r requirements.txt
python app.py
```
Access the application at `http://localhost:5001`

### Requirements
- Flask 2.0+
- Python 3.8+
- Processed datasets in respective `data` directories

## Results & Conclusions

### Major Findings
After doing some investigation during the midterm and as we are building our final projects, we were able to draw serval conclusions based on the two data set we were using. 
1. **Environmental Impact**
   - Trees with diameters >= 60 inches demonstrate a significant higher environmental benefits. These benefits are shown in air filtration and carbon sequestration. 

   - Tree species variation shows certain trees are more effective at pollution reduction than others

   - There is a positive correelation between tree density and air quality improvement, with greatest effects when areas exceed 15,000 trees per square miles.
     
2. **Geographic Findings**

   - Urban core areas shows a 2-3x higher pollution concentrations compared to outer boroughs

   - Tree density varies substantially across boroughs, ranging from 7,485 trees/sq mile in Central Harlem to 38,805 trees/sq mile in Southeast Queens
   - Strategic placement of large trees near high-traffic corridors shows 30% greater pollution reduction effectiveness

3. **Policy Implications**
   - Preserving large-diameter trees
   - Borough-specific planting strategies needed to address local pollution patterns
   - Maintenance resources should be allocated based on tree size and the most up to date performance 

### Limitations
- We acknowledge that there is a 2-year gap between most recent tree census data (2022) and air quality measurements (2024), and a lot has changed in NYC
- We acknowledge that there is a limited historical data for long-term trend analysis, which limits our ability to project to the future
- We acknowledge that there are other factors that are other factors affecting the pollution rate, and that we will need more evidence to push for related policies.

## Acknowledgments
- NYC Parks & Recreation
- NYC Open Data
- CS506 Course Staff and Instructors

---
*Last Updated: December 2024*
