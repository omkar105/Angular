class Circle
{
    //CHaracteristics
    Redius : number
    PI : number

    //Behaviour
    constructor(R : number)
    {
        this.Redius = R;
        this.PI = 3.14;
    }
    Area()
    {
        return ((this.PI)* (this.Redius) * (this.Redius))
    }
}

class CircleX extends Circle
{
    //Charactristics
    PI : number
    //Behaviour
    constructor(R : number)
    {
        super(R);
        this.PI = 3.14;
    }
    Circumference()
    {
        return (2 * (this.PI)* (this.Redius))
    }
}

var Value1 : number = 15;
var Value2 : number = 25;
var Result : number = 0;
var obj1 = new CircleX(Value1)
console.log("Redius is : "+Value1)
Result = obj1.Area()
console.log("Area is : "+Result)
Result = obj1.Circumference()
console.log("Circumference is : "+Result)
var obj2 = new CircleX(Value2)
console.log("Redius is : "+Value2)
Result = obj2.Area()
console.log("Area is : "+Result)
Result = obj2.Circumference()
console.log("Circumference is : "+Result)