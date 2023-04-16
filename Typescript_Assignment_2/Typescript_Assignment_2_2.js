function Summation(Arr) {
    var Sum = 0;
    for (var i = 0; i < Arr.length; i++) {
        Sum = Sum + Arr[i];
    }
    return Sum;
}
var Rarr = [23, 6, 7, 4, 5, 7];
var Ret = 0;
Ret = Summation(Rarr);
console.log("Addition is : " + Ret);
