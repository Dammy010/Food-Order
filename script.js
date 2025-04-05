document.getElementById('orderButton').addEventListener('click', function() {
    const items = document.querySelectorAll('.food-item input');
    const orderList = document.getElementById('orderList');
    let total = 0;
    orderList.innerHTML = ''; 

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
        document.getElementById('addressModal').style.display = 'flex';
    } else {
        document.getElementById('totalPrice').textContent = 'Total: ₦0';
        orderList.innerHTML = '<li>No items ordered.</li>';
        document.getElementById('restartButton').style.display = 'none';
    }
});

document.getElementById('confirmAddress').addEventListener('click', function() {
    const address = document.getElementById('addressInput').value.trim();
    if (address === '') {
        alert('Please enter your address.');
        return;
    }

    document.getElementById('addressDisplay').textContent = `Delivery Address: ${address}`;
    document.getElementById('addressModal').style.display = 'none';
    document.getElementById('restartButton').style.display = 'block';
    document.getElementById('addressInput').value = '';
});

document.getElementById('restartButton').addEventListener('click', function() {
    const items = document.querySelectorAll('.food-item input');
    const orderList = document.getElementById('orderList');
    const totalPriceElement = document.getElementById('totalPrice');
    const addressDisplay = document.getElementById('addressDisplay');
    
    items.forEach(item => item.value = '0');
    orderList.innerHTML = ''; 
    totalPriceElement.textContent = 'Total: ₦0'; 
    addressDisplay.textContent = '';
    this.style.display = 'none'; 
});