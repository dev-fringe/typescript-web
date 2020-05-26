import { LitElement, css, html, customElement, property } from 'lit-element';
import { router } from "@root/main";
import { jQuery } from "@root/main"

@customElement('app-header')
export class MyHeader extends LitElement {
  @property() private loc  = router;
  @property( { type : String }  ) name = 'Test'

  
  @property() private header: any

  constructor() {
      super()
      // fetch('http://localhost/header')
      // .then(res => res.text())
      // .then(text => this.header = text.valueOf());         
      // this.res = detailView2(); 
  }

  createRenderRoot() {
    jQuery.ajax({
      url: 'http://localhost/header', 
      cache: false,
      success: function(res) {
        this.attachShadow({mode: "open"}).innerHTML = res;
      }
     });// have some bug 이게 최선인가?      
      return this;
  }

  render() {
    const shadowRoot = this.attachShadow({mode: 'open'});
    // console.log(this.header);
    // alert(this.header);
    // shadowRoot.innerHTML = this.header;

    jQuery.ajax({
      url: 'http://localhost/header', 
      cache: false,
      success: function(res) {
       shadowRoot.innerHTML = res;
    // return html`
    //     <h1 class="ms-font-su ms-fontColor-white ms-bgColor-themeDarker">Language Overrides Sample</h1>${res}
    //     `;
    }});    
    // return html`
    //   <h1 class="ms-font-su ms-fontColor-white ms-bgColor-themeDarker">Language Overrides Sample</h1>        
    //   <div>
    //     <h1> ${this.name} Header</h1>
    //     <h1 class="ms-font-su">Why, hello, world.</h1>
    //     <nav>
    //       <li><a href="/">Home</a></li>
    //       <li><a href="/hello/world">Hello {name}</a></li>
    //       <li><a href="/update-arrays-and-objects-view">update-arrays-and-objects-view</a></li>
    //       <li><a href="/fetching-data-view">fetching-data-view</a></li>          
    //     </nav>                
    //   </div>
    // `;
  }
}