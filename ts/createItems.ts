import { items } from "./itemsList.js";

const categoryBtn = document.querySelector(".category") as HTMLElement;
const itemsCnt = document.querySelector(".itemsCnt");

export class CreateItems {

	public itemsReturn: Object[];
	
	constructor() {
		this.itemsReturn = [];
  
		this.listenerFunc();
	}

	listenerFunc() {
		categoryBtn?.addEventListener('click', (e) => { this.filteringOfItemsArray(e), this.createCardElementsForItems() });
	}

	filteringOfItemsArray(e: any) {
		let value = e.target.value;
		
		const whatCategory = items.filter(el => el.category === value);

		whatCategory.forEach(el => {
			this.itemsReturn.push(el);
		})
	}

	

	createCardElementsForItems() {
		if (this.itemsReturn.length !== 0) {

			this.itemsReturn.forEach((el:any) => {
				
				

				const articleEl = document.createElement("article");
			   const h2 = document.createElement("h2");
				const p = document.createElement("p");
				const strong = document.createElement("strong");
				const pCategory = document.createElement("p");
				const inputNumber = document.createElement("input");
				const addToCartBtn = document.createElement("button");
 
			

				h2.textContent =  el.title;
				pCategory.textContent = el.category;
				addToCartBtn.setAttribute("value", el.nrItem);

				articleEl.classList.add("itemsCnt__item");
				h2.classList.add("itemsCnt__itemTitle");
				p.classList.add("itemsCnt__itemDescrition");
				strong.classList.add("itemsCnt__itemPrice");
				pCategory.classList.add("itemsCnt__itemTitleCategory");
				inputNumber.classList.add("itenmsCnt__itemQuantity");
				addToCartBtn.classList.add("itemsCnt__addToCart");

				articleEl.appendChild(h2);
				articleEl.appendChild(pCategory);
				articleEl.appendChild(inputNumber);
				articleEl.appendChild(addToCartBtn);
				return itemsCnt?.appendChild(articleEl);
			})
		} else {
			console.log("is zero")
		}
	
	}

}
