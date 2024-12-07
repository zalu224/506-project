// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
    // Initialize any JavaScript functionality here
    console.log('Script loaded successfully');
    
    // Example function for API calls
    async function fetchData() {
        try {
            const response = await fetch('/api/data');
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    
    // Example event listener
    document.getElementById('dataButton')?.addEventListener('click', async () => {
        const data = await fetchData();
        // Handle the data
    });
});