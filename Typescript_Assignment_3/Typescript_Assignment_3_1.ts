class Arithmetic
{
    //Charecteristics
    Number1 : number
    Number2 : number
    Result : number

    //Behaviour
    constructor(N1 : number,N2 : number)
    {
        this.Number1 = N1;
        this.Number2 = N2;
        this.Result = 0;
    }
    Addition()
    {
        return this.Result = this.Number1 + this.Number2 
    }
    Substraction()
    {
        return this.Result = this.Number1 - this.Number2 
    }
    Multiplication()
    {
        return this.Result = this.Number1 * this.Number2 
    }
    Division()
    {
        return this.Result = this.Number1 / this.Number2 
    }
}

var Value1 : number = 25;
var Value2 : number = 5;
var Value3 : number = 20;
var Value4 : number = 2;
var Result : number = 0;
var obj1 = new Arithmetic(Value1,Value2)
console.log("Value 1 : "+ Value1)
console.log("Value 2 : "+ Value2)
Result = obj1.Addition()
console.log("Addition is : "+Result)
Result = obj1.Substraction()
console.log("Substraction is : "+Result)
Result = obj1.Multiplication()
console.log("Multiplication is : "+Result)
Result = obj1.Division()
console.log("Division is : "+Result)
var obj2 = new Arithmetic(Value3,Value4)
console.log("Value 3 : "+ Value3)
console.log("Value 4 : "+ Value4)
Result = obj2.Addition()
console.log("Addition is : "+Result)
Result = obj2.Substraction()
console.log("Substraction is : "+Result)
Result = obj2.Multiplication()
console.log("Multiplication is : "+Result)
Result = obj2.Division()
console.log("Division is : "+Result)

