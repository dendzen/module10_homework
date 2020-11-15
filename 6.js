let arr = [];
function sameValues(arr) {
    return arr.filter((v,i,a)=>v===a[0]).length === arr.length;
}
console.log(sameValues(arr));