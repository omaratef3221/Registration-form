function passwordvis() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
function fillingnotcomplete() {
  var gender = document.getElementById("gender");
  var country = document.getElementById("country");
  if (gender.value === "" || country.value == "") {
    alert("Please fill the requirments");
  } else {
    alert("Thank You for your application");
  }
}
