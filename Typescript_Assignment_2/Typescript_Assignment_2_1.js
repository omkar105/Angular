function Maximum(Arr) {
    var Max = 0;
    for (var i = 0; i <= Arr.length; i++) {
        if (Max < Arr[i]) {
            Max = Arr[i];
        }
    }
    return Max;
}
var Rarr = [23, 89, 6, 29, 56, 45, 77, 32];
var Ret = 0;
Ret = Maximum(Rarr);
console.log("Maximum Number is : " + Ret);
