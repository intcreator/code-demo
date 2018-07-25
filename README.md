# &lt;code-demo&gt;

A small but useful isolated code demo element.  Uses `<iframe>` to create an isolated space where HTML and JavaScript code can run without affecting other parts of the page.

`<code-demo>` uses `<code-demo>` to render the code as from Markdown.

## Set up

Install and save to package.json:

```
npm i --save @intcreator/code-demo
```

Import where needed:

```javascript
import '@intcreator/code-demo';
```

## Usage

### `code` property

The code source is taken directly from the `code` property supplied to the element.  The code supplied can be dynamically updated to change the rendered code.

```html
<code-demo code="<button>Click me!</button>"></code-demo>
```

### `src` attribute

The `src` attribute can be used to load a markdown file through AJAX.  It overrides the `code` attribute.  The source can be dynamically updated to change the markdown file displayed.

```html
<code-demo src="./demo.html"></code-demo>
```

### `<script>` tag

A `<script>` tag can be inserted inside of the `<code-demo>` to provide the code source.  It overrides the `code` and `src` attributes.  Support for changing this code source dynamically is not yet implemented.

```html
<code-demo>
    <script type="text/markdown">
        <p>This demo uses a <code>&lt;script&gt;</code> tag.</p>
    </script>
</code-demo>
```

## Roadmap to 1.0

Here are a few issues that need to be resolved before the 1.0 release:

- Dynamically update markdown when changed in the script tag (if possible) or find another way to dynamically update multiline-markdown
- Actually use an `<iframe>` to render the code instead of just sticking it in the template
- Figure out how to support different kinds of code (right now just HTML with embedded `<script>` tags)

## Contributing

Let's make this element even better!  Want to help?  Found a problem?  Open an issue or contact me on the Polymer Slack, Twitter, etc. @intcreator.