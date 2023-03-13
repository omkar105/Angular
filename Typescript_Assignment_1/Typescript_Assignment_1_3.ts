function DisplayFactor(No1 : number) : void
{
    let Ctr : number = 1
    for(Ctr = 1 ; Ctr <= No1/2 ; Ctr++)
    {
        if (No1 % Ctr == 0)
        {
            console.log(Ctr)
        }
    }
}

DisplayFactor(20)