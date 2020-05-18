import { LitElement, customElement, html } from 'lit-element';

import "@view/MyHeader";

@customElement('app-main')
export class Application extends LitElement {
  render() {
    return html`
      <my-header></my-header>
      <bux-title>
        <span slot="maintitle">책 읽기</span>
        <span slot="subtitle">또는 모으기</span>
      </bux-title>
    `;
  }
}