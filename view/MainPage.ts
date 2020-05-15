import { LitElement, css, html, property, customElement } from 'lit-element';

@customElement('simple-greeting')
export class SimpleGreeting extends LitElement {
  @property() name = 'World';
  @property({type : String})  prop1 = 'Hello World';
  @property({type : Number})  prop2 = 5;
  @property({type : Boolean}) prop3 = true;
  @property({type : Array})   prop4 = [1,2,3];
  @property({type : Object})  prop5 = { subprop1: 'hi', thing: 'fasdfsf' };

  static get styles() {
    return css`
      div { color: red; }
    `;
  }

  render() {
    return html`
      <p>Hello, ${this.name}!</p>
      <button @click="${this.clickHandler}">click</button>
      <div>I'm styled!</div>       
      <p>prop5:
        ${Object.keys(this.prop5).map(item =>
          html`<span>${item}: ${this.prop5[item]}&nbsp;</span>`)}
      </p>      
    `;
  }
  
  clickHandler(e) {
    alert(e.target);
  }  
}

