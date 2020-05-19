import { LitElement, css, html, customElement } from 'lit-element';

@customElement('app-footer')
export class MyFooter extends LitElement {
  static get styles() {
    return css`
      div { 			
        clear: left;
        background: #ccc; 
      }
      p {
        margin: 0;
      }
    `;
  }

  render() {
    return html`
	    <div>
		    <p>Content is &copy; Copyright Patrick Griffiths.</p>
		    <p>This page is valid HTML5.</p>
      </div>
      <p><a href="http://www.htmldog.com/examples/"><img src="http://www.htmldog.com/badge1.gif" alt="HTML Dog"></a></p>      
    `;
  }
}