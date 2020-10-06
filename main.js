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
    saveinfo();
    window.location.href = "Thankyoupage.html";
  }
}
function saveinfo() {
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var gender = document.getElementById("gender").value;
  var country = document.getElementById("country").value;
  var data = [fname, lname, email, password, gender, country];
}
