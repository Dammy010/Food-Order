document.getElementById('orderButton').addEventListener('click', function() {
    const items = document.querySelectorAll('.food-item input');
    const orderList = document.getElementById('orderList');
    let total = 0;
    orderList.innerHTML = ''; // Clear previous order

    items.forEach(item => {
        const quantity = parseInt(item.value);
        if (quantity > 0) {
            const name = item.getAttribute('data-name');
            const price = parseInt(item.getAttribute('data-price'));
            const itemTotal = quantity * price;
            total += itemTotal;

            const li = document.createElement('li');
            li.textContent = `${name} x${quantity} - ₦${itemTotal.toLocaleString()}`;
            orderList.appendChild(li);
        }
    });

    if (total > 0) {
        document.getElementById('totalPrice').textContent = `Total: ₦${total.toLocaleString()}`;

        // Show the address modal instead of finalizing the order immediately
        document.getElementById('addressModal').style.display = 'flex';
    } else {
        document.getElementById('totalPrice').textContent = 'Total: ₦0';
        orderList.innerHTML = '<li>No items ordered.</li>';
        document.getElementById('clearButton').style.display = 'none';
    }
});

document.getElementById('confirmAddress').addEventListener('click', function() {
    const address = document.getElementById('addressInput').value.trim();
    if (address === '') {
        alert('Please enter your address.');
        return;
    }

    // Display the address in the order summary
    document.getElementById('addressDisplay').textContent = `Delivery Address: ${address}`;

    // Hide the modal
    document.getElementById('addressModal').style.display = 'none';

    // Show the clear button
    document.getElementById('clearButton').style.display = 'block';

    // Clear the address input for next use
    document.getElementById('addressInput').value = '';
});

document.getElementById('clearButton').addEventListener('click', function() {
    const items = document.querySelectorAll('.food-item input');
    const orderList = document.getElementById('orderList');
    const totalPriceElement = document.getElementById('totalPrice');
    const addressDisplay = document.getElementById('addressDisplay');
    
    items.forEach(item => item.value = '0');  // Reset all inputs
    orderList.innerHTML = '';  // Clear order list
    totalPriceElement.textContent = 'Total: ₦0'; // Reset total
    addressDisplay.textContent = '';  // Clear address
    this.style.display = 'none';   // Hide restart button
});