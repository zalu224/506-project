// Initialize variables
let map;
let heatLayer;
let currentChunk = 0;
let totalTrees = 0;
let totalChunks = 0;
let loadingChunks = false;
let treeData = [];
const CHUNK_SIZE = 50000;
let settings = {radius: 1.5, blur: 1.5, maxZoom: 12, max: 2.5, minOpacity: 0.05};

// Initialize map when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeMap();
    getDataInfo();
    initializeControls();
});

function initializeMap() {
    // Initialize Leaflet map centered on NYC
    map = L.map('map').setView([40.7128, -73.9644], 11);

    // Add OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Initialize empty heat layer
    heatLayer = L.heatLayer([], {
        radius: 1.5,
        blur: 1.5,
        maxZoom: 12,
        max: 2.5,
        minOpacity: 0.05
    }).addTo(map);

    // Update UI with initial heatmap options
    updateSliders({ radius: 1.5, blur: 1.5, maxZoom: 12, max: 2.5, minOpacity: 0.05 });

    updateLoadingStatus(true, "Initializing map...");
}

function initializeControls() {
    // Radius control
    const radiusSlider = document.getElementById('radius');
    const radiusValue = document.getElementById('radiusValue');
    radiusSlider.addEventListener('input', (e) => {
        const value = e.target.value;
        radiusValue.textContent = value;
        settings.radius = parseFloat(value);
        console.log("Radius: ", settings.radius);
        console.log("Settings: ", settings)
        heatLayer.setOptions(settings);
        console.log("Radius: ", settings.radius);
        console.log("Settings: ", settings)
    });

    // Blur control
    const blurSlider = document.getElementById('blur');
    const blurValue = document.getElementById('blurValue');
    blurSlider.addEventListener('input', (e) => {
        const value = e.target.value;
        blurValue.textContent = value;
        settings.blur = parseFloat(value);
        heatLayer.setOptions(settings);
    });

    // Max zoom control
    const maxZoomSlider = document.getElementById('maxZ');
    const maxZoomValue = document.getElementById('maxZoom');
    maxZoomSlider.addEventListener('input', (e) => {
        const value = e.target.value;
        maxZoomValue.textContent = value;
        settings.maxZoom = parseFloat(value);
        heatLayer.setOptions(settings);
    });

    // Max intensity control
    const maxSlider = document.getElementById('max');
    const maxValue = document.getElementById('maxValue');
    maxSlider.addEventListener('input', (e) => {
        const value = e.target.value;
        maxValue.textContent = value;
        settings.max = parseFloat(value);
        heatLayer.setOptions(settings);
    });

    // Min opacity control
    const minOpacitySlider = document.getElementById('minOpacity');
    const minOpacityValue = document.getElementById('minOpacityValue');
    minOpacitySlider.addEventListener('input', (e) => {
        const value = e.target.value;
        minOpacityValue.textContent = value;
        settings.minOpacity = parseFloat(value);
        heatLayer.setOptions(settings);
    });

    // Preset zoom controls
    const view1 = document.getElementById('view1');
    view1.addEventListener('click', () => updateZoom(1));
    const view2 = document.getElementById('view2');
    view2.addEventListener('click', () => updateZoom(2));
    const view3 = document.getElementById('view3');
    view3.addEventListener('click', () => updateZoom(3));
    const view4 = document.getElementById('view4');
    view4.addEventListener('click', () => updateZoom(4));
    const view5 = document.getElementById('view5');
    view5.addEventListener('click', () => updateZoom(5));
}

function updateHeatmapOptions(options) {
    console.log("Updating heatmap options: ", options);
    heatLayer.setOptions(options);
}

// Function to update UI with new data
function updateSliders(data) {
    document.getElementById('radius').value = data.radius;
    document.getElementById('radiusValue').textContent = data.radius;
    document.getElementById('blur').value = data.blur;
    document.getElementById('blurValue').textContent = data.blur;
    document.getElementById('maxZ').value = data.maxZoom;
    document.getElementById('maxZoom').textContent = data.maxZoom;
    document.getElementById('max').value = data.max;
    document.getElementById('maxValue').textContent = data.max;
    document.getElementById('minOpacity').value = data.minOpacity;
    document.getElementById('minOpacityValue').textContent = data.minOpacity;
}

