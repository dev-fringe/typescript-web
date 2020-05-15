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
      div { margin-left: 150px; }
    `;
  }

  render() {
    return html`
      <div>
        <h2>On the Origin of The Origin</h2>
        <p>Darwin's father was dead set on his son becoming a cleric but even though the young rapscallion began to study theology he found worms much more interesting.</p>
        <p>When a lonely man with a moustache asked Darwin to ride with him on his boat named after a dog, Darwin agreed and set off around the world fiddling with wildlife.</p>
        <p>Some say it was a load of birds from a bunch of islands hundreds of miles off the Ecuadorean coast that inspired his now widely accepted explanation of the mechanism of evolution. "Why does that bird on that island have a beak like that while that finch on that island has a beak like that? AHA! I've got it! Natural Selection!" he thought. It wasn't actually quite like that, but, y'know, it's a fine, popular romantic myth.</p>

        <h2>The Origin</h2>
        <p>Upon return from his jaunt, Charles chronicled his escapades (as <em>The Voyage of the Beagle</em>) and got a bit carried away with barnacles, although his theory of evolution was always ticking away in the back of his mind.</p>
        <p>Some 20 or so year after he returned to England, a Welsh naturalist by the name of Wallace popped up with a similar idea to Darwin's grand theory. Darwin got a move on.</p>
        <p>In 1858 a paper jointly attributed to Darwin and Wallace was presented to the Linnean Society of London that sent rumbles across the establishment and really ticked off a fair few people. The next year saw the publication of Darwin's 500-page "abstract" - <em>On The Origin of Species by Means of Natural Selection or the Preservation of Favoured Races In The Struggle For Life</em> (or <abbr>OTOOSBMONSOTPOFRITSFL</abbr> for short).</p>
        <p>Darwin, already a prominent arc in scientific circles, was propelled into megastardom.</p>

        <h2>After The Origin</h2>
        <p>Chuck D revised The Origin five times, toning down each one a bit more than the one before it, partly to appease his religious wife. Who also happened to be his cousin. But some years later he'd had enough of trying to disguise the logical conclusion that humans are descended from the same common ancestor as all other animals and his third classic, <em>The Descent of Man</em>, was published and <em>really</em> pissed off the religious establishment.</p>
      </div>    
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

