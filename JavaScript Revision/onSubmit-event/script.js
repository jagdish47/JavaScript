const form = document.getElementById("myForm");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event);

  var name = document.forms["myForm"]["a"].value;
  var email = document.forms["myForm"]["b"].value;

  // Do something with the form data
  console.log("Name: " + name);
  console.log("Email: " + email);
});
