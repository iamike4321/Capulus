// showing and removing image in menu page
function showImage() {
  document.getElementById('ogImg').innerHTML = "<img src='images/cImg.jpeg'>";
}
function removeImage() {
    document.getElementById('ogImg').innerHTML =" ";
}

// wait time for chat, contact page
function waitTime() {
  //array that picks a number
  var time = [7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  //randomizer to pick a number from 1-7
  var x = Math.floor((Math.random() * 14) + 1);
//pops an alert on how long you will have to wait in chat
  alert("Your Approximate Wait time is "+time[x]+" minute(s)." +
      "Please click okay to continue and wait...");
}

//form validation for contact page
function validateForm() {
    var x = document.forms["form1"]["tel"].value;
    // checks if x or telephone value is a number or not.
    if (isNaN(x)) {
        alert("Please fill out a proper phone number with ONLY numbers");
        return false;
    }else {
      return true;
    }
  }

  //menu page on setInterval command
var increment = window.setInterval(counter, 1500);
function counter(inc) {
  var inc = document.getElementById('counter').value;
  inc++;
  document.getElementById('counter').value = inc;
}
