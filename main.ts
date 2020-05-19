import { Router } from "@vaadin/router";

import "reset-css";
import "@view/HomeView";
import "@view/HelloView";
import "@view/common/NotFound";
import "@view/common/Header";
import "@view/common/Footer"; 
import "@view/UpdateArraysAndObjectsView"; 
import "@view/FetchingDataView"; 


export const name = "test";
export const router = new Router(document.querySelector("app-main"));

window.addEventListener('load', () => {
    initRouter();  
});

function initRouter() {
    router.setRoutes([
        { path: "/", component: "home-view" },
        { path: "/hello/:name", component: "hello-view" },
        { path: "/update-arrays-and-objects-view", component: "update-arrays-and-objects-view" },
        { path: "/fetching-data-view", component: "fetching-data-view" },
        { path: "(.*)", component: "not-found" }
    ]);
}