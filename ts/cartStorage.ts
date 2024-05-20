import { CartProduct } from "./cartProduct.js";
import { LocalStorage } from "./localStorage.js";

export class CartStorage extends LocalStorage<CartProduct> {
   private static readonly CART_KEY = 'cartKey';

   public constructor() {
      super(CartStorage.CART_KEY);
   }
}