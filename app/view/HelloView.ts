import { LitElement, customElement, html, property } from "lit-element";
import { router } from "@root/main";

@customElement("hello-view")
class HelloView2 extends LitElement {
  @property() private location  = router.location;
  @property() private myArray = ['an','array','of','test','data'];
  @property() private myBool : Object= true;
  @property() private count = 0;
  @property() private items : Object;

  render() {
    return html`
      test2
      <span>${this.location.params["name"]}</span>
      <ul>
        ${this.myArray.map(i => html`<li>${i}</li>`)}
      </ul>
      ${this.myBool?
        html`<p>Render some HTML if myBool is true</p>`:
        html`<p>Render some other HTML if myBool is false</p>`}
      <button @click="${this.clickHandler}">pie?</button>   
      <button @click=${this._onClick} part="button">
        Click Count: ${this.count}
      </button>
      `;
  }


  clickHandler(e) {
    console.log(e.target);
    alert(e.target);
  }  
  private _onClick() {
    this.count++;
  }

  constructor() {
    super();

    fetch('https://demo.vaadin.com/demo-data/1.0/people?count=200')
    .then(res => res.json())
    .then(json => this.items = json.result);
    // Request an update in response to an event
    this.addEventListener('load-complete', async (e) => {

    });
  }

}
