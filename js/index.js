// import { CreateItems } from "./createItems.js";
// import { LocalStorage } from "./localStorage.js";
import { CartStorage } from "./cartStorage.js";
import { Router } from "./router/Router.js";
const redirectFunction = (location) => {
    window.location.hash = `#/${location}`;
};
// const ls = new LocalStorage();
// ls.getItemsFromLocalStorage();
// new CreateItems();
// new LocalStorage();
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
router.addRoute({ name: 'tshirts', renderFunc: () => console.log('route od tshirtu') });
router.addRoute({ name: 'hoodies', renderFunc: () => console.log('route od hoodies') });
window.cart = storage;
