let cart = [];

function addToCart(name, price) {
    const existingProduct = cart.find(item => item.name === name);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    updateCartCount();
    updateTotalPrice();
    alert(`${name} додано до корзини!`);
}

function updateCartCount() {
    document.querySelector('.cart-count').innerText = cart.length;
}

function updateTotalPrice() {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    document.getElementById('totalPrice').innerText = total;
}

function openCart() {
    if (cart.length === 0) {
        alert('Корзина пуста');
        return;
    }

    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = cart.map(item =>
        `<p>${item.name} x${item.quantity} - ${item.price * item.quantity} грн</p>`
    ).join('');
    document.getElementById('cartOverlay').style.display = 'flex';
}

function proceedToCheckout() {
    closeModal('cartOverlay');
    document.getElementById('checkoutOverlay').style.display = 'flex';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function submitOrder() {
    const fullName = document.getElementById('fullName').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;

    if (fullName && phone && email && address) {
        alert(`Замовлення підтверджено! \n
        ПІБ: ${fullName} \n
        Телефон: ${phone} \n
        Пошта: ${email} \n
        Адреса доставки: ${address} \n
        Сума замовлення: ${document.getElementById('totalPrice').innerText} грн`);

        // Очистити корзину після підтвердження
        cart = [];
        updateCartCount();
        updateTotalPrice();
        closeModal('checkoutOverlay');
    } else {
        alert('Будь ласка, заповніть всі поля!');
    }
}

async function loadProducts() {
    try {
        const response = await fetch('https://stanislav1lutskyi.github.io/products.json');
        const data = await response.json();

        document.title = data.title;
        document.querySelector('h1').innerText = data.title;

        const wrap = document.querySelector('.wrap');
        wrap.innerHTML = '';

        data.products.forEach(product => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <a href="#" class="category">${product.category}</a>
                <hr>
                <div class="photo-block">
                    <img src="${product.image}" alt="${product.name}" class="photo">
                </div>
                <a href="#" class="name">${product.name}</a>
                <div>
                    ${product.oldPrice ? `<span class="old-price">${product.oldPrice} грн</span>` : ""} 
                    <span class="price">${product.price} грн</span>
                </div>
                <button class="sale-button" onclick="addToCart('${product.name}', ${product.price})">У корзину</button>
            `;
            wrap.appendChild(card);
        });
    } catch (error) {
        console.error('Error loading products:', error);
    }
}

loadProducts();
