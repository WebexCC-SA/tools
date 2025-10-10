import { h } from "@stencil/core";
export class wxccAltair {
    render() {
        return (h("div", { key: '2c61a09b55eacd0b6bb1038d1edacaf2d14841cc', id: "frame" }, h("iframe", { key: 'c17b812f8c47da10798f0c64c0c47351750123b0', src: "https://webexcc-sa.github.io/tools/gqlWorkbench/altair.html", height: "100%", width: "100%", frameborder: "0", loading: "lazy" })));
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
