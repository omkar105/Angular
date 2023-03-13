function Area(radius) {
    var Circle_Area = 0;
    Circle_Area = 3.14 * Math.pow(radius, 2);
    return Circle_Area;
}
var Totle_area = 0;
Totle_area = Area(5);
console.log("Area of Circle is : " + Totle_area);
