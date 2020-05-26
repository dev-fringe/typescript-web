import { LitElement, customElement, html, property, css } from "lit-element"
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js'
import { until } from 'lit-html/directives/until.js'
import { asyncAppend } from 'lit-html/directives/async-append.js'
import { parser } from "@root/main"
import { jQuery } from "@root/main"

@customElement("home-view")
class HelloView extends LitElement {

  static get styles() {
    return css`
      div { padding: 60px 15px 0; }
    `;
  }
  render() {
    jQuery.ajax({
      url: 'http://localhost/test', 
      cache: false,
      success: function(res) {
         this.attachShadow({mode: 'open'}).innerHTML = '<div>1test<br>2test<br>3test<br>4test<br>5test<br>test<br>test<br>test<br>test<br>test<br>test<br>test<br>test<br>test<br>test<br>test<br>test<br>test<br>test<br>res=' + res + '</div>';
    }});    
    // this.attachShadow({mode: 'open'}).innerHTML ='<div>1test<br>2test<br>3test<br>4test<br>5test<br>test<br>test<br>test<br>test<br>test<br>test<br>test<br>test<br>test<br>test<br>test<br>test<br>test<br>test<br></div>';
  // return html`<div>1test<br>2test<br>3test<br>4test<br>5test<br>test<br>test<br>test<br>test<br>test<br>test<br>test<br>test<br>test<br>test<br>test<br>test<br>test<br>test<br></div>`;
  }
}
