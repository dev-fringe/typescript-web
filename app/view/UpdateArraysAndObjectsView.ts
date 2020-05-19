import { LitElement, html, customElement, property } from 'lit-element';

@customElement("update-arrays-and-objects-view")
class UpdateArraysAndObjectsView extends LitElement {

  @property({ type: Object }) myObject = { id: 1, text: "foo" };
  @property({type: Array }) myArray = [{ id: 1 }, { id: 2 }];

  render() {
    return html`
      <h3>Array items</h3>
      <ul>
        ${this.myArray.map(item => html`
          <li>${item.id}</li>
        `)}
      </ul>

      <button @click=${this._addArrayItem}>Add array item</button>

      <h3>Object</h3>
      <div>
        <strong>${this.myObject.id}</strong>: ${this.myObject.text}
      </div>
      
      <button @click=${this._updateObjectId}>Add object item</button>
    `;
  }

  _addArrayItem() {
    const newId = Math.round(Math.random() * 100);
    const newItem = { id: newId };
    this.myArray = [
      ...this.myArray, 
      newItem,
    ];

  }

  _updateObjectId() {
    const newId = Math.round(Math.random() * 100);

    this.myObject = { 
      ...this.myObject,
      id: newId,
    };
  }
}