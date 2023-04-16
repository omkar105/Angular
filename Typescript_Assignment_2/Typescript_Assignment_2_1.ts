function Maximum(Arr : number[]) : number
{
    let Max : number = 0;
    for(var i : number = 0; i <= Arr.length; i++)
    {
        if (Max < Arr[i])
        {
            Max = Arr[i]
        }
    }
    return Max
}

var Rarr : number[] = [23,89,6,29,56,45,77,32]
var Ret : number = 0
Ret = Maximum(Rarr)
console.log("Maximum Number is : "+Ret)
