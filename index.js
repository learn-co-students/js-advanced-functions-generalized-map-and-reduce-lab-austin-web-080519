// Add your functions here
function map(arr, func){
    let newarr = [];
    for(const el of arr){
        newarr.push(func(el));
    }
    return newarr;
}

function reduce(arr, func, start){
    let val = (!!start) ? start : arr[0];
    let i = (!!start) ? 0 : 1
    for(i; i < arr.length; i++){
        val = func(arr[i], val);
    }
    return val;
}