var Arithmetic = /** @class */ (function () {
    //Behaviour
    function Arithmetic(N1, N2) {
        this.Number1 = N1;
        this.Number2 = N2;
        this.Result = 0;
    }
    Arithmetic.prototype.Addition = function () {
        return this.Result = this.Number1 + this.Number2;
    };
    Arithmetic.prototype.Substraction = function () {
        return this.Result = this.Number1 - this.Number2;
    };
    Arithmetic.prototype.Multiplication = function () {
        return this.Result = this.Number1 * this.Number2;
    };
    Arithmetic.prototype.Division = function () {
        return this.Result = this.Number1 / this.Number2;
    };
    return Arithmetic;
}());
var Value1 = 25;
var Value2 = 5;
var Value3 = 20;
var Value4 = 2;
var Result = 0;
var obj1 = new Arithmetic(Value1, Value2);
console.log("Value 1 : " + Value1);
console.log("Value 2 : " + Value2);
Result = obj1.Addition();
console.log("Addition is : " + Result);
Result = obj1.Substraction();
console.log("Substraction is : " + Result);
Result = obj1.Multiplication();
console.log("Multiplication is : " + Result);
Result = obj1.Division();
console.log("Division is : " + Result);
var obj2 = new Arithmetic(Value3, Value4);
console.log("Value 3 : " + Value3);
console.log("Value 4 : " + Value4);
Result = obj2.Addition();
console.log("Addition is : " + Result);
Result = obj2.Substraction();
console.log("Substraction is : " + Result);
Result = obj2.Multiplication();
console.log("Multiplication is : " + Result);
Result = obj2.Division();
console.log("Division is : " + Result);
