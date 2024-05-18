document.getElementById('btn-deposite').addEventListener('click',function(){
    // Deposite  filed
    const depositefield = document.getElementById('deposite-field');
    const NewdepositeAmountSrring = depositefield.value;
    const NewdepositeAmount= parseFloat(NewdepositeAmountSrring);
    
    const depositetotalElement = document.getElementById('deposite-total');
    const PreviousDepositeTotalString =depositetotalElement.innerText;
    const PreviousDepositeTotal = parseFloat(PreviousDepositeTotalString);

    // depositetotalElement field update

    const CurrentDepositeAmount = PreviousDepositeTotal+NewdepositeAmount;
    depositetotalElement.innerHTML =CurrentDepositeAmount;

    // balance filed
    const balancefieldElement = document.getElementById('balance-total');
    const PreviousBalanceAmountString = balancefieldElement.innerText;
    const PreviousBalanceAmount= parseFloat(PreviousBalanceAmountString);
 
    // Balance field update
    const CurrentBalanceAmount = PreviousBalanceAmount+NewdepositeAmount;
    balancefieldElement.innerText =CurrentBalanceAmount;
    

    depositefield.value='';
})