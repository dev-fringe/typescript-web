import { Router } from "@vaadin/router";

import "reset-css";
import "@view/HelloView";
import "@view/HelloView2";
import "@view/404";
import "@view/MyHeader";
import "@view/MyFooter";

const outlet = document.querySelector("main");
export const router = new Router(outlet);
window.addEventListener('load', () => {
    initRouter();  
});

function initRouter() {
    router.setRoutes([
        { path: "/", component: "hello-view" },
        { path: "/hello/:name", component: "hello-view2" },
        { path: "(.*)", component: "not-found" }
    ]);
}