function Armstrong(No1) {
    var iDigit = 0;
    var Sum = 0;
    var No2 = No1;
    var Sqaure = No1.toString().length;
    while (No1 > 0) {
        iDigit = No1 % 10;
        Sum = Sum + (Math.pow(iDigit, Sqaure));
        No1 = Number((No1 / 10).toString().split('.')[0]);
    }
    if (Sum == No2) {
        console.log("It is Armstrong Number");
    }
    else {
        console.log("It is Not Armstrong Number");
    }
}
Armstrong(153);
