import { items } from "./itemsList.js";
const categoryBtn = document.querySelector(".category");
export class CreateItems {
    constructor() {
        this.itemsReturn = [];
        this.listenerFunc();
    }
    listenerFunc() {
        categoryBtn === null || categoryBtn === void 0 ? void 0 : categoryBtn.addEventListener('click', (e) => { this.filteringOfItemsArray(e); });
    }
    filteringOfItemsArray(e) {
        let value = e.target.value;
        const whatCategory = items.filter(el => el.category === value);
        whatCategory.forEach(el => {
            this.itemsReturn.push(el);
        });
    }
}
