// convert to string
const someNumber = 42;
someNumber.toString();

// convert to 2 decimal places
const someNumber2 = 42.12345;
someNumber2.toFixed(2);

// convert to 5 significant digits
const someNumber3 = 42.12345;
someNumber3.toPrecision(5);

// convert to exponential notation
const someNumber4 = 42.12345;
someNumber4.toExponential(2);

// convert to currency format
const someNumber5 = 42.12345;
const formatter = new Intl.NumberFormat('en-NG', {
  style: 'currency',
  currency: 'NGN',
});
formatter.format(someNumber5);
