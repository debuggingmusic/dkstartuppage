// Initialize default search engine (Google by default if no engine is saved in localStorage)
let currentEngine = localStorage.getItem('searchEngine') || 'Google';

// Function to set the search engine
function setSearchEngine(engine) {
    currentEngine = engine;
    document.getElementById('search-input').placeholder = `Search with ${engine}`;
    document.getElementById('search-engine-dropdown').classList.add('hidden'); // Hide dropdown after selection
    localStorage.setItem('searchEngine', engine); // Save the selected engine to localStorage
}

// Function to perform the search
function search() {
    const query = document.getElementById('search-input').value;
    let searchUrl = '';

    if (currentEngine === 'Google') {
        searchUrl = `https://www.google.com/search?q=${query}`;
    } else if (currentEngine === 'DuckDuckGo') {
        searchUrl = `https://duckduckgo.com/?q=${query}`;
    } else if (currentEngine === 'Bing') {
        searchUrl = `https://www.bing.com/search?q=${query}`;
    }

    if (query) {
        window.open(searchUrl, '_blank');
    }
}

// Add event listener for Enter key press inside search input
document.getElementById('search-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        search(); // Trigger the search function when Enter is pressed
    }
});

// Focus the search input field when the page loads and set the default search engine
window.onload = function() {
    document.getElementById('search-input').focus(); // Automatically focus on the search input
    
    // Set the placeholder to match the saved search engine on page load
    document.getElementById('search-input').placeholder = `Search with ${currentEngine}`;
};

// Toggle dropdown visibility when magnifying glass is clicked
document.getElementById('search-icon').addEventListener('click', function() {
    const dropdown = document.getElementById('search-engine-dropdown');
    dropdown.classList.toggle('hidden');
});
