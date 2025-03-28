import { h } from "@stencil/core";
export class wxccAuth {
    constructor() {
        this.hide = true;
    }
    async burp(x) {
        console.log(x);
        const code = x.slice(x.search("=") + 1, x.search("&"));
        // console.log(code)
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        let urlencoded = new URLSearchParams();
        urlencoded.append("grant_type", "authorization_code");
        urlencoded.append("redirect_uri", this.callbackUrl);
        urlencoded.append("client_id", "C1b249680a1788a109f1cd53c578c874a28a3e6468929598d4552d17d0a12f32f");
        urlencoded.append("client_secret", "49aad1cd3ed0758755c69d818baf897923876854423dbc01d608fc8255d14044");
        urlencoded.append("code", code);
        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded
        };
        // console.log(urlencoded.toString())
        let response = await fetch("https://webexapis.com/v1/access_token", requestOptions);
        let deets = await response.json();
        // console.log(deets)
        this.token = "Bearer " + deets.access_token;
        this.expStamp = new Date(Date.now() + (deets.expires_in * 1000));
        sessionStorage.setItem("token", this.token);
        sessionStorage.setItem("expStamp", this.expStamp);
        // console.log(this.token)
        // console.log(this.expStamp)
        this.hide = false;
    }
    onGetAuth() {
        if (+new Date(sessionStorage.getItem("expStamp")) > Date.now()) {
            this.token = sessionStorage.getItem("token");
            this.hide = false;
        }
        else {
            window.open(`https://webexapis.com/v1/authorize?response_type=code&client_id=C1b249680a1788a109f1cd53c578c874a28a3e6468929598d4552d17d0a12f32f&state=new&scope=cjp%3Aconfig%20cjp%3Aconfig_read%20cjp%3Aconfig_write&redirect_uri=${this.callbackUrl}`, "steve", "popup");
        }
    }
    render() {
        let tok = `{
            "headers":{
            "Authorization":"${this.token}"
            }
        }`;
        return [
            h("div", { key: 'c98637edf2bb946730bbabca6668470f4dbbe742', class: "frame" + (this.hide ? " hidden" : "") }, h("h1", { key: 'c996f9dfba2122296ce6da43036ad63a2b4289b5' }, "Copy this text into your Global Environment Variable"), h("p", { key: '6896c243d64f9504ac53ce5ccff20eac27d0f199' }, tok), h("br", { key: 'b7ff33ad43616466635f716e022f559161aeedf2' }), h("center", { key: 'e3aea53a834ed0aff4bb5f90fc1e94bbb8197e53' }, h("button", { key: '3a2e603ae419d498ebb719b133577fd382a40db3', onClick: () => { navigator.clipboard.writeText(tok); } }, "Copy"), h("button", { key: 'f9c9b04a7cb55d2970fe5b3e24d823982aadce0f', onClick: () => { this.hide = !this.hide; } }, "Close")))
        ];
    }
    static get is() { return "wxcc-auth-widget"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["wxcc-auth-widget.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["wxcc-auth-widget.css"]
        };
    }
    static get properties() {
        return {
            "callbackUrl": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "callback-url",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "token": {},
            "expStamp": {},
            "hide": {}
        };
    }
    static get methods() {
        return {
            "burp": {
                "complexType": {
                    "signature": "(x: any) => Promise<void>",
                    "parameters": [{
                            "name": "x",
                            "type": "any",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            }
        };
    }
    static get listeners() {
        return [{
                "name": "wxccAuthPop",
                "method": "onGetAuth",
                "target": "body",
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=wxcc-auth-widget.js.map
