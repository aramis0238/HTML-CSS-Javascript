// main function to prompt user for major and write
// it to html page
function major_prompt(){

    // input variable
    var major_name = prompt("What is your major?", "Computer Science");

    // if user has entered something
    if (major_name != null) {
    document.write("Great, we love " + major_name + " majors in this club!");
    }
    else{
        alert("Enjoy your browsing!")
    }
}

function submission() {
    // get id of submit button
    var submitButton = document.getElementById('submit-button');
    submitButton.addEventListener('click', function(event) {
      event.preventDefault();
  
      // Show the pop-up to the user
      alert('Form submitted successfully!');
    });
  }
  