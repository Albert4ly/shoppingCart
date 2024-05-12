import { items } from "./itemsList.js";
const itemsCnt = document.querySelector(".itemsCnt");
export class LocalStorage {
    constructor() {
        this.intoCartItems = [];
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
}
