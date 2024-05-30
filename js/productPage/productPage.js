export class ProductPage {
    constructor(containerId, listingName, router, cart) {
        this.router = router;
        this.cart = cart;
        this.products = [];
        this.render = () => {
            while (this.rootElement.firstChild) {
                this.rootElement.firstChild.remove();
            }
            const productBoxes = this.products.map(this.productTemplate);
            productBoxes.forEach(product => this.rootElement.appendChild(product));
        };
        const containerElement = document.getElementById(containerId);
        if (!containerId) {
            return;
        }
        this.router.addRoute({ name: listingName, renderFunc: this.render });
        this.rootElement = containerElement;
    }
}
