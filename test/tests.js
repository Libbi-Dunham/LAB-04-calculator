import { multiply } from '../calculator.js';

const test = QUnit.test;


test('multiply two numbers', (expect) => {

    const expected = 24;
    
    
    const actual = multiply(12, 2);

    
   
    expect.equal(actual, expected);
});
