import { h } from "@stencil/core";
export class wxccAltair {
    render() {
        return (h("div", { key: '2c61a09b55eacd0b6bb1038d1edacaf2d14841cc', id: "frame" }, h("iframe", { key: '415aa466ca4eb252177ac4e61508381730178f5f', src: "https://webexcc-sa.github.io/tools/gqlWorkbench/altair-static/index.html", height: "100%", width: "100%", frameborder: "0", loading: "lazy" })));
    }
    static get is() { return "wxcc-altair"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["wxcc-altair.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["wxcc-altair.css"]
        };
    }
}
//# sourceMappingURL=wxcc-altair.js.map
