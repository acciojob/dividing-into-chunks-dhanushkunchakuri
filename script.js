const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let curr=[];
	let cursum;
	let res=[];

	for(let item of arr){
		if(cursum + item <= n){
			curr.push(item);
			cursum+=item;
		}
		else{
			if(curr.length >0){
				res.push(curr);
			}
			curr=[item];
			cursum=item;
		}
	}
	if(curr.length > 0){
		res.push(curr);
	}
	return res;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));


