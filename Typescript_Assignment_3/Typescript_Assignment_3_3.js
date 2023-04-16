var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var CircleX = /** @class */ (function (_super) {
    __extends(CircleX, _super);
    //Behaviour
    function CircleX(R) {
        var _this = _super.call(this, R) || this;
        _this.PI = 3.14;
        return _this;
    }
    CircleX.prototype.Circumference = function () {
        return (2 * (this.PI) * (this.Redius));
    };
    return CircleX;
}(Circle));
var Value1 = 15;
var Value2 = 25;
var Result = 0;
var obj1 = new CircleX(Value1);
console.log("Redius is : " + Value1);
Result = obj1.Area();
console.log("Area is : " + Result);
Result = obj1.Circumference();
console.log("Circumference is : " + Result);
var obj2 = new CircleX(Value2);
console.log("Redius is : " + Value2);
Result = obj2.Area();
console.log("Area is : " + Result);
Result = obj2.Circumference();
console.log("Circumference is : " + Result);
