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


## License

MIT © [Nick The Sick](http://nickthesick.com)
