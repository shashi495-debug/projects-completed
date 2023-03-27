let header = `<a href="index.html"><img src="assests/images/logo.png" alt="logo" id="mainLogo" /></a>
<form class="form-inline" id="login">
  <button class="btn  my-2 my-sm-0 btn-light" type="button" data-toggle="modal"
    data-target="#Login" id="loginButton" onclick="loginbut()">LOGIN</button>
</form>`

document.getElementById("headerId").innerHTML = header;

let footer = `<div id="subFooter1">
<div id="contactUsDiv">
  .<button type="button" class="btn btn-primary" id="contactUs" data-toggle="modal" data-target="#ContactUs">
    Contact&nbspUs
  </button>
</div>
<div id="copyRightText">
  &#169 2020 ROOM SEARCH PVT. LTD.
</div>
<div id="socialMediaIcons">
  <a href="https://www.facebook.com"><img class="socialMedia" src="assests/images/facebook.png" /></a>
  <a href="https://www.instagram.com"><img class="socialMedia" src="assests/images/instagram.png" /></a>
  <a href="https://twitter.com"><img class="socialMedia" src="assests/images/twitter.png" /><br></a>
</div>
</div>`

document.getElementById("footerId").innerHTML = footer;

function loginbut() {
  if (document.getElementById("loginButton").innerHTML === "LOGOUT") {
    document.getElementById("loginButton").innerHTML = "LOGIN"
    document.getElementById("loginButton").setAttribute("data-target", "#Lohj");
    localStorage.clear();
  }
  else
    document.getElementById("loginButton").setAttribute("data-target", "#Login");

}
function login() {
  if(document.getElementById("example-input-email").value==="" || document.getElementById("example-input-password")===""){
  alert("fill out the form before login");
  return ;
  }
  if (document.getElementById("loginButton").innerHTML === "LOGIN") {
    document.getElementById("loginButton").innerHTML = "LOGOUT";
    alert("Successfully logged in ");
  }

  
  var inputUsername = document.getElementById("example-input-email");
  localStorage.setItem("example-input-email", inputUsername.value);

  var inputPassword = document.getElementById("example-input-password");
  localStorage.setItem("example-input-password", inputPassword.value);
  
}

let para = document.createElement("div");
para.innerHTML = `<!--/ Modal Sign-in -->
<div class="modal fade" id="Login" tabindex="-1" role="dialog" aria-labelledby="example-modal-label"
  aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="example-modal-label">Please Login</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group">
            <label for="example-input-email">Username:</label>
            <input type="text" class="form-control" id="example-input-email" aria-describedby="emailHelp"
              placeholder="Enter Username" required>
          </div>
          <div class="form-group">
            <label for="example-input-password">Password:</label>
            <input type="password" class="form-control" id="example-input-password" placeholder="Enter Password"
              required>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="submit" class="btn btn-primary" onclick="login()" data-dismiss="modal">Login</button>
      </div>
    </div>
  </div>
</div>
<!-- Modal Sign-in /-->
<!-- /Modal Contact Us !-->
<div class="modal fade" id="ContactUs" tabindex="-1" role="dialog" aria-labelledby="example-modal-label"
  aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title" id="example-modal-label">Get in touch</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group">
            <p>Thank you for reaching out!!!</p>
            <p>Please enter your email and we will get back to you.</p>
            <label for="example-input-email">Email:</label>
            <input type="text" class="form-control" id="example-input-email" aria-describedby="emailHelp"
              placeholder="Enter your email id">
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </div>
  </div>
</div>
<!-- Modal Contact Us !/-->`;

document.body.appendChild(para);