import './node_modules/@polymer/polymer/polymer-element.js';

export class CodeDemo extends PolymerElement {

    static get template() {
        return html`
                    <style is="custom-style" include="int-styles syntax-highlighting">
        
                    :host {
                        display: block;
                        position: relative;
                    }

                    iframe {
                        width: 100%;
                        box-sizing: border-box;
                        border-bottom-left-radius: 0;
                        border-bottom-right-radius: 0;
                        margin-bottom: 0;
                        border-bottom: 0;
                    }

                    pre {
                        margin-top: 0;
                    }

                    code {
                        border-top-left-radius: 0;
                        border-top-right-radius: 0;
                        max-height: 80vh;
                    }

                    input[type=range] {
                        -webkit-appearance: none;
                        background: transparent;
                        width: 100%;
                    }

                    input[type=range]::-webkit-slider-thumb {
                        -webkit-appearance: none;
                        height: 2em;
                        width: 2em;
                        border-radius: 5em;
                        margin-top: -.7em;
                        background: white;
                    }

                    input[type=range]::-moz-range-thumb {
                        height: 2em;
                        width: 2em;
                        border-radius: 5em;
                        margin-top: -.7em;
                        background: white;
                    }

                    input[type=range]::-webkit-slider-runnable-track {
                        height: .5em;
                        margin: .7em .3em;
                        border-radius: 5em;
                        background: grey;
                    }

                    input[type=range]::-moz-range-track {
                        height: .5em;
                        width: 100%;
                        margin: .7em .3em;
                        border-radius: 5em;
                        background: grey;
                    }

                    markdown-element {
                        position: relative;
                    }

                    #copy-button {
                        position: absolute;
                        bottom: 1em;
                        right: 1em;
                    }

                </style>

                
                <markdown-element markdown="[[markdown]]">
                    <div slot="markdown-html"></div>
                </markdown-element>
                <button id="copy-button" on-click="copyToClipboard">Copy</button>
        `
    }



}