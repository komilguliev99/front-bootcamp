function landscapeType(arr) {
	let			inc = 0,
					dec = 0,
					first = -1,
					i = 0;
	
	while (i < arr.length - 1) {
		if ((inc && dec && (
			(first === true && arr[i] < arr[i + 1]) || (first === false && arr[i] > arr[i + 1] ))))
			return "neither";
		if (arr[i] < arr[i + 1])	inc++;
		if (arr[i] > arr[i + 1])	dec++;
		if (first == -1 && arr[i] != arr[i + 1]) first = arr[i] < arr[i + 1] ? true : false;
		i++;
	}
	if (!inc || !dec)		return "neither";
	return (first ? "mountain" : "valley")
}