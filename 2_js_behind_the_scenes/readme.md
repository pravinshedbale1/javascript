## JavaScript Behind The Scenes

### Deconstructing JS Features

1. High Level

    - Developer does not have to worry about low level things such as memory management etc.
    - Everything taken care by language.

2. Garbage Collected

    - Cleaning unused objects from memory.
    - We dont have to explicitly clean.

3. Interpreted or Just in time compiled

    -

4. Multi-paradigm

    - An approach and mindset of structuring code, which will direct your coding style and technique
        - Procedural Programming.
        - Object Oriented Programming.
        - Functional Programming.

5. Prototype-based object oriented

6. First class functions

    - In language with first-class functions, functions are simply treated as variables.
    - We can pass then into other functions, and return them from functions.

7. Dynamic

    - Dynamically typed.
    - No data type definitions.
    - Type identified at runtime.
    - Data type of variable is automatically changed upon reassignment with other type of data.

8. Single threaded

9. Non blocking event loop

## JavaScript Engine

### JavaScript engine consist of two main components

1. Call Stack
    - Where our code is executed
    - It contains execution context
2. Heap - Stores all the objects that our application needs

    ![alt text](image.png)

### Computer Science SideNote: Compilation Vs. Interpretation

-   Compilation : Entire code is converted into machine code at once, and written to a binary file that can be executed by a computer.

    ![alt text](image-1.png)

-   Interpretation: Interpreter runs through the source code and execute it line by line

    ![alt text](image-2.png)

-   Just-In-Time Compilation: Entire code is converted into a machine code at once and then executed immediately.

    ![alt text](image-3.png)

### Process

1. As a piece of javascript code enters the engine, the first step is to parse the code.
2. During the parsing process, the code is parsed to the data structure called AST(Abstract Syntax Tree), This step also check for syntax errors.

Example

```
const x = 23;

AST

VariableDeclaration: {
    start: 0
    end: 13
    - declaration: [
        - VariableDeclarator {
            start: 6
            end: 12
            - id: Identifier {
                start: 6
                end: 7
                name: "x"
            }
            - init: Literal = #node {
                start: 10
                end: 12
                value: 23
                raw: "23"
            }
        }
    ]
    kind: "const"
}
```

3. The next step is compilation, it takes generated AST and compiles it into machine code.
4. This machine code then gets executed right away.
5. Finish here ? NO !!
6. Modern JavaScript at first generates very unoptimized version of machine code at step 3, just so that it can start execute it as fast as possible.
7. Then in background this code is being optimized and recompiled during already running program execution, without stopping execution.
8. This process makes modern js so fast.

    ![alt text](image-4.png)

### Runtime in Browser

#### Runtime contains

1. Engine
2. Web API's : Not part of JavaScript language but functionalities provided by browser to the engine
3. Callback Queue : This is a data structures which contains all the callback functions that are ready to be executed.
4. Event Loop : As the event happens callback queue picks the function from callback queue and put it into the call stack for execution.

    ![alt text](image-5.png)

## Execution Context and Call Stack

### Execution Context

-   Environment in which piece of javascript code is executed. Stores all the necessary information for some code to be executed, such as local variables or arguments passed to a function.
-   There is a Execution context associated per function.

### Global Execution Context

-   Global execution context is for top level code which is not inside any function.
-   There is only one global execution context
-   This is default execution context created.

### All Execution contexts together make call stack.

### Steps

1. Creation of Global Execution Context.
2. Execution of top level code (inside GEC).
3. Execution of functions and waiting for callback functions to arrive

### What is inside execution context ?

1. Variable Environment (This is created in creation phase right before execution)

-   let, const and var declarations
-   Functions
-   arguments Object (Not available for arrow function)
-   scope chain : consist of references to the variables that are located outside of the current function, scope chain is stored in each execution context to keep track
-   this keyword (Not available for arrow function)

    ![alt text](image-6.png)

    ![alt text](image-7.png)

## Scope and Scope Chain

### Scope Concept

1. Scoping

    - How our program's variables are organized and accessed
    - Where do variables lives ?
    - Where can we access certain variable, and where not ?

2. Lexical Scoping

    - Scoping is controlled by placement of functions and blocks in the code

3. Scope

    - Space or environment in which certain variable is declared.
    - Variable environment in case of functions
    - There is global scope, block scope and function scope

4. Scope of a variable
    - Region of our code where certain variable can be accessed.

### The 3 types of scope

1. Global Scope

    - Outside of any function or block.
    - Variables declared in global scope are accessible everywhere.

        ![alt text](image-8.png)

2. Function Scope

    - Variable are accessible only inside function, NOT outside.
    - Also called local scope.

        ![alt text](image-9.png)

3. Block Scope (ES6)

    - Variables accessed only inside block.
    - This only applies to the let and const declared variables.
    - Functions are also block scoped in strict mode.

        ![alt text](image-10.png)
