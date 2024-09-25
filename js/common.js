function donationHandler(inputId, accountBalanceId, floodBalanceId) {
    const getAmount = parseFloat(document.getElementById(inputId).value);
    const accountBalance = parseFloat(document.getElementById(accountBalanceId).textContent);
    const floodBalance = parseFloat(document.getElementById(floodBalanceId).textContent);


    if (isNaN(getAmount) || getAmount <= 0 || getAmount > accountBalance) {
        alert('You cant donate');
        document.getElementById(inputId).value = '';
    }
    else {
        const amount = accountBalance - getAmount;
        const newFloodBalance = floodBalance + getAmount;
        document.getElementById(accountBalanceId).textContent = amount + ' BDT';
        document.getElementById(floodBalanceId).textContent = newFloodBalance + ' BDT';

        document.getElementById('modal-section').classList.remove('hidden');
        document.getElementById('close-btn').addEventListener('click', function(){
            document.getElementById('modal-section').classList.add('hidden');
        })

        document.getElementById(inputId).value = '';


        
    }
};

document.getElementById('donation-btn-1').addEventListener('click', function(){
    donationHandler('card-input-1', 'main-balance', 'flood-balance-1');
});

document.getElementById('donation-btn-2').addEventListener('click', function(){
    donationHandler('card-input-2', 'main-balance', 'flood-balance-2')
});

document.getElementById('donation-btn-3').addEventListener('click', function(){
    donationHandler('card-input-3', 'main-balance', 'quota-balance')
});