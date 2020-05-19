import { LitElement, css, html, customElement, property } from 'lit-element';

@customElement('app-header')
export class MyHeader extends LitElement {
  @property( { type : String }  ) name = 'Test';
  // static get styles() {
  //   return css`
  //     div { background: #ccc; }
  //   `;
  // }

  render() {
    return html`
      <h1 class="ms-font-su ms-fontColor-white ms-bgColor-themeDarker">Language Overrides Sample</h1>        
      <div>
        <h1> ${this.name} Header</h1>
        <h1 class="ms-font-su">Why, hello, world.</h1>
        <nav>
          <li><a href="/">Home</a></li>
          <li><a href="/hello/world">Hello {name}</a></li>
          <li><a href="/update-arrays-and-objects-view">update-arrays-and-objects-view</a></li>
          <li><a href="/fetching-data-view">fetching-data-view</a></li>          
        </nav>                
      </div>
    `;
  }
}