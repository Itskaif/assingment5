function popUp (buttonId){
    document.getElementById('modal-section').classList.remove('hidden');
    document.getElementById('close-btn').addEventListener('click', function(){
        document.getElementById('modal-section').classList.add('hidden');
    })
}