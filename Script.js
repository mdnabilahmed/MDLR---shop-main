document.addEventListener("DOMContentLoaded", function () {
    const cartSidebar = document.getElementById("cart-sidebar");
    const cartIcon = document.getElementById("cart-icon");
    const closeCartButton = document.getElementById("close-cart");
    const cartItemsList = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    let cart = [];

    // Open Cart
    cartIcon.addEventListener("click", function () {
        cartSidebar.classList.add("cart-open");
    });

    // Close Cart
    closeCartButton.addEventListener("click", function () {
        cartSidebar.classList.remove("cart-open");
    });

    // Add item to cart (Example: You can call this function when adding items)
    function addToCart(itemName, price) {
        const existingItem = cart.find(item => item.name === itemName);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ name: itemName, price, quantity: 1 });
        }

        updateCart();
    }

    // Update Cart Display
    function updateCart() {
        cartItemsList.innerHTML = "";

        if (cart.length === 0) {
            cartItemsList.innerHTML = `<li class="empty-cart">No items found.</li>`;
        } else {
            let total = 0;

            cart.forEach(item => {
                const li = document.createElement("li");
                li.textContent = `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`;
                cartItemsList.appendChild(li);
                total += item.price * item.quantity;
            });

            cartTotal.textContent = total.toFixed(2);
        }
    }

    // Example usage: Add an item
    addToCart("T-Shirt", 19.99);
});
