
document.getElementById('btn-deposit').addEventListener('click',function()
{

  const newDepositAmonut =getInputFieldValueById('deposit-field');


  const previousDepostTotal =getTextFieldValueById('deposit-total');
   

  const newDepositTotal =previousDepostTotal+newDepositAmonut;

   setTextElementvalueById('deposit-total',newDepositTotal);

   
   const previousBalanceTotal = getTextFieldValueById('balance-total')
   const newBalanceTotal =previousBalanceTotal+newDepositAmonut;
   setTextElementvalueById('balance-total',newBalanceTotal);


})