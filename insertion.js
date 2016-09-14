/*

Step 1 − If it is the first element, it is already sorted. return 1;
Step 2 − Pick next element
Step 3 − Compare with all elements in the sorted sub-list
Step 4 − Shift all the elements in the sorted sub-list that is greater than the value to be sorted
Step 5 − Insert the value
Step 6 − Repeat until list is sorted

 */

function insertionsort(items){
	console.log(items);
	var value;
	
	for (var i = 0; i < items.length; i++) {
		
		value = items[i]

		for (var j = i -1; j >-1, items[j] > value; j--) {
			// console.log(items[j]);
			items[j+1] = items[j];
		}

		items[j+1] = value;
	}

	return items;
}

console.log(insertionsort([14,33,27,10,35,19,42,44]));