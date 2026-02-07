// Floating Paw Randomization
const paws = document.querySelectorAll('.floating-paws span');
paws.forEach(paw => {
    resetPaw(paw);
    paw.addEventListener('animationiteration', () => resetPaw(paw));
});
function resetPaw(paw){
    const size = Math.random()*30+20; // 20-50px
    paw.style.fontSize = `${size}px`;
    paw.style.left = `${Math.random()*100}%`;
    paw.style.animationDuration = `${Math.random()*8+6}s`; // 6-14s
    paw.style.opacity = Math.random()*0.5+0.5; // 0.5-1
}

// Cart functionality
const cart = [];
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
document.querySelectorAll('.product-card button').forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const card = btn.parentElement;
        const name = card.querySelector('h3').innerText;
        const price = parseFloat(card.querySelector('p').innerText.replace('$',''));
        cart.push({name, price});
        updateCart();
    });
});
function updateCart(){
    cartItems.innerHTML='';
    let total=0;
    cart.forEach(item=>{
        total+=item.price;
        const li=document.createElement('li');
        li.innerText=`${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
    });
    cartTotal.innerText=total.toFixed(2);
}
