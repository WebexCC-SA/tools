import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const wxccAltairCss = "#frame{height:92vh;bottom:0}";

const wxccAltair = /*@__PURE__*/ proxyCustomElement(class wxccAltair extends HTMLElement {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
    }
    render() {
        return (h("div", { key: '2c61a09b55eacd0b6bb1038d1edacaf2d14841cc', id: "frame" }, h("iframe", { key: '415aa466ca4eb252177ac4e61508381730178f5f', src: "https://webexcc-sa.github.io/tools/gqlWorkbench/altair-static/index.html", height: "100%", width: "100%", frameborder: "0", loading: "lazy" })));
    }
    static get style() { return wxccAltairCss; }
}, [257, "wxcc-altair"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["wxcc-altair"];
    components.forEach(tagName => { switch (tagName) {
        case "wxcc-altair":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, wxccAltair);
            }
            break;
    } });
}

const WxccAltair = wxccAltair;
const defineCustomElement = defineCustomElement$1;

export { WxccAltair, defineCustomElement };
//# sourceMappingURL=wxcc-altair.js.map

//# sourceMappingURL=wxcc-altair.js.map