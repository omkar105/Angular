function ChkPrime(No1) {
    if (No1 % 2 == 0) {
        return false;
    }
    else {
        return true;
    }
}
var output = true;
output = ChkPrime(23);
if (output == true) {
    console.log("It is Prime Number");
}
else {
    console.log("It is Not Prime Number");
}
