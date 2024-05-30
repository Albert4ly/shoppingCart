import { LocalStorage } from "./localStorage.js";
export class CartStorage extends LocalStorage {
    constructor() {
        super(CartStorage.CART_KEY);
    }
}
CartStorage.CART_KEY = 'cartKey';
