// add Event handler button at withdraw button as client click here

document.getElementById('btn-withdraw').addEventListener('click', function(){
   
    // get the withdraw amount from withdraw input field

    const withdrawAmountfield = document.getElementById('withdraw-filed');
    const withdrawAmountfieldstring = withdrawAmountfield.value;
    const withdrawAmount = parseFloat(withdrawAmountfieldstring);

    // update the HTML field of withdraw
    const previouswithdrawfield= document.getElementById('previous-withdraw');
    const previouswithdrawfieldstring = previouswithdrawfield.innerText;
    const previouswithdrawdnumber = parseFloat(previouswithdrawfieldstring);
    const currentwithdrawdnumber =withdrawAmount+previouswithdrawdnumber;

    
    // get the current balance position from the inner html of balance field

    const previousBalancefield = document.getElementById('balance-total');
    const previousBalancefieldstring = previousBalancefield.innerText;
    const previousBalamce = parseFloat(previousBalancefieldstring);

    // get the current balance 
    if (withdrawAmount>previousBalamce || isNaN(withdrawAmount)){
        alert('Amount not match');
    }
    else{

    const currentbalance = previousBalamce-withdrawAmount;

    // set the new balance at balance html field 
    previousBalancefield.innerText =currentbalance;
    previouswithdrawfield.innerText=currentwithdrawdnumber;
    }

    

    // for new withdrawAmount input need to clear this field
    withdrawAmountfield.value='';

})