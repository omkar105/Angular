function Maximum(Arr) {
    var Max1 = 0;
    var Max2 = 0;
    var Cnt = 0;
    for (var i = 0; i <= Arr.length; i++) {
        if (Max1 < Arr[i]) {
            Max1 = Arr[i];
            Cnt = Cnt + 1;
        }
    }
    for (var i = 0; i <= Arr.length; i++) {
        if ((Max2 < Arr[i]) && (i != (Cnt - 1))) {
            Max2 = Arr[i];
        }
    }
    return Max2;
}
var Rarr = [23, 89, 6, 29, 56, 45, 32];
var Ret = 0;
Ret = Maximum(Rarr);
console.log("Second Maximum Number is : " + Ret);
