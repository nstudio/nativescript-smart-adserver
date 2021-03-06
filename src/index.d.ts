import { Common } from "./smart-adserver.common";
import { ViewBase } from "tns-core-modules/ui/frame/frame";
import { Property } from "tns-core-modules/ui/core/view";
export declare const siteIdProperty: Property<Common, number>;
export declare const pageIdProperty: Property<Common, string>;
export declare const formatIdProperty: Property<Common, number>;
export declare const autoRefreshProperty: Property<Common, boolean>;
export declare const targetProperty: Property<Common, string>;
export declare class SmartAdBanner extends Common {
    nativeView: any;
    pageId: string;
    formatId: string;
    autoRefresh: string;
    target: string;
    static init(siteId: number, baseUrl: string): void;
}
