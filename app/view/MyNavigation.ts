import { LitElement, css, html, customElement } from 'lit-element';

@customElement('my-navigation')
export class MyNavigation extends LitElement {
  static get styles() {
    return css`
      div {
        float: left;
        width: 150px;
      }
    `;
  }

  render() {
    return html`
    <div >
      <ul>
        <li><a href="">Biology</a></li>
        <li><a href="">Evolution</a></li>
        <li><a href="">Natural Selection</a></li>
        <li><a href="">Genetics</a></li>
      </ul>
      <ul>
        <li><a href="">Erasmus Darwin</a></li>
        <li><a href="">Lamarck</a></li>
        <li><a href="">Charles Darwin</a></li>
        <li><a href="">Wallace</a></li>
        <li><a href="">Dawkins</a></li>
      </ul>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    `;
  }
}