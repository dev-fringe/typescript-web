import { LitElement, html, customElement } from 'lit-element';

@customElement('my-footer')
export class MyFooter extends LitElement {
  render() {
    return html`
      <h1>footer</h1>
    `;
  }
}