let total = 0;
let productList = document.getElementById('product-list');
let totalDisplay = document.getElementById('total');

function addProduct() {
    let productSelect = document.getElementById('product');
    let quantity = document.getElementById('quantity').value;
    let productName = productSelect.options[productSelect.selectedIndex].getAttribute('data-name');
    let productValue = parseInt(productSelect.value) * quantity;

    total += productValue;

    let listItem = document.createElement('li');
    listItem.textContent = `${productName} - R$ ${productValue.toFixed(2)} (Quantidade: ${quantity})`;
    productList.appendChild(listItem);

    totalDisplay.textContent = total.toFixed(2);
}

function clearCalculation() {
    total = 0;
    productList.innerHTML = '';
    totalDisplay.textContent = total.toFixed(2);
}
