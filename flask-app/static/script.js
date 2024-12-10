// Initialize variables
let map;
let pixiOverlay;
let markerTexture;
let firstDraw = true;
let prevZoom;
let currentChunk = 0;
let totalTrees = 0;
let totalChunks = 0;
let loadingChunks = false;
const CHUNK_SIZE = 10000;

// Initialize map when DOM is loaded
document.addEventListener('DOMContentLoaded', async function() {
    await initializeMarkerTexture();
    initializeMap();
    initializePixiOverlay();
    getDataInfo();
});

async function initializeMarkerTexture() {
    try {
        // Load marker texture - using Leaflet's default marker icon URL
        markerTexture = await PIXI.Assets.load('https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png');
        return true;
    } catch (error) {
        console.error('Error loading marker texture:', error);
        return false;
    }
}

function initializeMap() {
    // Initialize Leaflet map centered on NYC
    map = L.map('map').setView([40.7128, -73.9644], 11);

    // Add OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    updateLoadingStatus(true, "Initializing map...");
}

function initializePixiOverlay() {
    // Create PIXI Container
    const pixiContainer = new PIXI.Container();
    
    // Create the PixiOverlay
    pixiOverlay = L.pixiOverlay((utils) => {
        const zoom = utils.getMap().getZoom();
        const container = utils.getContainer();
        const renderer = utils.getRenderer();
        const scale = utils.getScale();

        // Scale points based on zoom level
        if (firstDraw || prevZoom !== zoom) {
            // Scale all sprites in the container
            container.children.forEach(spriteContainer => {
                spriteContainer.children.forEach(sprite => {
                    sprite.scale.set(0.2 / scale);  // Reduced from 0.5 to 0.2 to make markers smaller
                });
            });
        }

        firstDraw = false;
        prevZoom = zoom;
        renderer.render(container);
    }, pixiContainer, {
        padding: 0.2,
        autoPreventDefault: false,
        preserveDrawingBuffer: false,
        clearBeforeRender: true,
        resolution: window.devicePixelRatio >= 2 ? 2 : 1
    });

    // Add overlay to map
    pixiOverlay.addTo(map);
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
            addTreesToOverlay(data.locations);
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

function addTreesToOverlay(locations) {
    const utils = pixiOverlay.utils;
    const container = utils.getContainer();
    const project = utils.latLngToLayerPoint;
    
    // Create a new container for this chunk's sprites
    const chunkContainer = new PIXI.Container();
    
    // Add markers for each location
    locations.forEach(coords => {
        const marker = new PIXI.Sprite(markerTexture);
        const point = project([coords[0], coords[1]]);
        
        // Set marker position and anchor
        marker.x = point.x;
        marker.y = point.y;
        marker.anchor.set(0.5, 1);  // Center horizontally, align bottom with location
        
        // Add to chunk container
        chunkContainer.addChild(marker);
    });
    
    container.addChild(chunkContainer);
    pixiOverlay.redraw();
}

function updateLoadingStatus(isLoading, message = '') {
    let status = document.getElementById('loadingStatus');
    if (!status) {
        status = document.createElement('div');
        status.id = 'loadingStatus';
        status.className = 'loading-status';
        document.querySelector('.control-panel').appendChild(status);
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
        document.querySelector('.control-panel').appendChild(progressBar);
    }
    
    progressBar.innerHTML = `
        <div class="progress-text">${progress}% complete</div>
        <div class="progress-bar">
            <div class="progress-fill" style="width: ${progress}%"></div>
        </div>
    `;
}

// Refresh button handler
document.getElementById('refreshButton')?.addEventListener('click', () => {
    if (pixiOverlay) {
        pixiOverlay.redraw();
    }
});