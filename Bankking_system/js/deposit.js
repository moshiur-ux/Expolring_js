document.getElementById('btn-deposit').addEventListener('click', function () {


    const depositeField = document.getElementById('deposit-field');
    const newDepositAmountString = depositeField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);




    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);




    const currentDepositeTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositeTotal;


     const balanceTotalElement =document.getElementById('balance-total');
     const previousBalanceTotalString =balanceTotalElement.innerText;
     const previousBalanceTotal =parseFloat(previousBalanceTotalString);






     const currentBalanceTotal =previousBalanceTotal +newDepositAmount;


     balanceTotalElement.innerText= currentBalanceTotal;
     





    //   for clear the field

    depositeField.value = "";


})