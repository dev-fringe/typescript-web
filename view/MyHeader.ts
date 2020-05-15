import { LitElement, html, customElement } from 'lit-element';

@customElement('my-header')
export class MyHeader extends LitElement {
  render() {
    return html`
      <h1>Header</h1>
    `;
  }
}