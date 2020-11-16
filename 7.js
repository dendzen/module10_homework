var arr = [1, 2, 3, 0, true, NaN, 4, 6, 0]
var arrEven = []
var arrOdd = []
var arrZero = []
var arrNotNumber =[]
function even_odd(num) {
    if (num % 2 == 0)
        arrEven.push("Even")
    else
        arrOdd.push("Odd")

}

arr.forEach(function(item, index, array) {
if (typeof (item) !== 'number' || (!+item && item !== 0))
    arrNotNumber.push("NotNumber")
else if (item == 0)
        arrZero.push("Zero")
else
        even_odd(item)
})

console.log("Even "+arrEven.length)
console.log("Odd "+arrOdd.length)
console.log("Zero: "+arrZero.length)
console.log("NotNumber "+arrNotNumber.length)