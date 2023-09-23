function checkAge()
{
    const  ageField=document.getElementById('age');
    const ageText =ageField.value;
    const errorTag =document.getElementById('error');

    try {
        // console.log(bilbariya)
        const age= parseInt(ageText);
        if(isNaN(age))
        {
            throw " please enter a number";
          

        }
        else if(age<18)
        {
            throw " bacca kacca not allowed";


        }
        else if(age>30)
        {
            throw " murobbi not allowed";
            
        }
    } catch (error) {
        console.log('Error',error);
        errorTag.innerHTML=`Error`+error;


        
    }
    finally
    {
        console.log("All done");

    }
    console.log(1000);


}