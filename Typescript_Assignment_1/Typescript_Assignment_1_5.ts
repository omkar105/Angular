function Fibonacci(No1 : number) : void
{
    let Back : number = 1
    let For : number = 1
    let Ctn : number = 1
    console.log(Ctn)
    while(Ctn <= No1)
    {
        console.log(Ctn)
        Ctn = Back + For
        Back = For
        For = Ctn

    }
}
Fibonacci(21)