//step-1: add event listener to the deposit button.
document.getElementById("btn-deposit").addEventListener("click", function () {
    //step-2:get the deposit amount from the deposit input field.
    //(For input field always use .value to the value inside the input field )
    const depositField = document.getElementById("deposit-field");
    const newDepositAmountString = depositField.value;
    const newDepositAmount= parseFloat(newDepositAmountString);

    // step-3: get the current deposit total
    const depositTotalElement = document.getElementById("deposit-total");
    const previousDepositTotalString= depositTotalElement.innerText; // for non-input such as (element other input ,textarea) use .innerText to get the text.
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    //step-4: add numbers to set total value.
    const currentDepositAmount = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositAmount;

    //step-5 : get current total balance.
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    //step-6: calculate current total balance

    const currentTotalBalance =  previousBalanceTotal + newDepositAmount;

    balanceTotalElement.innerText = currentTotalBalance; // set total Balance.


     






    // step-7: clear deposit field.
    depositField.value = '';
});
