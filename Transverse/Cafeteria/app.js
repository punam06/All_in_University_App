// Add interactivity to pre-order buttons
document.querySelectorAll('.pre-order').forEach(button => {
    button.addEventListener('click', function() {
        const itemName = this.closest('.menu-item').querySelector('h3').textContent;
        alert(`You pre-ordered: ${itemName}`);
    });
});