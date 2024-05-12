import { items } from "./itemsList.js";

const itemsCnt = document.querySelector(".itemsCnt");

export class LocalStorage {

   public intoCartItems: Object[];

   constructor() {
      this.intoCartItems = [];

      this.listenerFunc();
   }

   listenerFunc() {
      itemsCnt?.addEventListener('click', (e) => { this.addItemToCart(e) });
   } 

   addItemToCart(e: any) {
      items.forEach((el) => {
         if (Number(e.target.value) === el.nrItem) {
            this.intoCartItems.push(el);
            localStorage.setItem("intoCart", JSON.stringify(this.intoCartItems));
         }
       })
  }

}