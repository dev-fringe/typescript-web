import { LitElement, customElement, html, property } from "lit-element"
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js'
import { until } from 'lit-html/directives/until.js'
import { asyncAppend } from 'lit-html/directives/async-append.js'
import { parser } from "@root/main"
import { jquery } from "@root/main"

const detailView = () => until(fetch('http://localhost/test').then((r) => r.text()), '<span>Loading... </span>')
const detailView2 = async () => until(fetch('http://localhost/test').then((r) => r.text()), '<span>Loading... </span>');

@customElement("home-view")
class HelloView extends LitElement {

  @property() private res: any

  constructor() {
      super()
      fetch('http://localhost/test')
      .then(res => res.text())
      .then(text => this.res = text.valueOf());         
      // this.res = detailView2(); 
  }

  render() {
    const shadowRoot = this.attachShadow({mode: 'open'});
    // let data = html`${detailView()}`;
    // console.log(data.getTemplateElement());
    // console.log(data.getHTML);
    // console.log(data);
    // console.log(data.getHTML());
    // console.log(data.getHTML());
    // console.log(data.getHTML());
    // console.log(this.res);

    shadowRoot.innerHTML = this.res;
    
    // jquery.ajax({
    //   url: 'http://localhost/test', 
    //   cache: false,
    //   success: function(res) {
    //     shadowRoot.innerHTML = res;
    //   }
    // });// have some bug 이게 최선인가?
  //  return html`${this.res}`;
  }
}
