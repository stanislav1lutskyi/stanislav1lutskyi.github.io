let cart = [];
let currentProduct = {};

function addToCart(name, price) {
    currentProduct = { name, price };
    document.getElementById('quantityModal').style.display = 'flex';
}

function confirmAddToCart() {
    const quantity = document.getElementById('quantityInput').value;
    const item = { ...currentProduct, quantity: parseInt(quantity) };
    const existingItemIndex = cart.findIndex(i => i.name === item.name);

    if (existingItemIndex > -1) {
        cart[existingItemIndex].quantity += item.quantity;
    } else {
        cart.push(item);
    }

    updateCartCount();
    updateTotalPrice();
    closeModal('quantityModal');
    document.getElementById('cartNotification').style.display = 'flex';
}

function updateCartCount() {
    document.querySelector('.cart-count').innerText = cart.length;
}

function updateTotalPrice() {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    document.getElementById('totalPrice').innerText = total;
}

function closeModal(id) {
    document.getElementById(id).style.display = 'none';
}

function openCart() {
    if (cart.length === 0) {
        alert('Корзина пуста');
        return;
    }

    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = cart.map((item, index) => 
        `<p>${item.name} x${item.quantity} - ${item.price * item.quantity} грн 
         <button class="delete-button" onclick="removeFromCart(${index})">Видалити</button></p>`
    ).join('');
    updateTotalPrice();
    document.getElementById('cartOverlay').style.display = 'flex';
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartCount();
    openCart();
}

function proceedToCheckout() {
    closeModal('cartOverlay');
    document.getElementById('checkoutOverlay').style.display = 'flex';
}

function showCardPayment() {
    document.getElementById('cardPaymentDetails').style.display = 'block';
}

function hideCardPayment() {
    document.getElementById('cardPaymentDetails').style.display = 'none';
}

function submitOrder() {
    const name = document.getElementById('customerName').value;
    const phone = document.getElementById('customerPhone').value;
    const email = document.getElementById('customerEmail').value;
    const city = document.getElementById('city').value;
    const branch = document.getElementById('branch').value;

    if (!name || !phone || !email || (city && branch)) {
        alert('Будь ласка, заповніть усі необхідні поля.');
        return;
    }
    
    alert('Замовлення підтверджено! Дякуємо за покупку.');
    closeModal('checkoutOverlay');
    cart = [];
    updateCartCount();
}

function showCardPayment() {
    document.getElementById('cardPaymentDetails').style.display = 'block';
}

function hideCardPayment() {
    document.getElementById('cardPaymentDetails').style.display = 'none';
}

function showDeliveryDetails() {
    document.getElementById('deliveryDetails').style.display = 'block';
}

function hideDeliveryDetails() {
    document.getElementById('deliveryDetails').style.display = 'none';
}
