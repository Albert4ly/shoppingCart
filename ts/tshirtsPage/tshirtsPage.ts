import Tshirt from "../productTypes/tshirt.js";
import { ProductPage } from "../productPage/productPage.js";
import { Router } from "../router/router.js";
import { Cart } from "../cart/cart.js";
// import { Product } from "../product.js";


export class TshirtsPage extends ProductPage<Tshirt> {
   
   protected readonly products: Tshirt[] = [
      { name: 'tshirtNintendo', category: 'tshirt', nrItem: 9803, price: 5 },
      { name: 'tshirtAdidas', category: 'tshirt', nrItem: 4503, price: 4}
   ];
   
   public constructor(
      containerId: string,
      listingName: string,
      router: Router,
      cart: Cart) {
      super(containerId, listingName, router, cart)
   }
   protected readonly productTemplate = ({ name, category, nrItem, price }: Tshirt): HTMLElement => {
   const element = document.createElement('article');
   const titleElement = document.createElement('p');
   const priceElement = document.createElement('p');
   const formElement = document.createElement('form');

   formElement.innerHTML = `
   <label>
   amount
   <input id="product-${nrItem}" type="number" required value="0"/>
   </label>
   <button type="submit">addToCart</button>
   `.trim();

   titleElement.textContent = name;
   priceElement.textContent = price.toFixed(2);


   formElement.addEventListener('submit', () => {
      const input = formElement.querySelector(`#product-${nrItem}`) as HTMLInputElement;
      const quantity = Number(input.value);
      this.cart.addToCart({ name, category, nrItem, price, quantity });
      input.value = '0';
   });

   element.appendChild(titleElement);
   element.appendChild(priceElement);
   element.appendChild(formElement);
   return element;
};

};