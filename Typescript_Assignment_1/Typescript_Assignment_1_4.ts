function ChkPrime(No1 : number) : boolean
{
    if (No1 % 2 == 0)
    {
        return false
    }
    else
    {
        return true
    }
} 

var output : boolean = true
output = ChkPrime(23)

if (output == true )
{
    console.log("It is Prime Number")
}
else
{
    console.log("It is Not Prime Number")
}