// Write function to update zoom of map
function updateZoom(option) {
    // 1: set zoom to 10
    if (option == 1) {
        map.flyTo([40.7128, -73.9644], 10.5)
        updateHeatmapOptions({ 
            radius: parseFloat(1), 
            blur: parseFloat(1), 
            maxZoom: parseFloat(7), 
            max: parseFloat(10), 
            minOpacity: parseFloat(0) });
        updateSliders({ 
            radius: 1, 
            blur: 1, 
            maxZoom: 7, 
            max: 10, 
            minOpacity: 0 });
    }
    if (option == 2) {
        map.flyTo([40.7128, -73.9644], 11)
        updateHeatmapOptions({ 
            radius: parseFloat(1.5), 
            blur: parseFloat(1.5), 
            maxZoom: parseFloat(12), 
            max: parseFloat(2.5), 
            minOpacity: parseFloat(0.05) });
        updateSliders({
            radius: 1.5, 
            blur: 1.5, 
            maxZoom: 12, 
            max: 2.5, 
            minOpacity: 0.05 });
    }
    if (option == 3) {
        map.flyTo([40.7128, -73.9644], 12)
        updateHeatmapOptions({ 
            radius: parseInt(1.5), 
            blur: parseInt(1), 
            maxZoom: parseFloat(10), 
            max: parseFloat(2.5), 
            minOpacity: parseFloat(0.05) });
        updateSliders({
            radius: 1.5,
            blur: 1,
            maxZoom: 10,
            max: 2.5,
            minOpacity: 0.05 });}
    if (option == 4) {
        map.flyTo([40.7128, -73.9644], 14)
        updateHeatmapOptions({ 
            radius: parseInt(3.5), 
            blur: parseInt(1), 
            maxZoom: parseFloat(14), 
            max: parseFloat(2.5), 
            minOpacity: parseFloat(0.45) });
        updateSliders({
            radius: 3.5, 
            blur: 1, 
            maxZoom: 14, 
            max: 2.5, 
            minOpacity: 0.45 });
    }
    if (option == 5) {
        map.flyTo([40.7128, -73.9644], 16)
        updateHeatmapOptions({ 
            radius: parseInt(11.5), 
            blur: parseInt(1), 
            maxZoom: parseFloat(4), 
            max: parseFloat(10), 
            minOpacity: parseFloat(0.3) });
        updateSliders({
            radius: 9, 
            blur: 9, 
            maxZoom: 9, 
            max: 1, 
            minOpacity: 0.3 });
    }
}

async function getDataInfo() {
    try {
        const response = await fetch('/api/data-info');
        const data = await response.json();
        totalTrees = data.totalTrees;
        totalChunks = data.totalChunks;
        updateLoadingStatus(true, `Preparing to load ${totalTrees.toLocaleString()} trees...`);
        loadNextChunk();
    } catch (error) {
        console.error('Error getting data info:', error);
        updateLoadingStatus(false, "Error loading data information");
    }
}

async function loadNextChunk() {
    if (loadingChunks || currentChunk >= totalChunks) return;
    
    loadingChunks = true;
    try {
        updateLoadingStatus(true, `Loading trees... ${Math.min((currentChunk + 1) * CHUNK_SIZE, totalTrees).toLocaleString()} of ${totalTrees.toLocaleString()}`);
        
        const response = await fetch(`/api/tree-locations?chunk=${currentChunk}&chunk_size=${CHUNK_SIZE}`);
        const data = await response.json();
        
        if (data.locations && data.locations.length > 0) {
            // Add new points to the heat layer
            const newPoints = data.locations.map(coords => [coords[0], coords[1], 0.5]); // Using 0.5 as default intensity
            treeData = [...treeData, ...newPoints];
            heatLayer.setLatLngs(treeData);
            
            currentChunk++;
            
            // Update progress
            const progress = Math.round((currentChunk / totalChunks) * 100);
            updateProgress(progress);
            
            // Load next chunk if available
            if (data.hasMore) {
                setTimeout(loadNextChunk, 100); // Add small delay between chunks
            } else {
                updateLoadingStatus(false, `Completed loading ${totalTrees.toLocaleString()} trees`);
            }
        }
    } catch (error) {
        console.error('Error loading tree chunk:', error);
        updateLoadingStatus(false, "Error loading trees");
    } finally {
        loadingChunks = false;
    }
}

function updateLoadingStatus(isLoading, message = '') {
    let status = document.getElementById('loadingStatus');
    if (!status) {
        status = document.createElement('div');
        status.id = 'loadingStatus';
        status.className = 'loading-status';
        document.querySelector('.progress-display').appendChild(status);
    }
    
    if (isLoading) {
        status.textContent = message;
        status.style.display = 'block';
    } else {
        if (message) {
            status.textContent = message;
            setTimeout(() => {
                status.style.display = 'none';
            }, 3000);
        } else {
            status.style.display = 'none';
        }
    }
}

function updateProgress(progress) {
    let progressBar = document.getElementById('loadingProgress');
    if (!progressBar) {
        progressBar = document.createElement('div');
        progressBar.id = 'loadingProgress';
        progressBar.className = 'loading-progress';
        document.querySelector('.progress-display').appendChild(progressBar);
    }
    
    progressBar.innerHTML = `
        <div class="progress-text">${progress}% complete</div>
        <div class="progress-bar">
            <div class="progress-fill" style="width: ${progress}%"></div>
        </div>
    `;
    // on completion, remove progress bar
    if (progress === 100) {
        setTimeout(() => {
            progressBar.remove();
        }, 3000);
    }
}