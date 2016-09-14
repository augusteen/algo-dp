

function count(numbers,l){
	console.log(numbers);
	var final = 0,i=0;
	do{

		for (var j = 0; j < numbers.length; j++) {
			var total = 1;
			k=0;
			do{
				console.log(numbers[j+k]);
				total = total * numbers[j+k];
				k++;
			}while(k<=i);
			if(total < l ){
				final = final + 1;
				console.log(final+'-');
			}
		}
	i=i+1;
	}while(i < numbers.length);

	return final;
}

console.log(count([1,2,3,4],3));
console.log(count([1,2,3,7],3));