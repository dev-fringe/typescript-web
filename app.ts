import { Router } from "@vaadin/router";

import "reset-css";
import "@view/HomeView";
import "@view/HelloView";
import "@view/common/NotFound";
import "@view/common/MyHeader";
import "@view/common/MyFooter";

export const name = "test";
export const router = new Router(document.querySelector("main"));

window.addEventListener('load', () => {
    initRouter();  
});

function initRouter() {
    router.setRoutes([
        { path: "/", component: "home-view" },
        { path: "/hello/:name", component: "hello-view" },
        { path: "(.*)", component: "not-found" }
    ]);
}