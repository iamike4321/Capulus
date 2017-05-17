// showing and removing image in menu page
function showImage() {
  document.getElementById('ogImg').innerHTML = "<img src='images/cImg.jpeg'>";
}
function removeImage() {
    document.getElementById('ogImg').innerHTML =" ";
}

// wait time for chat, contact page
function waitTime() {
  var time = [15,10,3,11,20,13,18];
  var x = Math.floor((Math.random() * 7) + 1);

  alert("Your Approximate Wait time is "+time[x]+" minute(s).");
}

//form validation
function validateForm() {
    var x = document.forms["form1"]["tel"].value;
    // if fname is empty then there will be an alert
    if (isNaN(x)) {
        alert("Please fill out phone # with ONLY numbers");
        return false;
    }else {
      alert("true")
      return true;

    }
  }
