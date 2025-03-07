// Add interactivity to track live buttons
document.querySelectorAll('.track-live').forEach(button => {
    button.addEventListener('click', function() {
        const routeName = this.closest('.route-card').querySelector('h2').textContent;
        alert(`Tracking live: ${routeName}`);
    });
});