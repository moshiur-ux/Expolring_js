document.getElementById('btn-withdraw').addEventListener('click',function()
{
    const newWithdrawAmount =getInputFieldValueById('withdraw-field');
     const previousWithdrawTotal =getTextFieldValueById('withdraw-total');
     const newWithdrawTotal =previousWithdrawTotal+newWithdrawAmount;
     setTextElementvalueById('withdraw-total',newWithdrawTotal);

   const previousBalanceTotal =getTextFieldValueById('balance-total');
   const newBalanceTotal=previousBalanceTotal-newWithdrawAmount;
   setTextElementvalueById('balance-total',newBalanceTotal);




})