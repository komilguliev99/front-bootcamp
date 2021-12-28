function Node(element) {
	this.element = element;
	this.next = null;
}
function LinkedList() {
	let length = 0;
	let head = null;
	
	this.push = function(element) {
		const node = new Node(element);
		if(!head){
			head = node;
			length++;
		}
		else {
			let current = head;
			while(current.next){
				current = current.next;
			}
			current.next = node;
			length++;
		}
	}
	
	// Start
	this.insert = function (index, element) {
  	if (index < 0 || index > length)
			return "Element cannot be added";
		
		let		curr = head,
					i = 0;
		const	newNode = new Node(element);
		
		if (index == 0) {
			if (head)	newNode.next = head;
			head = newNode;
			length++;
			return element;
		}
		
		i = 1;
		while (curr && i < index) {
			curr = curr.next;
			i++;
		}
		let		next = curr.next;
		curr.next = newNode;
		if (next) newNode.next = next;
		length++;
		return element;
	};
	// End
	
	this.check = function() {
		const sol = [];
		let current = head;
		while(current){
			sol.push(current.element);
			current = current.next;
		}
		return sol.join("");
	}
}