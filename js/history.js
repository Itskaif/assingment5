const historySection = document.getElementById('history-section');
function getDateTime() {
    const now = new Date();
    const date = now.toDateString();
    const time = now.toLocaleTimeString('en-US', { timeZone: 'Asia/Dhaka' });
    return `${date}, ${time} (Bangladesh Standard Time)`;
}

function addDonationToHistory(amount, cause) {
    const dateTime = getDateTime();
    const newHistoryEntry = document.createElement('div');
    newHistoryEntry.className = 'border-2 w-5/6 m-auto rounded-lg p-4 mt-4';
    newHistoryEntry.innerHTML = `
        <h4 class = "font-extrabold lg:text-xl">${amount} BDT donated for ${cause}</h4>
        <p class= "text-gray-400">Date: ${dateTime}</p>
    `;

    historySection.appendChild(newHistoryEntry);

}

document.getElementById('donation-btn-1').addEventListener('click', function () {
    const donationAmount = document.getElementById('card-input-1').value;
    addDonationToHistory (donationAmount, 'Flood at Noakhali, Bangladesh')
});
document.getElementById('donation-btn-2').addEventListener('click', function () {
    const donationAmount = document.getElementById('card-input-2').value;
    addDonationToHistory(donationAmount, 'Flood at Feni, Bangladesh');
});

document.getElementById('donation-btn-3').addEventListener('click', function () {
    const donationAmount = document.getElementById('card-input-3').value;
        addDonationToHistory(donationAmount, 'Aid for Injured in the Quota Movement, Bangladesh');
});