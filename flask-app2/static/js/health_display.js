class HealthDisplay {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.chart = null;
        this.data = null;
    }

    async initialize() {
        try {
            const response = await fetch('/api/health-distribution');
            const data = await response.json();
            this.data = Object.entries(data.healthCounts).map(([status, count]) => ({
                status,
                count
            }));
            this.render();
        } catch (error) {
            console.error('Error fetching health data:', error);
        }
    }

    render() {
        if (!this.data) return;

        // Clear previous content
        this.container.innerHTML = '';

        // Create header
        const header = document.createElement('h3');
        header.textContent = 'Tree Health Distribution';
        header.className = 'health-display-header';

        // Create chart container
        const chartContainer = document.createElement('div');
        chartContainer.className = 'health-display-chart';

        // Create bars
        const maxCount = Math.max(...this.data.map(d => d.count));
        this.data.forEach(item => {
            const bar = document.createElement('div');
            bar.className = 'health-bar-container';

            const barFill = document.createElement('div');
            barFill.className = 'health-bar-fill';
            barFill.style.height = `${(item.count / maxCount) * 100}%`;

            const label = document.createElement('div');
            label.className = 'health-bar-label';
            label.textContent = item.status;

            const count = document.createElement('div');
            count.className = 'health-bar-count';
            count.textContent = item.count.toLocaleString();

            bar.appendChild(barFill);
            bar.appendChild(label);
            bar.appendChild(count);
            chartContainer.appendChild(bar);
        });

        this.container.appendChild(header);
        this.container.appendChild(chartContainer);
    }

    show() {
        this.container.style.display = 'block';
    }

    hide() {
        this.container.style.display = 'none';
    }
}