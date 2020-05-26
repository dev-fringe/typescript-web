import { Router } from "@vaadin/router";

export {} from "normalize.css";
export {} from "./css/main.css";
import "@view/HomeView";
import "@view/HelloView";
import "@view/common/NotFound";
import "@view/common/Header";
import "@view/common/Footer"; 
import "@view/UpdateArraysAndObjectsView"; 
import "@view/FetchingDataView"; 
import * as query from 'jquery'
import {Client, Message, StompSubscription} from '@stomp/stompjs';

export const name = "test";
export const router = new Router(document.querySelector("app-main"));
export const parser = new DOMParser();
export const jQuery = query;
export const $ = query;

var client!: Client;
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

this.client! = new Client({
    brokerURL: "'http://localhost/topic",
    debug: function (str) {
        console.log(str);
    },
    reconnectDelay: 5000,
    heartbeatIncoming: 4000,
    heartbeatOutgoing: 4000
});
this.client!.onConnect = function (frame) {
};