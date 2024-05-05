import { items } from "./itemsList.js";

const categoryBtn = document.querySelector(".category") as HTMLElement ;

export class CreateItems {

	itemsReturn: Object[];
	
	constructor() {
		this.itemsReturn = [];
  
		this.listenerFunc();
	}

	listenerFunc() {
		categoryBtn?.addEventListener('click', (e) => { this.filteringOfItemsArray(e) });
	}

	filteringOfItemsArray(e: any) {
		let value = e.target.value;
		
		const whatCategory = items.filter(el => el.category === value);

		whatCategory.forEach(el => {
			this.itemsReturn.push(el);
		})

	}


}
