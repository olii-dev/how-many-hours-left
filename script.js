document.addEventListener('DOMContentLoaded', function() {
    const decreaseBtn = document.getElementById('decrease');
    const increaseBtn = document.getElementById('increase');
    const quantityBtn = document.getElementById('quantity');
    let quantity = 0;

    function updateQuantity() {
        quantityBtn.textContent = quantity;
    }

    decreaseBtn.addEventListener('click', function(e) {
        e.preventDefault();
        if (quantity > 0) {
            quantity--;
            updateQuantity();
        }
    });

    increaseBtn.addEventListener('click', function(e) {
        e.preventDefault();
        quantity++;
        updateQuantity();
    });
});