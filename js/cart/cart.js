export class Cart {
    constructor(containerId, storage) {
        this.products = [];
        this.createListElement = (product) => {
            const listElement = document.createElement('li');
            const productInfoElement = document.createElement('p');
            const increaseBtn = document.createElement('button');
            const decreaseBtn = document.createElement('button');
            productInfoElement.textContent = `${product.name}, amount ${product.quantity}`;
            increaseBtn.textContent = '+';
            decreaseBtn.textContent = '-';
            listElement.classList.add(Cart.PRODUCTS_LIST_ITEM_CLASS);
            increaseBtn.addEventListener('click', () => this.increaseQuantity(product.nrItem));
            decreaseBtn.addEventListener('click', () => this.decreaseQuantity(product.nrItem));
            listElement.appendChild(productInfoElement);
            listElement.appendChild(increaseBtn);
            listElement.appendChild(decreaseBtn);
            this.cartProductList.appendChild(listElement);
        };
        const cartEl = document.getElementById(containerId);
        if (cartEl) {
            this.rootElement = cartEl;
            this.attachCartToDOM();
            this.storage = storage;
            this.products = storage.getItems();
            return;
        }
        throw Error('don\'t find element of cart');
    }
    addToCart(product) {
        if (this.isProductAlreadyInCart(product.nrItem)) {
            this.changeProductQuantity(product.nrItem, product.quantity);
        }
        else {
            this.products.push(product);
            this.refreshCartData();
        }
        this.storage.setItems(this.products);
    }
    increaseQuantity(nrItem) {
        this.changeProductQuantity(nrItem, 1);
        this.storage.setItems(this.products);
    }
    decreaseQuantity(nrItem) {
        this.changeProductQuantity(nrItem, -1);
        this.storage.setItems(this.products);
    }
    isProductAlreadyInCart(nrItem) {
        return this.products.some(product => product.nrItem === nrItem);
    }
    changeProductQuantity(nrItem, newQuantity) {
        let indexProductToRemove = null;
        this.products.forEach((product, index) => {
            if (product.nrItem !== nrItem) {
                return;
            }
            product.quantity += newQuantity;
            if (product.quantity === 0) {
                indexProductToRemove = index;
            }
        });
        if (indexProductToRemove !== null) {
            this.products.splice(indexProductToRemove, 1);
        }
        this.refreshCartData();
    }
    attachCartToDOM() {
        this.rootElement.classList.add(Cart.CART_CLASS);
        this.appendCartBtn();
        this.appendCartPopup();
    }
    appendCartBtn() {
        const cartBtn = document.createElement('button');
        // cartBtn.classList.add('navBar__shoppingCartBtn"');
        cartBtn.addEventListener('click', () => {
            if (!this.rootElement.classList.contains(Cart.OPEN_POPUP_CLASS)) {
                this.refreshCartData();
                return;
            }
            this.rootElement.classList.toggle(Cart.OPEN_POPUP_CLASS);
        });
        this.rootElement.appendChild(cartBtn);
    }
    refreshCartData() {
        while (this.cartProductList.firstChild) {
            this.cartProductList.firstChild.remove();
        }
        this.products.forEach(this.createListElement);
    }
    appendCartPopup() {
        const popupContainer = document.createElement('div');
        const productsList = document.createElement('ul');
        popupContainer.classList.add(Cart.CART_POPUP_CLASS);
        productsList.classList.add(Cart.PRODUCTS_LIST_CLASS);
        this.cartProductList = productsList;
        popupContainer.appendChild(productsList);
        this.rootElement.appendChild(popupContainer);
    }
}
Cart.CART_CLASS = 'cart';
Cart.CART_POPUP_CLASS = 'class__popup';
Cart.OPEN_POPUP_CLASS = 'cart--is-popup-active';
Cart.PRODUCTS_LIST_ITEM_CLASS = 'class__list-item';
Cart.PRODUCTS_LIST_CLASS = 'cart__products-list';
