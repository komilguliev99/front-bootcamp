// const		mult = (a, b) => a * b;

// const		curry = (func) => a => b => func(a, b);

// const		CurriedMult = curry(mult);
// console.log(CurriedMult(4)(5));

// Advanced currying

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