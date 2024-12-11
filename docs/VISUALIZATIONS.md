# Visualization Documentation

## Tree Analysis Visualizations

### 1. Species Distribution Heat Map
- Created an interactive heat map showing the top 10 tree species' average diameter by borough.
- Color intensity represents diameter in inches.
- Allows for borough-by-borough comparison, revealing geographic patterns.
- Interactive tooltips display exact measurements.

### 2. Tree Health Analysis
- Analyzed health distribution for living trees among the top 10 species.
- Bar charts compare health categories (Good, Fair, Poor).
- Identified species-specific health patterns.
- Geographic distribution of tree health status.

### 3. Analysis of Air Quality Metrics by Borough/District
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

### 4. Analysis of Tree Health Distribution by Borough
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

## Air Quality Visualizations

### 1. PM2.5 Temporal Analysis (2008-2022)
- Line graph shows significant improvement in air quality over time.
- Tracks the top 5 worst-performing locations.
- Nearly 50% reduction in PM2.5 across all monitored areas, with seasonal variation patterns identified.

### 2. Geographic Distribution
- Heat map showing pollution concentration by neighborhood.
- Upper Manhattan and Harlem identified as areas of concern, with notable pollution patterns in the Bronx.
- Includes ozone distribution analysis and cross-neighborhood comparison metrics.

## Integrated Analysis Visualizations

### 1. Multi-pollutant Heatmap
- X-axis: Pollutants (NO2, SO2, PM2.5)
- Y-axis: NYC neighborhoods
- Color intensity indicates concentration levels, with a side color bar showing value ranges

### 2. Tree Health vs. Air Quality
- Bar chart comparing PM2.5 levels across tree health categories
- Error bars display confidence intervals, with statistical significance markers
- Sample size indicators included

---
[← Back to Main README](../README.md)