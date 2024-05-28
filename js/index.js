import { CartStorage } from "./cartStorage.js";
// import { Router } from "./router/router.js";
import { Cart } from "./cart/cart.js";
const redirectFunction = (location) => {
    window.location.hash = `#/${location}`;
};
const tshirtBtn = document.querySelector('.category__tshirtsBtn');
if (tshirtBtn) {
    tshirtBtn.addEventListener('click', () => redirectFunction('tshirts'));
}
const hoodieBtn = document.querySelector('.category__hoodiesBtn');
if (hoodieBtn) {
    hoodieBtn.addEventListener('click', () => redirectFunction('hoodies'));
}
const storage = new CartStorage();
// const router = new Router();
const cart = new Cart('shoppingCartSection', storage);
// router.addRoute({ name: 'tshirts', renderFunc: () => console.log('route od tshirtu') });
// router.addRoute({ name: 'hoodies', renderFunc: () => console.log('route od hoodies') });
cart.addToCart({ name: 'Test', category: 'tshirt', nrItem: 4, price: 33, quantity: 6 });
window.cart = storage;
