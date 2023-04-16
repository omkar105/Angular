function Summation(Arr : number[]) : number
{
    let Sum : number = 0;
    for(var i : number = 0; i < Arr.length; i++)
    {
        Sum = Sum + Arr[i]
    }
    return Sum
}

var Rarr : number[] = [23,6,7,4,5,7]
var Ret : number = 0
Ret = Summation(Rarr)
console.log("Addition is : "+Ret)
