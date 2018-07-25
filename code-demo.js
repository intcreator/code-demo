import { LitElement, html } from '@polymer/lit-element/lit-element.js';
import { unsafeHTML } from 'lit-html/lib/unsafe-html.js';
import '@intcreator/markdown-element';

export class CodeDemo extends LitElement {

    _render({ renderedCode, markdown }) {
        return html`
            <style>

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
            ${ renderedCode }
            <markdown-element markdown$=${ markdown }></markdown-element>
            <!-- <button id="copy-button" on-click="copyToClipboard">Copy</button> -->
        `;
    }

    static get properties() {
        return {
            code: String,
            renderedCode: String,
            src: String,
            scriptTag: Object,
            markdown: String
        };
    }

    set code(code) {
        console.log(code);
        this.renderedCode = this.renderCode(code);
        this.markdown = `\`\`\`html\n${ code }\n\`\`\``.trim();
    }

    // fetch the markdown using the `src` attribute
    // note: overrides `markdown` attribute
    set src(src) {
        this
            .fetchCode(src)
            .then(r => this.code = r);
    }

    // set the code from the script tag, trimming the whitespace
    // note: overrides `src` and `code` attributes
    set scriptTag(scriptTag) {
        if(scriptTag) this.code = scriptTag.text.trim();
    }

    connectedCallback() {
        super.connectedCallback();
        // look for a script tag
        this.scriptTag = this.querySelector('script[type="text/markdown"]');
    }

    // fetch the markdown and set it locally
    async fetchCode(src) {
        return await fetch(src)
            .then(async response => await response.text())
            .catch(e => 'Failed to read code file.')
    }

    renderCode(code) {
        return html`${unsafeHTML(code)}`;
    }

}

customElements.define('code-demo', CodeDemo);