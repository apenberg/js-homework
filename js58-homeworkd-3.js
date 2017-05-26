
var numberList = [ 1, 5, 2, 20, 7, 90, 3 ];
//Write a function that returns the largest element in an array.
var largest = Math.max.apply(Math, numberList);
console.log("Answer One: "+ largest)
//Write a function that checks whether an element occurs in an array. Make the function return true or false. 
function inArray(array, element) {
return array
}
if(inArray(numberList, 3)) { 
	console.log("Answer Two: It exists!") 
} else {console.log("not working")}
//Write a function that returns the elements on odd positions in an array. For the list given above, it would print 5, 20, 90
function odd(a){
  var ar = [];

 for (var i = 1; i < a.length; i++) {
    if(i % 2 === 1) { // index is odd
        ar.push(a[i]);
    }
}

return ar;
}

console.log("Answer Three: " + odd(numberList));
//Write a function that computes the running total of an array. (IE: What is the sum of all of the values in an array)
var sum1 = [1, 5, 2, 20, 7, 90, 3 ].reduce(add, 0);
function add(a, b) {
    return a + b;
}
console.log("Answer Four option 1: " + sum1);

//or

for(var i = 0, sum = 0; i < numberList.length; sum += numberList[i++]);
console.log("Answer Four option 2: " + sum);

//Write a function that tests whether a string is a palindrome. For example "racecar" would return true, but "cat" would not.
function check_Palindrome(str_entry){

   var cstr = str_entry.toLowerCase('');
	var ccount = 0;

	if(cstr==="") {
		console.log("Not a palindrome");
		return false;
	}

	if ((cstr.length) % 2 === 0) {
		ccount = (cstr.length) / 2;
	} else {
		if (cstr.length === 1) {
			console.log("Answer Five is a palindrome.");
			return true;
		} else {
			ccount = (cstr.length - 1) / 2;
		}
	}
	for (var x = 0; x < ccount; x++) {
		if (cstr[x] != cstr.slice(-1-x)[0]) {
			console.log("Answer Five is a palindrome.");
			return false;
		}
	}
	console.log("Answer Five is a palindrome.");
	return true;
}
check_Palindrome('racecar');


