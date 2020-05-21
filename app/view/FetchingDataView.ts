import { LitElement, html, customElement, property } from 'lit-element';
import { router } from "@root/main";

@customElement("fetching-data-view")
class FetchingDataView extends LitElement {
    @property() private response: any;

    constructor() {
        super();
        fetch('https://demo.vaadin.com/demo-data/1.0/people?count=200')
        .then(res => res.json())
        .then(json => this.response = json.result);     
    }

    render() {
        console.log(this.response);
        return html`
            <ul>
            ${this.response.map(item => html`
                <li>${item.firstName}</li>
            `)}
            </ul>
        `;
    }
}