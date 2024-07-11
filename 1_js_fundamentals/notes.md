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
