
import { TshirtsPage } from "./tshirtsPage/tshirtsPage.js";
import { Cart } from "./cart/cart.js";
import { CartStorage } from "./cartStorage.js";
import { HoodiesPage } from "./hoodiesPage/hoodiesPage.js";
import { Router } from "./router/router.js";




const redirectFunction = (location: string): void => {
   window.location.hash = `#/${location}`;
}

const tshirtBtn = document.querySelector('.category__tshirtsBtn');

if (tshirtBtn) {
   tshirtBtn.addEventListener('click', () => redirectFunction('tshirts'));
}

const hoodieBtn = document.querySelector('.category__hoodiesBtn');


if (hoodieBtn) {
   hoodieBtn.addEventListener('click', () => redirectFunction('hoodies'));
}

const storage = new CartStorage();
const router = new Router();
const cart = new Cart('shoppingCartSection', storage);

// router.addRoute({ name: 'tshirts', renderFunc: () => console.log('route od tshirtu') });
// router.addRoute({ name: 'hoodies', renderFunc: () => console.log('route od hoodies') });

// cart.addToCart({ name: 'Test', category: 'tshirt', nrItem: 4, price: 33, quantity: 6 });

// window.cart = storage;

new TshirtsPage('containerId', 'tshirts', router, cart);
new HoodiesPage('containerId', 'hoodies', router, cart);

export { };