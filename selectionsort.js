/*


Step 1 − Set MIN to location 0
Step 2 − Search the minimum element in the list
Step 3 − Swap with value at location MIN
Step 4 − Increment MIN to point to next element
Step 5 − Repeat until list is sorted

 */

function selectionsort(items){

	console.log(items);
	for (var i = 0; i < items.length; i++) {
		var min=9999,pos;
		for(j=i; j < items.length; j++){
			
			if(items[j] < min){
				min = items[j];
				pos = j;
			}

		}
		console.log(min);
		if(items[i] > min){
			items[pos] = items[i];
			items[i]=min;
		}
	}

	return items;
}

console.log(selectionsort([14,33,27,10,35,19,42,44]));