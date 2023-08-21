function submitPopup(){
    document.getElementById('submit-button').addEventListener('click', function(event) {
        event.preventDefault();
        alert('Form successfully submitted!');
    });
    
}