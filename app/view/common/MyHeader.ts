import { LitElement, css, html, customElement, property } from 'lit-element';

@customElement('my-header')
export class MyHeader extends LitElement {
  @property( { type : String }  ) name = 'Test';
  static get styles() {
    return css`
      div { background: #ccc; }
    `;
  }

  render() {
    return html`
      <div>
        <h1> ${this.name} Header</h1>
      </div>
    `;
  }
}