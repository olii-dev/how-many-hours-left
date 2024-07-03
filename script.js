document.addEventListener('DOMContentLoaded', function() {
    const containers = document.querySelectorAll('.container');

    containers.forEach(container => {
        const decreaseBtn = container.querySelector('.decrease');
        const increaseBtn = container.querySelector('.increase');
        const quantityBtn = container.querySelector('.quantity');
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
});
