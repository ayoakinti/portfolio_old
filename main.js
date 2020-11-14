let formBtn = document.getElementById("form-btn");
let name = document.getElementById("name");
let email = document.getElementById("email");
let message = document.getElementById("message");

formBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(name.value);
  console.log(email.value);
  console.log(message.value);
  name.value = "";
  email.value = "";
  message.value = "";
});
