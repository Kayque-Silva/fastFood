document.querySelectorAll('.item input[type="number"]').forEach(input => {
    input.addEventListener('input', updateCart);
});

function updateCart() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';
    let totalPrice = 0;
    document.querySelectorAll('.item input[type="number"]').forEach(input => {
        const quantity = parseInt(input.value);
        if (quantity > 0) {
            const name = input.getAttribute('data-name');
            const price = parseFloat(input.getAttribute('data-price'));
            const itemTotal = price * quantity;
            totalPrice += itemTotal;
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('cart-item');
            itemDiv.innerHTML = `<span>${name} x${quantity}</span><span>R$ ${itemTotal.toFixed(2)}</span>`;
            cartItems.appendChild(itemDiv);
        }
    });
    document.getElementById('totalPrice').innerText = totalPrice.toFixed(2);
}

function finalizeOrder() {
    const paymentMethod = document.getElementById('paymentMethod').value;
    const fullName = document.getElementById('fullName').value;
    const address = document.getElementById('address').value;
    const cartItems = document.getElementById('cartItems').innerHTML;
    const totalPrice = document.getElementById('totalPrice').innerText;

    if (fullName === '' || address === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    const orderSummary = `
        <h2>Resumo do Pedido</h2>
        <div>${cartItems}</div>
        <div class="total">Total: R$ ${totalPrice}</div>
        <p>Método de Pagamento: ${paymentMethod}</p>
        <p>Nome: ${fullName}</p>
        <p>Endereço: ${address}</p>
        <button onclick="confirmOrder()">Confirmar</button>
        <button onclick="cancelOrder()">Cancelar</button>
    `;

    document.body.innerHTML = orderSummary;
}

function confirmOrder() {
    alert('Pedido confirmado! Obrigado pela compra.');
    location.reload();
}

function cancelOrder() {
    location.reload();
}
