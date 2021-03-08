import { registerApplication, start } from "single-spa";
import * as isActive from "./activity-functions";

registerApplication(
  "@thawkin3/single-spa-demo-nav",
  () => System.import("@thawkin3/single-spa-demo-nav"),
  isActive.nav,
  { domElement: document.getElementById("nav-container") }
);

registerApplication(
  "@thawkin3/single-spa-demo-page-1",
  () => System.import("@thawkin3/single-spa-demo-page-1"),
  isActive.objectStorage,
  { domElement: document.getElementById("object-storage-container") }
);

registerApplication(
  "@thawkin3/single-spa-demo-page-2",
  () => System.import("@thawkin3/single-spa-demo-page-2"),
  isActive.CNA,
  { domElement: document.getElementById("CNA-container123") }
);

start();
