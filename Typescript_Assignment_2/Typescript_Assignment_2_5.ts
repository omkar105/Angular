function ChkString(Str1)
{
    let matchString = "Marvellous";
    let Result = Str1.includes(matchString)
    if (Str1.includes(matchString) == true)
    {
        console.log("String contains Marvellous on it")
    }
    else
    {
        console.log("String Not contains Marvellous on it")
    }
    
}

var Value = "Pune Kothrud Marvellous Infosystems";
ChkString(Value)