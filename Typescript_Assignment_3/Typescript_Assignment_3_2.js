var Circle = /** @class */ (function () {
    //Behaviour
    function Circle(R) {
        this.Redius = R;
        this.PI = 3.14;
    }
    Circle.prototype.Area = function () {
        return ((this.PI) * (this.Redius) * (this.Redius));
    };
    return Circle;
}());
var Value1 = 15;
var Value2 = 25;
var Result = 0;
var obj1 = new Circle(Value1);
console.log("Redius is : " + Value1);
Result = obj1.Area();
console.log("Area is : " + Result);
var obj2 = new Circle(Value2);
console.log("Redius is : " + Value2);
Result = obj2.Area();
console.log("Area is : " + Result);
