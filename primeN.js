var n=100;
for(var i=2;i<=n;i++)
{
    var isPrime=true;

    for(var j=2;j<=Math.sqrt(i);j++)
    {
        if(i%j==0)
        {
            var isPrime=false;
            break;

        }
    }


    if (isPrime) {
        console.log(i);
      }

  
}