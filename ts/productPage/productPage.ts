import { Product } from "../product.js";
import { Router } from "../router/router.js";
import { Cart } from "../cart/cart.js";

export abstract class ProductPage<T extends Product> {
   
   private readonly rootElement!: HTMLDivElement;

   protected readonly abstract productTemplate: (product: T) => HTMLElement;
   protected  readonly products: T[] = [];
   


   public constructor(
      containerId: string,
      listingName: string,
      private readonly router: Router,
      protected readonly cart: Cart
   ) {
      const containerElement = document.getElementById(containerId);

      if (!containerId) { 
         return;
      }

      this.router.addRoute({ name: listingName, renderFunc: this.render });
      this.rootElement = containerElement as HTMLDivElement;
   }
   
   public render = (): void => {
      while (this.rootElement.firstChild) {
         this.rootElement.firstChild.remove();
      } 
        
      
      const productBoxes = this.products.map(this.productTemplate);
      productBoxes.forEach(product => this.rootElement.appendChild(product));
   };
} 