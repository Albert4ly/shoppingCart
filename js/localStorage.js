import { items } from "./itemsList.js";
import { Storages } from "./storages.js";
const itemsCnt = document.querySelector(".itemsCnt");
const shoppingCartSection = document.querySelector(".shoppingCartSection");
export class LocalStorage extends Storages {
    constructor(storageKey) {
        super(storageKey);
        this.intoCartItems = [];
        // this.setItems();
        this.getItems();
        this.listenerFunc();
    }
    listenerFunc() {
        itemsCnt === null || itemsCnt === void 0 ? void 0 : itemsCnt.addEventListener('click', (e) => { this.setItems(e); });
    }
    setItems(e) {
        items.forEach((el) => {
            if (Number(e.target.value) === el.nrItem) {
                this.intoCartItems.push(el);
                localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.intoCartItems));
            }
        });
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
        console.log(itemsArray);
        return itemsArray;
        console.log(itemsArray);
    }
}
