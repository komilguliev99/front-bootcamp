const		findIndex = (arr, i, chr, chr2) => {
	while (++i < arr.length)
		if (arr.charAt(i) == chr || (chr2 && arr.charAt(i) == chr2))	return i;
	return (i == arr.length ? arr.length : 0);
}

const		formatter = (format, num) => {
	let		count = 0;
	let		val = num;

	while (num) {
		count++;
		num = Math.floor(num / 10);
	}
	
	let		pref = "";
	format -= count;
	while (format-- > 0) pref += "0";
	return pref + val;
}

function secret(text) {
	const		del = findIndex(text, 0, ">");
	const		parent = text.substring(0, del);
	const		classStart = findIndex(text, del, ".");
	const		classEnd = findIndex(text, classStart, "$", "*");
	let			format = 0, it = classEnd;
	while (it < text.length && text.charAt(it) == "$") {
		format++;
		it++;
	}
	let			count = parseInt(text.substring(it + 1));
	let			childs = "";
	it = 1;
	
	const		className = text.substring(classStart + 1, classEnd);
	const		childTag = text.substring(del + 1, classStart);
	while (it <= count) {
		childs += `<${childTag} class="${className + formatter(format, it)}"></${childTag}>`;
		it++;
	}
	
	return `<${parent}>${childs}</${parent}>`;
	
}

console.log(secret("div>p.a$$*2"));
console.log(secret("ul>li.b$*3"));
console.log(secret("p>h1.c$$$*2"));
