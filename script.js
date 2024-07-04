document.addEventListener('DOMContentLoaded', function() {
    const containers = document.querySelectorAll('.container-item');
    containers.forEach(container => {
        const decreaseBtn = container.querySelector('.decrease');
        const increaseBtn = container.querySelector('.increase');
        const quantityBtn = container.querySelector('.quantity');
        const itemName = container.querySelector('h2').textContent.toLowerCase();
        let quantity = 0;
        let maxQuantity = 10;

        if (itemName.includes('sticker of your choice')) {
            maxQuantity = 10;
        }
        if (itemName.includes('pile of stickers')) {
            maxQuantity = 10;
        }
        if (itemName.includes('openai credits')) {
            maxQuantity = 1;
        }
        if (itemName.includes('domain')) {
            maxQuantity = 10;
        }
        if (itemName.includes('notebook')) {
            maxQuantity = 1;
        }
        if (itemName.includes('logic analyser')) {
            maxQuantity = 5;
        }
        if (itemName.includes('breadboard + jumper wires')) {
            maxQuantity = 10;
        }
        if (itemName.includes('multimeter')) {
            maxQuantity = 5;
        }
        if (itemName.includes('arcade ticket counter')) {
            maxQuantity = 1;
        }
        if (itemName.includes('yubikey')) {
            maxQuantity = 5;
        }
        if (itemName.includes('soldering iron + solder')) {
            maxQuantity = 5;
        }
        if (itemName.includes('raspberry pi')) {
            maxQuantity = 1;
        }
        if (itemName.includes('pinecil')) {
            maxQuantity = 1;
        }
        if (itemName.includes('github keycaps x8')) {
            maxQuantity = 1;
        }   
        if (itemName.includes('wacom intuos s')) {
        maxQuantity = 1;
        }   
        if (itemName.includes('octocat')) {
        maxQuantity = 1;
        }
        if (itemName.includes('keychron k6 pro')) {
            maxQuantity = 1;
        }
        if (itemName.includes('flipper zero')) {
            maxQuantity = 1;
        }
        if (itemName.includes('logitech mx mechanical')) {
            maxQuantity = 1;
        }   

        function updateQuantity() {
            quantityBtn.textContent = quantity;
            increaseBtn.style.opacity = quantity >= maxQuantity ? '0.5' : '1';
            increaseBtn.style.cursor = quantity >= maxQuantity ? 'not-allowed' : 'pointer';
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
            if (quantity < maxQuantity) {
                quantity++;
                updateQuantity();
            }
        });

        updateQuantity();
    });
});