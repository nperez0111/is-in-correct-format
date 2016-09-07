# is-in-correct-format [![Build Status](https://travis-ci.org/nperez0111/is-in-correct-format.svg?branch=master)](https://travis-ci.org/nperez0111/is-in-correct-format)

> Allows you to check whether a given object is in the correct specified format.


## Install

```
$ npm install --save is-in-correct-format
```


## Usage

```js
const isInCorrectFormat = require('is-in-correct-format');
const is = isInCorrectFormat.is;

isInCorrectFormat( {
	a:2
 },
 {
 	a: is.number
 });
//=> true

isInCorrectFormat( {
	a:{
    	b: 3,
        c: 24
    }
 },
 {
 	a: {
    	b: is.number
    }
 },is.number);
//=> true

isInCorrectFormat( {
	a:{
    	b: 3,
        c: [1,2,3]
    }
 },
 {
 	a: {
    	b: is.number
    }
 },is.number);
//=> false because the array does not satisfy 'is.number'
```


## API

### isInCorrectFormat(input, check, [allValues])

#### input

Type: `Object`<br>
Description: The object being checked whether is in the correct type

Cyclical objects are not allowed.

#### check

Type: `Object`<br>
Description: Follows the same format as the input object to check whether the given keys are passing the tests specified.

```js
{
	a: is.function,
	b: function( val ) { 
		return val > 10
    },
    c: val => is.function(val) || is.object(val)
}
```

These are all examples of possibilities in the check object, you can use the helper object `is` to assist in checking type or define your own checker functions and arrow functions.

#### allValues
Type: `Function`
Description: Will be calculated on all values of `input` object regardless of whether they show in the checked object or not.

### isInCorrectFormat.is

#### number
Returns `true` if argument is a `Number`
#### string
Returns `true` if argument is a `String`
#### function
Returns `true` if argument is a `function`
#### boolean
Returns `true` if argument is `true or false`
#### true
Returns `true` if argument is `true`
#### false
Returns `true` if argument is a `false`
#### array
Returns `true` if argument is an `Array`
#### object
Returns `true` if argument is an `Object`
#### undefined
Returns `true` if argument is `undefined`
#### null
Returns `true` if argument is `null`
#### promise
Returns `true` if argument is a `Promise`
#### buffer
Returns `true` if argument is a `Buffer`
#### regex
Returns `true` if argument is a `Regex`
#### symbol
Returns `true` if argument is a `Symbol`


## License

MIT © [Nick The Sick](http://nickthesick.com)
