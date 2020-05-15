import { LitElement, css, html, customElement } from 'lit-element';

@customElement('my-header')
export class MyHeader extends LitElement {
  static get styles() {
    return css`
      div { background: #ccc; }
    `;
  }

  render() {
    return html`
      <div>
        <h1>Header</h1>
      </div>
    `;
  }
}