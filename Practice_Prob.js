// Given a stream of integers, write a function that returns the median.

var arr = [];
function Insert(num)
{
    // write code here
    arr.push(num);
    arr.sort();
    return arr;
}
function GetMedian(){
	// write code here
var mid = Math.floor(arr.length / 2);
    if((arr.length & 1) === 0){
        var n1 = arr[mid];
        var n2 = arr[mid - 1];
        return (n1 + n2) / 2;
    } else {
        return arr[mid]
    }
}
