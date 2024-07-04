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
        if (itemName.includes('wacom screen')) {
            maxQuantity = 1;
        }
        if (itemName.includes('framework factory seconds')) {
            maxQuantity = 1;
        }
        if (itemName.includes('prusa mini+')) {
            maxQuantity = 1;
        }
        if (itemName.includes('bambu lab a1 mini')) {
            maxQuantity = 1;
        }
        if (itemName.includes('ipad 10th gen + 1st gen apple pencil')) {
            maxQuantity = 1;
        }
        if (itemName.includes('framework 13 inch')) {
            maxQuantity = 1;
        }
        if (itemName.includes('quest 3')) {
            maxQuantity = 1;
        }
        if (itemName.includes('framework 16 inch')) {
            maxQuantity = 1;
        }
        if (itemName.includes('macbook air m2')) {
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

    function calculateTotalCost() {
        let totalCost = 0;
        containers.forEach(container => {
            const quantity = parseInt(container.querySelector('.quantity').textContent);
            const price = parseInt(container.querySelector('.price').textContent.match(/\d+/)[0]);
            totalCost += quantity * price;
        });
        return totalCost;
    }

    function calculateRemainingTime() {
        const totalCost = calculateTotalCost();
        const hoursPerDay = parseInt(prompt("Please let me know how many hours per day can you work? (1 hour = 1 ticket)"));
        
        if (isNaN(hoursPerDay) || hoursPerDay <= 0) {
            alert("Please enter a valid number of hours. (More than 0)");
            return;
        }
    
        const currentDate = new Date();
        const endDate = new Date(2024, 7, 31);
        const daysRemaining = Math.ceil((endDate - currentDate) / (1000 * 60 * 60 * 24));
        const totalHoursAvailable = daysRemaining * hoursPerDay;
    
        if (totalHoursAvailable >= totalCost) {
            const daysNeeded = Math.ceil(totalCost / hoursPerDay);
            alert(`I have great news! You can earn enough tickets in ${daysNeeded} days! Good luck!`);
        } else {
            const additionalHoursNeeded = totalCost - totalHoursAvailable;
            alert(`Umm, You need ${additionalHoursNeeded} more hours to get all the selected items. Maybe try cutting down your selection or bringing your daily work hours up.`);
        }
    }

    document.getElementById('calculateBtn').addEventListener('click', calculateRemainingTime);
});