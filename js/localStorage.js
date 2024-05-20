// import { items } from "./itemsList.js";
import { Storages } from "./storages.js";
// const itemsCnt = document.querySelector(".itemsCnt");
// const shoppingCartSection = document.querySelector(".shoppingCartSection");
export class LocalStorage extends Storages {
    // public intoCartItems: Object[];
    constructor(storageKey) {
        super(storageKey);
        // this.intoCartItems = [];
        this.getItems();
        // this.listenerFunc();
    }
    // listenerFunc() {
    //    itemsCnt?.addEventListener('click', (e) => { this.setItems(e) });
    // } 
    setItems(products) {
        // items.forEach((el) => {
        //    if (Number(e.target.value, products: T[]) === el.nrItem) {
        //       this.intoCartItems.push(el);
        //       localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.intoCartItems, products: T[]));
        //    }
        //  })
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(products));
    }
    getItems() {
        const itemsArray = JSON.parse(localStorage.getItem(this.STORAGE_KEY));
        // if (itemsArray !== null) {
        //    for (let i = 0; i < itemsArray.length; i++) {
        //       const div = document.createElement("div");
        //       div.textContent = itemsArray[i].title;
        //       shoppingCartSection?.appendChild(div);
        //    }
        // }
        return itemsArray;
    }
    clearItems() {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify([]));
    }
    init() {
        if (!localStorage.getItem(this.STORAGE_KEY)) {
            this.clearItems();
        }
    }
}
