import React from 'react';

export function makeClass(phrase) {
    
    return class {
      sayHi() {
        alert(phrase);
  
  let Phrase = makeClass("Hello");
  render () {
  new Phrase().sayHi(); // Hello
  } 

}

