function Fibonacci(No1) {
    var Back = 1;
    var For = 1;
    var Ctn = 1;
    console.log(Ctn);
    while (Ctn <= No1) {
        console.log(Ctn);
        Ctn = Back + For;
        Back = For;
        For = Ctn;
    }
}
Fibonacci(21);
