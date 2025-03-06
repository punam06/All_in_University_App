// Add interactivity to View Details buttons
document.querySelectorAll('.view-details').forEach(button => {
    button.addEventListener('click', function() {
        const className = this.closest('.class-card').querySelector('h3').textContent;
        alert(`Viewing details for: ${className}`);
    });
});