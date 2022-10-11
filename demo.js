import transform from './cssToReactNative.js'
import { getPropertyName, getStylesForProperty } from './cssToReactNative.js'

const res = transform([
  ['font', 'bold 14px/16px "Helvetica"'],
  ['margin', '5px 7px 2px'],
  ['border-left-width', '5px'],
]); // => { fontFamily: 'Helvetica', ... }
console.log(res);

console.log(getPropertyName('border-width')); // => 'borderWidth'
console.log(getStylesForProperty('borderWidth', '1px 0px 2px 0px')); // => { borderTopWidth: 1, ... }
