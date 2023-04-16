function Maximum(Arr : number[]) : number
{
    let Max1 : number = 0;
    let Max2 : number = 0;
    let Cnt : number = 0;
    for(var i : number = 0; i <= Arr.length; i++)
    {
        if (Max1 < Arr[i])
        {
            Max1 = Arr[i]
            Cnt = Cnt + 1
        }
    }
    for(var i : number = 0; i <= Arr.length; i++)
    {
        if ((Max2 < Arr[i]) && (i != (Cnt-1)))
        {
            Max2 = Arr[i]
        }
    }
    return Max2
}

var Rarr : number[] = [23,89,6,29,56,45,32]
var Ret : number = 0
Ret = Maximum(Rarr)
console.log("Second Maximum Number is : "+Ret)
