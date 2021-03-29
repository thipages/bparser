# bparser

A boolean (OR, AND) expression parser

## Installation
- via npm : _npm i bparser_

```javascript
import bparser from 'bparser';
// then
bparser(expression,regExp);

```
- via HTML
```html
<script src="min.js"></script>
<script>
    // then
    bparser(expression,regExp);
</script>
```
## Usage
```javscript
const pathsObjet = bparser(expression,regExp);
```
`expression` : String containing
- comparison operator(s) : `AND,OR`
- with optional opening/closing parentheses `(,)` 
- with items to be compared
  
`regExp` : RegExp allowing to identify the items to be compared

`returns` an object with the following properties
- `isValid`, a boolean for a valid/invalid expression
- `results`, an array (`OR` list) of the different `AND` paths or an empty array of `isValid` is `false`


## Examples
RegExp: `/[a-z]/g`

Expression                    | Results
--------                      | ---------
`a AND b`                     | `[[a, b]]`
`a OR  b`                     | `[[a], [b]]`
`a AND b AND c`               | `[[a, b, c]]`
`a AND b OR  c`               | `[[a, b], [c]]`
`a AND (b OR c)`              | `[[a, b], [a, c]]`
`a AND (b OR c) AND (d OR e)` | `[[a, b, d], [a, b, e], [a, c, d], [a, c, e]]`

RegExp: `/'.+?'/g`

Expression                    | Results
--------                      | ---------
`"'a' AND 'b' OR 'c'" `         | `["'a'","'b'"],["'c'"]`


### More complex example

###### Regex : `/[a-z]/g`
###### Expression:
```
((a AND (b OR c)) AND (d AND e) AND (f OR g OR h)) OR i OR j
```

###### Results:
```
[[a,b,d,e,f],
 [a,c,d,e,f],
 [a,b,d,e,g],
 [a,c,d,e,g],
 [a,b,d,e,h],
 [a,c,d,e,h],
 [i],
 [j]]
```
## Related projects
 ###  [Boolean-parser](https://github.com/riichard/boolean-parser-js)
The majority of the examples comes from this other (and fun) implementation