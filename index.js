// Add your functions here
function map(arr, func){
    let newarr = [];
    for(const el of arr){
        newarr.push(func(el));
    }
}