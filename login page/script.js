var lst = [
  { name: "charan", email: "charan", password: "charan" }
];
var loggedin = false;
function signup() {
  var obj = {};
  var sign_name = document.getElementsByClassName("signup_name")[0];
  var sign_email = document.getElementsByClassName("signup_email")[0];
  var sign_password = document.getElementsByClassName("password1")[0];
  var sign_cfmpassword = document.getElementsByClassName("password2")[0];
  console.log(sign_password.value);
  console.log(sign_cfmpassword.value);
  var userExists = false;
  for (let i = 0; i < lst.length; i++) {
    if (lst[i].name === sign_name.value && lst[i].email === sign_email.value) {
      userExists = true;
      window.alert("User already exits please login.");
      var x = document.getElementsByClassName("signup_div")[0];
      x.style = "display : none";
      var y = document.getElementsByClassName("login_div")[0];
      y.style = "display : block";
      y.style = "transform : rotateY(180deg)";
    }
  }
  if (userExists === false) {
    if (
      sign_name.value === "" ||
      sign_email.value === "" ||
      sign_password.value === "" ||
      sign_cfmpassword.value === ""
    ) {
      window.alert("Please fill all the details inorder to signup.");
    } else {
      if (sign_password.value !== sign_cfmpassword.value) {
        window.alert("the password didn't match");
        sign_cfmpassword.value = "";
      } else {
        obj.name = sign_name.value;
        obj.email = sign_email.value;
        obj.password = sign_password.value;
        lst.push(obj);
        console.log(lst);
        loggedin = true;
        var suc_log = document.getElementsByClassName("succ_login")[0];
        suc_log.style = "display : block";
        sign_name.value = "";
        sign_email.value = "";
        sign_password.value = "";
        sign_cfmpassword.value = "";

        console.log(loggedin);


      }
    }
  }
}

function login_from_signup() {
  var suc_log = document.getElementsByClassName("succ_login")[0];
  suc_log.style = "display : none";
  var x = document.getElementsByClassName("signup_div")[0];
  x.style = "display : none";
  var y = document.getElementsByClassName("login_div")[0];
  y.style = "display : block";
  y.style = "transform : rotateY(180deg)";
  var z = document.getElementsByClassName("inner_card")[0];
  z.style = "transform : rotateY(180deg)";
  if (loggedin) {
    var x = document.getElementsByTagName("BODY")[0];
    x.style =
      "background-image: url(https://i0.wp.com/pune.news/wp-content/uploads/2023/10/Places-to-Visit-in-Hampi.webp?fit=1920%2C1080&ssl=1)";
    var z = document.getElementsByClassName("login_div")[0];
    z.style = "background-color : #FCE4C3";
    var y = document.getElementsByClassName("inner_card")[0];
    y.style = "background-color : #f5e8b9";
    y.style = "opacity : .9";
  }
}

function signup_from_login() {
  var err = document.getElementsByClassName("error_div")[0];
  err.style = "display : none";

  var y = document.getElementsByClassName("signup_div")[0];
  // y.style = "transform : rotateY(180deg)";

  var z = document.getElementsByClassName("login_div")[0];
  z.style = "transform : rotateY(180deg)";
  z.style = "display : none";

  var x = document.getElementsByClassName("inner_card")[0];
  x.style = "transform : rotateY(180deg)";
  y.style = "display : block";
}

function login() {
  var email = document.getElementsByClassName("user_name")[0];
  var password = document.getElementsByClassName("user_password")[0];
  console.log(email.value, password.value);
  if (email.value === "" || password.value === "") {
    window.alert("Please Enter Valid Deatils");
  } else {
    var user_found = false;
    for (let i = 0; i < lst.length; i++) {
      console.log(lst[i].name, " ", lst[i].email, " ", lst[i].password);
      if (
        (lst[i].name === email.value || lst[i].email === email.value) &&
        lst[i].password === password.value
      ) {
        console.log("User Exists");
        var logged = document.getElementsByClassName("logged")[0];
        logged.style = "opacity : 1";
        setTimeout(()=>{
          logged.style.opacity="0",
          logged.style.transition = "all .5s ease"
        },5000);

        var x = document.getElementsByTagName("BODY")[0];
        x.style =
          "background-image: url(https://i.natgeofe.com/n/b9e9b8d1-fa08-4b90-96bb-310cace03847/meenakshi-amman-temple-india.jpg)";
        var y = document.getElementsByClassName("inner_card")[0];
        y.style = "display : none";
        user_found = true;
      }
    }
    if (!user_found) {
      var err = document.getElementsByClassName("error_div")[0];
      err.style = "opacity : 1";
      err.style = "top : auto";
      err.style.transition = "all .5s ease";
    }
  }
}
var c = 0;
function showpassword() {
  var x = document.getElementsByClassName("user_password")[0];
  if (c == 0) {
    var y1 = document.getElementsByClassName("fa-eye-slash");
    y1.style = "display : none";
    var y2 = document.getElementsByClassName("fa-eye");
    y2.style = "display : inline-block";
    x.type = "text";
    c = 1;
  } else {
    var y1 = document.getElementsByClassName("fa-eye-slash");
    y1.style = "display : inline-block";
    var y2 = document.getElementsByClassName("fa-eye");
    y2.style = "display : none";
    x.type = "password";
    c = 0;
  }
}

var c1 = 0;
function showpassword1() {
  var x = document.getElementsByClassName("password1")[0];
  if (c1 == 0) {
    var y1 = document.getElementsByClassName("fa-eye-slash");
    y1.style = "display : none";
    var y2 = document.getElementsByClassName("fa-eye");
    y2.style = "display : inline-block";
    x.type = "text";
    c1 = 1;
  } else {
    var y1 = document.getElementsByClassName("fa-eye-slash");
    y1.style = "display : inline-block";
    var y2 = document.getElementsByClassName("fa-eye");
    y2.style = "display : none";
    x.type = "password";
    c1 = 0;
  }
}

var c2 = 0;
function showpassword2() {
  var x = document.getElementsByClassName("password2")[0];
  if (c2 == 0) {
    var y1 = document.getElementsByClassName("fa-eye-slash");
    y1.style = "display : none";
    var y2 = document.getElementsByClassName("fa-eye");
    y2.style = "display : inline-block";
    x.type = "text";
    c2 = 1;
  } else {
    var y1 = document.getElementsByClassName("fa-eye-slash");
    y1.style = "display : inline-block";
    var y2 = document.getElementsByClassName("fa-eye");
    y2.style = "display : none";
    x.type = "password";
    c2 = 0;
  }
}
