import { items } from "./itemsList.js";
import { Storages } from "./storages.js";

const itemsCnt = document.querySelector(".itemsCnt");
const shoppingCartSection = document.querySelector(".shoppingCartSection");

export class LocalStorage<T> extends Storages<T> {

   public intoCartItems: Object[];

   public constructor(storageKey: string) {
      super(storageKey);

      this.intoCartItems = [];

      // this.setItems();
      this.getItems();
      this.listenerFunc();
   }

   listenerFunc() {
      itemsCnt?.addEventListener('click', (e) => { this.setItems(e) });
   } 

   public setItems(e: any): void {
      items.forEach((el) => {
         if (Number(e.target.value) === el.nrItem) {
            this.intoCartItems.push(el);
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.intoCartItems));
         }
       })
   }

   public getItems(): T[] {
      const itemsArray = JSON.parse(localStorage.getItem(this.STORAGE_KEY) as string) as T[];

      // if (itemsArray !== null) {
      //    for (let i = 0; i < itemsArray.length; i++) {
      //       const div = document.createElement("div");
           
      //       div.textContent = itemsArray[i].title;
      //       shoppingCartSection?.appendChild(div);
      //    }
      // }
      console.log(itemsArray);
      return itemsArray;
   }

}