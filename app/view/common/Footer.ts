import { LitElement, css, html, customElement, property } from 'lit-element';
import { jQuery } from "@root/main"

@customElement('app-footer')
export class MyFooter extends LitElement {
  // static get styles() {
  //   return css`
  //     div { 			
  //       clear: left;
  //       background: #ccc; 
  //     }
  //     p {
  //       margin: 0;
  //     }
  //   `;
  // }

  // render() {
  //   return html`
	//     <div>
	// 	    <p>Content is &copy; Copyright Patrick Griffiths.</p>
	// 	    <p>This page is valid HTML5.</p>
  //     </div>
  //     <p><a href="http://www.htmldog.com/examples/"><img src="http://www.htmldog.com/badge1.gif" alt="HTML Dog"></a></p>      
  //   `;
  // }
  
  @property() private header: any

  constructor() {
      super()
      // fetch('http://localhost/header')
      // .then(res => res.text())
      // .then(text => this.header = text.valueOf());         
      // this.res = detailView2(); 
  }

  render() {
    const shadowRoot = this.attachShadow({mode: 'open'});
    // console.log(this.header);
    // alert(this.header);
    // shadowRoot.innerHTML = this.header;

    jQuery.ajax({
      url: 'http://localhost/footer', 
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