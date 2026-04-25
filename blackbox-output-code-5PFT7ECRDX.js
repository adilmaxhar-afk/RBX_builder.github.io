// Smooth scrolling
function scrollToOrder() {
    document.getElementById('order').scrollIntoView({ behavior: 'smooth' });
}

function scrollToExamples() {
    document.getElementById('examples').scrollIntoView({ behavior: 'smooth' });
}

// Form handling
document.getElementById('gameForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get