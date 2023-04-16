function Armstrong(No1 : number) : void
{
    let iDigit : number = 0;
    let Sum : number = 0;
    let No2 : number = No1
    let Sqaure : number = No1.toString().length
    while(No1 > 0)
    {
        iDigit = No1 % 10
        Sum = Sum + (iDigit**Sqaure)
        No1 = Number((No1 / 10).toString().split('.')[0])
    }
    if (Sum == No2)
    {
        console.log("It is Armstrong Number")
    }
    else
    {
        console.log("It is Not Armstrong Number")
    }
}

Armstrong(153)