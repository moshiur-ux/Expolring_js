document.getElementById('btn-withdraw').addEventListener('click' ,function()
{

    const withdrawField =document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount =parseFloat(newWithdrawAmountString);
   


    const withdrawTotalElement =document.getElementById('withdraw-total');
    const previousWithdrawTotalString =withdrawTotalElement.innerText;
    const previousWithdrawTototal =parseFloat(previousWithdrawTotalString);


    const currentWithdrawTotal =previousWithdrawTototal+newWithdrawAmount;
    withdrawTotalElement.innerText =currentWithdrawTotal;

   
    const balanceTotalElement =document.getElementById('balance-total');
    const previousBalanceTotalString =balanceTotalElement.innerText;
    const previousBalanceTotal =parseFloat(previousBalanceTotalString);



    const newbalanceTotal =previousBalanceTotal -newWithdrawAmount;

    balanceTotalElement .innerText =newbalanceTotal;


     withdrawField.value =" ";

   

})