function find(collection, predicate, startIndex) {
	const		keys = Object.keys(collection);
	
	let			i = startIndex || 0;
	while (i < keys.length) {
		const item = collection[keys[i]];
		if (typeof predicate == "function" && predicate(item))
			return item;
		else if (predicate instanceof Array && item[predicate[0]] == predicate[1])
			return item;
		else if (typeof predicate == "object" && Object.keys(predicate).every(k => item[k] == predicate[k]))
			return item;
		else if(item[predicate])
			return item;
		i++;
	}
}

var users = [
	{ "user": "barney",  "age": 36, "active": true },
	{ "user": "fred",    "age": 40, "active": false },
	{ "user": "pebbles", "age": 1,  "active": true }
  ]
  
  console.log(find(users, function(o) { return o.age < 40; })) // object for "barney"
  
  console.log(find(users, { "age": 1, "active": true })) // object for "pebbles"
  
  console.log(find(users, ["active", false])) // object for "fred"
  
  console.log(find(users, "active")) // object for "barney"