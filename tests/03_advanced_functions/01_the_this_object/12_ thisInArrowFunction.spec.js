const exploreThisInArrowFunction = require('./../../../src/03_advanced_functions/01_the_this_object/12_thisInArrowFunction.js');

test('Understands the value of this in arrow functions and regular functions', () => {
  const arrowFunc = () => this.name;
  const regularFunc = function() { return this.name; };
  
  const [arrowThisName, regularThisName] = exploreThisInArrowFunction(arrowFunc, regularFunc);
  
  expect(arrowThisName).toBeUndefined();  // 'this' is not bound to the object
  expect(regularThisName).toBe('testObject'); // 'this' is bound to the object
});