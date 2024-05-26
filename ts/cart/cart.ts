import { Storages } from "../storages.js"
import { Product } from "../product.js";
import { CartProduct } from "../cartProduct.js";

export class Cart {

   private static readonly CART_CLASS = 'cart';
   private static readonly CART_POPUP_CLASS = 'class__popup';
   private static readonly OPEN_POPUP_CLASS = 'cart--is-popup-active';
   private static readonly PRODUCTS_LIST_ITEM_CLASS = 'class__list-item';
   private static readonly PRODUCTS_LIST_CLASS = 'cart__products-list';

   private readonly rootElement: HTMLDivElement;
   private readonly products: CartProduct[] = [];
   private cartProductList!: HTMLUListElement;
   private readonly storage: Storages<CartProduct>;

   public constructor( containerId: string, storage: Storages<CartProduct>) {
      const cartEl = document.getElementById(containerId); 

      if (cartEl) {
         this.rootElement = cartEl as HTMLDivElement;
         this.attachCartToDOM();
         this.storage = storage;
         this.products = storage.getItems();
         return;
      }
      throw Error('don\'t find element of cart');
   }

   public addToCart(product: CartProduct): void {
      if (this.isProductAlreadyInCart(product.nrItem)) {
         this.changeProductQuantity(product.nrItem, product.quantity);
      } else {
         this.products.push(product);
         this.refreshCartData();
      }
      this.storage.setItems(this.products);
   }

   public increaseQuantity(nrItem: number): void {
      this.changeProductQuantity(nrItem, 1);
      this.storage.setItems(this.products);
   }

   public decreaseQuantity(nrItem: number): void {
      this.changeProductQuantity(nrItem, -1);
      this.storage.setItems(this.products);
   }


   private isProductAlreadyInCart(nrItem: number): boolean {
      return this.products.some(product => product.nrItem === nrItem);
   }

   private changeProductQuantity(nrItem: number, newQuantity: number): void {
      let indexProductToRemove: number | null = null;

      this.products.forEach((product, index) => {
         if (product.nrItem !== nrItem) {
            return;
         }

         product.quantity += newQuantity;
         if (product.quantity === 0) {
            indexProductToRemove = index;
         }
      });

      if (indexProductToRemove !== null) {
         this.products.splice(indexProductToRemove, 1);
      }

      this.refreshCartData();
   }

   private attachCartToDOM(): void {
      this.rootElement.classList.add(Cart.CART_CLASS);
      this.appendCartBtn();
      this.appendCartPopup();
   }

   private appendCartBtn(): void {
      const cartBtn = document.createElement('button');
      // cartBtn.classList.add('navBar__shoppingCartBtn"');

      cartBtn.addEventListener('click', () => {
         if (!this.rootElement.classList.contains(Cart.OPEN_POPUP_CLASS)) {
            this.refreshCartData();
            return;
         }
         this.rootElement.classList.toggle(Cart.OPEN_POPUP_CLASS);
   });

      this.rootElement.appendChild(cartBtn);
   }

   private refreshCartData(): void {
      while (this.cartProductList.firstChild) {
         this.cartProductList.firstChild.remove();
      }

      this.products.forEach(this.createListElement);
   }

   private readonly createListElement = (product: CartProduct): void => {
      const listElement = document.createElement('li');
      const productInfoElement = document.createElement('p');
      const increaseBtn = document.createElement('button');
      const decreaseBtn = document.createElement('button');

      productInfoElement.textContent = `${product.name}, amount ${product.quantity}`;
      increaseBtn.textContent = '+';
      decreaseBtn.textContent = '-';

      listElement.classList.add(Cart.PRODUCTS_LIST_ITEM_CLASS);
      increaseBtn.addEventListener('click', () => this.increaseQuantity(product.nrItem));
      decreaseBtn.addEventListener('click', () => this.decreaseQuantity(product.nrItem));

      listElement.appendChild(productInfoElement);
      listElement.appendChild(increaseBtn);
      listElement.appendChild(decreaseBtn);
      this.cartProductList.appendChild(listElement);
   }

   private appendCartPopup() {
      const popupContainer = document.createElement('div');
      const productsList = document.createElement('ul');

      popupContainer.classList.add(Cart.CART_POPUP_CLASS);
      productsList.classList.add(Cart.PRODUCTS_LIST_CLASS);
      
      this.cartProductList = productsList;
      popupContainer.appendChild(productsList);
      this.rootElement.appendChild(popupContainer);

   }
}