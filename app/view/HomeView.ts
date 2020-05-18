import { LitElement, customElement, html, property } from "lit-element";

@customElement("home-view")
class HelloView extends LitElement {

  render() {
    return html`
      this is my home
    `;
  }
}
