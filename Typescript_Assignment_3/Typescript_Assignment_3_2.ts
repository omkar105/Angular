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

var Value1 : number = 15;
var Value2 : number = 25;
var Result : number = 0;
var obj1 = new Circle(Value1)
console.log("Redius is : "+Value1)
Result = obj1.Area()
console.log("Area is : "+Result)
var obj2 = new Circle(Value2)
console.log("Redius is : "+Value2)
Result = obj2.Area()
console.log("Area is : "+Result)