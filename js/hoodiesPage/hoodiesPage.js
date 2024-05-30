import { ProductPage } from "../productPage/productPage.js";
// import { Product } from "../product.js";
export class HoodiesPage extends ProductPage {
    constructor(containerId, listingName, router, cart) {
        super(containerId, listingName, router, cart);
        this.products = [
            { hoodieSize: 'M', name: 'hoodieNintendo', category: 'hoodie', nrItem: 3403, price: 5 },
            { hoodieSize: 'L', name: 'hoodieAdidas', category: 'hoodie', nrItem: 5203, price: 4 }
        ];
        this.productTemplate = ({ hoodieSize, name, category, nrItem, price }) => {
            const element = document.createElement('article');
            const titleElement = document.createElement('p');
            const priceElement = document.createElement('p');
            const sizeElement = document.createElement('p');
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
            sizeElement.textContent = hoodieSize;
            formElement.addEventListener('submit', () => {
                const input = formElement.querySelector(`#product-${nrItem}`);
                const quantity = Number(input.value);
                this.cart.addToCart({ name, category, nrItem, price, quantity });
                input.value = '0';
            });
            element.appendChild(titleElement);
            element.appendChild(priceElement);
            element.appendChild(formElement);
            element.appendChild(sizeElement);
            return element;
        };
    }
}
;
