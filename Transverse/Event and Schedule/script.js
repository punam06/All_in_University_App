// Add interactivity to RSVP and View Details buttons
document.querySelectorAll('.rsvp').forEach(button => {
    button.addEventListener('click', function() {
        const eventName = this.closest('.event-card').querySelector('h3').textContent;
        alert(`RSVP for: ${eventName}`);
    });
});

document.querySelectorAll('.view-details').forEach(button => {
    button.addEventListener('click', function() {
        const eventName = this.closest('.event-card').querySelector('h3').textContent;
        alert(`Viewing details for: ${eventName}`);
    });
});