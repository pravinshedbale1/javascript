### Javascript is high level, object oriented, multi paradigm programming language

### Values are classified into 2 main types in js

1. Objects
2. Primitives

### Types of primitive datas in js

1. Number
2. String
3. Boolean
4. Undefined
5. Null
6. Symbol (ES2015)
7. BigInt (ES2020)

### Javascript has dynamic typing we do not need to specify data types while declaring variables. They are determined automatically

### Value has type not variable has.

### Type Conversion and Coercion

#### Conversion : Manually convert from one type to another

```
const inputYear = "1999";
console.log(Number(inputYear) + 25);
```

#### Coersion : Automatically convert from one type to another

```
//type coersion : 25 is automatically converted into string by js
console.log("My age is " + 25 + " years");
console.log("23" - "10" - 3); //10
(-, *, /) operators trigger type coersion
```

### Truthy and Falsy values

#### Falsy : These values are not exactly false but when we try to convert them into boolean it results in false.

#### Falsy values

1. 0
2. ""
3. Undefined
4. null
5. NaN

#### Rest all are truthy values in javascript

### JavaScript is Backward compatible

1. Old features are never removed.
2. Not really new versions, just incremental updates.
3. Website keep working forever

### Strict Mode

1. 'use strict' must be the first statement in script.
2. We can also add strict mode for specific function or block.
3. It also restrict us from using reserved keywords.

```
let hasDriversLicence = false;
const passTest = true;

if (passTest) hasDriverLicence = true;

if (hasDriversLicence) console.log("I can drive");

/*
OUTPUT


*/
```

```
'use strict';ß
let hasDriversLicence = false;
const passTest = true;

if (passTest) hasDriverLicence = true;

if (hasDriversLicence) console.log("I can drive");

/*
OUTPUT
ReferenceError: hasDriverLicence is not defined
*/
```

### Function Declaration

#### Function declarations can be called before they are defined

```
function printDetails(name, profession) {
    console.log(`My name is ${name}, I am a ${profession}`);
}

printDetails("Pravin", "Applications Engineer");
```

### Function Expression

```
const printPerson = function () {
    console.log(
        "Hi I am printPerson function, I am basically a function expression"
    );
};

printPerson();
```

### Objects

#### dot (.) and bracket ([]) notation to access object properties

1. We can use any expression in bracket notation.
2. in object notation we can only use property name.
3. bracket notation is more useful when property name is being calculated from an expression.
