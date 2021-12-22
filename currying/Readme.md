# Currying

Currying is the transformation of functions so that they do not accept arguments as **F(A, B)** but as **F(A)(B)**. Let's give examples to understand the general, and then talk about the benefits of currying.

### Example:
Let's transform a function that multiplies 2 numbers and returns the result.
```
const		mult = (a, b) => a * b;
// mult(4, 5) => 20
```
First, we need another transform function. Let's call it **curry**. 

```
const		mult = (a, b) => a * b;

const		curry = (func) => a => b => func(a, b);

const		CurriedMult = curry(mult);
// CurriedMult(4)(5) => 20;
```

In this example, we have created a curry function that, when called for the first time, returns a new wrapper over the **func** function, and when the result is called again, it returns the result of the function call. At the first call, the first required parameter for the **func** function is remembered, and at the next call, the second parameter is passed, therefore all parameters will be received and the result is returned. This is how **currying** works.

## Advanced currying
We can note that in the case above we can curry functions with only two parameters, therefore this is not a full-fledged function for currying. Let's write a universal function curry that can transform functions with any number of parameters.

```

const		advanceCurry = (func) => {
	return function curried(...args) {
		if (args.length >= func.length)
			return func.apply(this, args)
		else
			return (...argsNext) => curried.apply(this, args.concat(argsNext))
	}
}

const		mult3 = (a, b, c) => a * b * c;

const		curriedMult3 = advanceCurry(mult3);
const		curriedMult2 = advanceCurry(mult);
/**
 * 	curriedMult(4)(5)(2) => 40
 * 	curriedMult(4)(5, 2) => 40
 * 	curriedMult(4, 5)(2) => 40
 * 	curriedMult(4, 5, 2) => 40
 * 
 * 	curriedMult2(4, 5) => 20
 *	curriedMult(4)(5) => 20
 * 
 */
 
 ```
 
 In the first call to **advanceCurry**, we return a new wrapper. On a subsequent call, the function checks the number of parameters with the number of parameters of the function that needs to be transformed, if they match, the result is returned, otherwise a new wrapper is returned when calling which the **curried** function is recursively called. The process continues until all the necessary parameters are passed.


