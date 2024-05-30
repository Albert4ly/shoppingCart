export class Router {
    constructor() {
        this.previousHash = '';
        this.routes = [];
        this.changeRoute = () => {
            const newLocation = window.location.hash;
            if (this.previousHash === newLocation) {
                return;
            }
            const route = this.routes.find(({ path }) => newLocation.match(new RegExp(path)));
            if (!route) {
                return;
            }
            this.previousHash = newLocation;
            route.renderFunc();
        };
        window.addEventListener('hashchange', this.changeRoute);
        window.addEventListener('DOMContentLoaded', this.changeRoute);
    }
    addRoute(route) {
        const path = `#/${route.name}`;
        this.routes.push(Object.assign(Object.assign({}, route), { path }));
    }
    ;
}
