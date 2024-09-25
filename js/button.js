document.getElementById('donation-btn').addEventListener('click', function(){
    document.getElementById('history-btn').classList.remove('bg-lime-300');
    document.getElementById('donation-btn').classList.add('bg-lime-300');
    document.getElementById('donation-section').classList.remove('hidden');
    document.getElementById('history-section').classList.add('hidden');
});

document.getElementById('history-btn').addEventListener('click', function(){
    document.getElementById('history-btn').classList.add('bg-lime-300');
    document.getElementById('donation-btn').classList.remove('bg-lime-300');
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history-section').classList.remove('hidden');
});