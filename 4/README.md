# Ne használd az alábbi statementeket
 - if, if-else
 - switch
 - while
 - do
 - for, ? :

## Használj helyettük funkcionális programozást
 - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

``` javascript
// arr.forEach(function(element, index, array) [, thisArg])
function logArrayElements(element, index, array) {
  console.log('a[' + index + '] = ' + element);
}

// Note ellision, there is no member at 2 so it isn't visited
[2, 5, , 9].forEach(logArrayElements);
// logs:
// a[0] = 2
// a[1] = 5
// a[3] = 9

// arr.map(function(element, index, array) [, thisArg])
var numbers = [1, 4, 9];
var doubles = numbers.map(function(num) {
  return num * 2;
});
// doubles is now [2, 8, 18]. numbers is still [1, 4, 9]


// arr.reduce(function(previousValue, currentValue, index, array) [, initialValue])
var total = [0, 1, 2, 3].reduce(function(a, b) {
  return a + b;
});
// total == 6

var total = [0, 1, 2, 3].reduce(function(a, b) {
  return a + b;
},4);
// total == 10


// arr.every(function(element, index, array) [, thisArg])
function isBigEnough(element, index, array) {
  return element >= 10;
}
[12, 5, 8, 130, 44].every(isBigEnough);   // false
[12, 54, 18, 130, 44].every(isBigEnough); // true


// arr.some(function(element, index, array) [, thisArg])
function isBiggerThan10(element, index, array) {
  return element > 10;
}
[2, 5, 8, 1, 4].some(isBiggerThan10);  // false
[12, 5, 8, 1, 4].some(isBiggerThan10); // true


// arr.filter(function(element, index, array) [, thisArg])
function isBigEnough(element) {
  return element >= 10;
}
var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]
```