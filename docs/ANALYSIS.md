# Analysis Methods and Results

## Combined Visualization Analysis of Tree Diameter and Air Quality
![image](https://github.com/user-attachments/assets/bc57aa85-1484-4c86-bc95-299ee58e2232)
![image](https://github.com/user-attachments/assets/52e55c3d-ff0a-4dfa-afa9-86d850e22524)

### 1. Transition in Correlation with Tree Diameter
- In the **broader range (Tree DBH < 100)**, the regression line shows a slight positive slope (0.01), indicating that larger trees have a minimal positive influence on air quality. However, the correlation is weak, as reflected by the near-zero R-squared value.
- In the **narrower range (Tree DBH < 60)**, the slope of the regression line is negative (-0.03), suggesting that smaller trees might slightly worsen air quality as their diameter increases.

### 2. Localized Trends and Scale-Dependence
- The contrasting slopes in the two graphs suggest that the relationship between tree diameter and air quality is not linear across all sizes. Small trees (DBH < 60) may contribute differently to air quality compared to larger trees in the broader range (DBH < 100). This could be due to various factors such as the tree's stage of maturity, leaf density, or its ability to absorb pollutants.

### 3. Threshold Effects
- The analysis suggests the potential presence of a threshold where tree diameter transitions from having a negative to a positive impact on air quality. Trees with DBH between 60 and 100 inches may represent this transitional zone, where larger trees begin to contribute more significantly to air quality improvement.

## Statistical Analysis

### Linear Regression Model
- Independent Variable: Tree Diameter (DBH)
- Dependent Variable: PM2.5 Concentrations
- R-squared value: [Value], Confidence Intervals: [Range]
- Residual analysis details: [Results]

### Geographic Analysis
- Identified clustering patterns in both tree and air quality datasets
- Created density maps for tree distribution and analyzed pollution concentration patterns
- Cross-referenced tree density with air quality metrics

## Modeling Methods and Preliminary Results

### 1. Data Preprocessing for Analysis
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

### 2. Tools and Methods
- **Libraries**: The preprocessing and analysis are conducted using Python libraries such as `pandas`, `numpy`, and `scipy`.
- **Visualization**: Scatter plots and regression lines are generated with `matplotlib` to provide visual insights into the data trends.

---
[← Back to Main README](../README.md)