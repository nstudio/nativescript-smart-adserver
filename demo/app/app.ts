import "./bundle-config";
import * as application from "tns-core-modules/application";
import { SmartAdBanner } from "@nstudio/nativescript-smart-adserver";

SmartAdBanner.init(104808, "https://mobile.smartadserver.com");
// SmartAdBanner.init(206187, "http://reporteindigo.com");
application.start({ moduleName: "main-page" });
