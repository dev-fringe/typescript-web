import { LitElement, html, property, customElement } from 'lit-element';
//import './MyHeader.js';

@customElement('simple-greeting')
export class SimpleGreeting extends LitElement {
  @property() name = 'World';

  render() {
    return html`
      <p>Hello, ${this.name}!</p>
      `;
  }
}

