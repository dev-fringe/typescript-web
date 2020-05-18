
import { Router } from "@vaadin/router";

import "@view/hello";
import "@view/404";

const outlet = document.querySelector("main");

export const router = new Router(outlet);
router.setRoutes([
  {
    path: "/index",
    component: "hello-view"
  },
  { path: "/hello/:name", component: "hello-view" },
  { path: "(.*)", component: "not-found" }
]);