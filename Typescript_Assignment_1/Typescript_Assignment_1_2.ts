function Area(radius : number) : number
{
    let Circle_Area : number = 0
    Circle_Area =  3.14 * radius ** 2
    return Circle_Area
}
var Totle_area : number = 0
Totle_area = Area(5)
console.log("Area of Circle is : "+Totle_area)

