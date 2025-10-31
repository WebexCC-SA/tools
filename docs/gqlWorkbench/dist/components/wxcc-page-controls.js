import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';

const wxccPageControlsCss = ".controls{width:100%;background-color:#555;text-align:center;transition:all 0.3s ease;color:white;font-size:36px;margin:auto;height:8vh;overflow:visible;display:grid;grid-auto-flow:column;grid-template-columns:1fr 1fr 1fr 1fr;font-family:Arial, Helvetica, sans-serif}button{padding:14px 28px;margin:15px;width:20%}.btn{display:grid;justify-self:center;margin:1.5vh;width:70%;background:#998f8f;cursor:pointer;border-radius:30px;height:5vh}#back{width:25%;justify-self:right}#next{width:25%;justify-self:left}span:hover{background:#2196F3}#tools{z-index:10}.tools{z-index:10;background:#998f8f;display:none;font-size:32px;}#tools:hover .tools{display:grid;border-bottom-right-radius:30px;border-bottom-left-radius:30px;transition:block ease-in-out 2s;overflow:hidden}#tools:hover{height:revert;padding-left:0px;padding-right:0px;padding-bottom:0px}";

const PageControls = /*@__PURE__*/ proxyCustomElement(class PageControls extends HTMLElement {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
        this.wxccGuidePageTurn = createEvent(this, "wxccGuidePageTurn", 7);
        this.toggleGuide = createEvent(this, "toggleGuide", 7);
        this.wxccTimeWidget = createEvent(this, "wxccTimeWidget", 7);
        this.wxccAuthPop = createEvent(this, "wxccAuthPop", 7);
        this.vidPop = createEvent(this, "vidPop", 7);
        this.vodTog = createEvent(this, "vodTog", 7);
    }
    onToggleGuide() {
        this.toggleGuide.emit();
    }
    onNext() {
        // let iHere = this.lessons.findIndex(x => x.title === this.currentPage)
        // if (!iHere){
        //     this.currentPage = this.lessons[0].title
        // }
        // console.log(this.currentPage)
        // console.log(iHere)
        // this.currentPage = this.lessons[iHere + 1].title
        // const url = this.lessons[iHere + 1].address
        // this.wxccGuidePageTurn.emit(url)
        this.wxccGuidePageTurn.emit("next");
    }
    onBack() {
        // let iHere = this.lessons.findIndex(x => x.title === this.currentPage)
        // if (!iHere){
        //     this.currentPage = this.lessons[0].title
        // }
        // console.log(this.currentPage)
        // console.log(iHere)
        // this.currentPage = this.lessons[iHere - 1].title
        // const url = this.lessons[iHere - 1].address
        // this.wxccGuidePageTurn.emit(url)
        this.wxccGuidePageTurn.emit("back");
    }
    onTimeWidget() {
        this.wxccTimeWidget.emit();
    }
    render() {
        // console.log(this.lessons[0])
        return (h("div", { key: 'a52a526e8fae61b5ed8c6a4b72372c5d7954e181', class: "controls" }, h("span", { key: '8a28315a2ecc7b1dd3e6db37d9b46c2be40dc623', id: "back", onClick: this.onBack.bind(this), class: "nav btn" }, "Back"), h("span", { key: '0f2078fa9f323861b94b2e60093596f37cd2f229', id: "tools", class: "mag btn" }, "Tools", h("div", { key: 'bcc0ed33c750d59337c50241162098932072e1ef', class: "tools" }, h("span", { key: 'ba47b7796e2b76fad3250fdbe18115276d20d3aa', onClick: this.onTimeWidget.bind(this) }, "Time Widget"), h("span", { key: '77ca337aa4405fb642d5a95819f58ee0cc3099ae', onClick: () => { this.vodTog.emit(); } }, "Toggle Video"), h("span", { key: '3bee7638c61519c8094fdb644053412aacc08c22', onClick: () => { this.wxccAuthPop.emit(); } }, "Authorization"))), h("span", { key: '11ed11397b395132679e010566ded0f64c167b2f', class: "btn", id: "guide", onClick: this.onToggleGuide.bind(this) }, "Guide"), h("span", { key: '72443767cc35d514889515af8fbfe066a4dc6835', id: "next", onClick: this.onNext.bind(this), class: "nav btn" }, "Next")));
    }
    static get style() { return wxccPageControlsCss; }
}, [257, "wxcc-page-controls", {
        "currentPage": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["wxcc-page-controls"];
    components.forEach(tagName => { switch (tagName) {
        case "wxcc-page-controls":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, PageControls);
            }
            break;
    } });
}

const WxccPageControls = PageControls;
const defineCustomElement = defineCustomElement$1;

export { WxccPageControls, defineCustomElement };
//# sourceMappingURL=wxcc-page-controls.js.map

//# sourceMappingURL=wxcc-page-controls.js.map