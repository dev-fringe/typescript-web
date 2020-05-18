import { LitElement, customElement, html, property } from "lit-element";
import { router } from "@root/index";

@customElement("hello-view2")
class HelloView2 extends LitElement {
  @property({ type: Object }) location = router.location;

  render() {
    return html`
      test2
      <span>${this.location.params["name"]}</span>
      `;
  }
}
