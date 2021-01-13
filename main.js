const inputs = document.querySelectorAll(".input");

function addhover() {
  let parent = this.parentNode.parentNode;
  parent.classList.add("focus");
}

function remcl() {
  let parent = this.parentNode.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", addhover);
  input.addEventListener("blur", remcl);
});

//Admin default
let objAdmin = [
  {
    username: "Admin1",
    password: "pwd1",
  },
  {
    username: "Admin2",
    password: "pwd2",
  },
];

function getData(e) {
  e.preventDefault();
  let username = document.querySelector("#username").value;
  let password = document.querySelector("#password").value;

  for (var i = 0; i < objAdmin.length; i++) {
    // check is user input matches username and password of a current index of the objAdmin array
    if (
      username === objAdmin[i].username &&
      password === objAdmin[i].password
    ) {
      console.log(username + "Sign as Admin!");
      // stop the function if this is found to be true
      document.querySelector("form").submit();
      return true;
    } else if (
      username !== objAdmin[i].username &&
      password === objAdmin[i].password
    ) {
      alert("Your password/ username has wrong or haven't Register!");
      return true;
    } else if (
      username === objAdmin[i].username &&
      password !== objAdmin[i].password
    ) {
      alert("Your password/ username has wrong or haven't Register!");
      return true;
    }
  }
  alert("Your password/ username has wrong or haven't Register!");
}
