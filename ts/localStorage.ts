import { items } from "./itemsList.js";

const itemsCnt = document.querySelector(".itemsCnt");
const shoppingCartSection = document.querySelector(".shoppingCartSection");

export class LocalStorage {

   public intoCartItems: Object[];

   constructor() {
      this.intoCartItems = [];

      this.getItemsFromLocalStorage();
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
   
   getItemsFromLocalStorage() {
      const itemsFromLocalStorage = JSON.parse(localStorage.getItem("intoCart"));
      if (itemsFromLocalStorage !== null) {
         for (let i = 0; i < itemsFromLocalStorage.length; i++) {
            const div = document.createElement("div");
           
            div.textContent = itemsFromLocalStorage[i].title;
            shoppingCartSection?.appendChild(div);
         }
      }
      
   }

}