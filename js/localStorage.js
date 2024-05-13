import { items } from "./itemsList.js";
const itemsCnt = document.querySelector(".itemsCnt");
const shoppingCartSection = document.querySelector(".shoppingCartSection");
export class LocalStorage {
    constructor() {
        this.intoCartItems = [];
        this.getItemsFromLocalStorage();
        this.listenerFunc();
    }
    listenerFunc() {
        itemsCnt === null || itemsCnt === void 0 ? void 0 : itemsCnt.addEventListener('click', (e) => { this.addItemToCart(e); });
    }
    addItemToCart(e) {
        items.forEach((el) => {
            if (Number(e.target.value) === el.nrItem) {
                this.intoCartItems.push(el);
                localStorage.setItem("intoCart", JSON.stringify(this.intoCartItems));
            }
        });
    }
    getItemsFromLocalStorage() {
        const itemsFromLocalStorage = JSON.parse(localStorage.getItem("intoCart"));
        if (itemsFromLocalStorage !== null) {
            for (let i = 0; i < itemsFromLocalStorage.length; i++) {
                const div = document.createElement("div");
                div.textContent = itemsFromLocalStorage[i].title;
                shoppingCartSection === null || shoppingCartSection === void 0 ? void 0 : shoppingCartSection.appendChild(div);
            }
        }
    }
}
