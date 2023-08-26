document.getElementById("signupbtn").addEventListener("click", function(event) {
    event.preventDefault();
    const Name=document.getElementById("name").value.trim();
    const Email=document.getElementById("email").value.trim();
    const Password=document.getElementById("password").value;
    const ConfirmPassword=document.getElementById("ConfirmPassword").value;

    if (!Name || !Email || !Password || !ConfirmPassword) {
        if(Password!=ConfirmPassword){
            showMessage("error", "All fields are mandatory.");
            return;
        }
        else{
            showMessage("error", "Password and Confirm Password are not match please check");
            return;
        }
      }
    else{
        const accessToken = generateAccessToken();
        const user = {
            accessToken,
            Name,
            Email,
            Password,
        };
        localStorage.setItem("user", JSON.stringify(user));
        const getuser = JSON.parse(localStorage.getItem("user"));

        if(!getuser || !getuser.accessToken){
            showMessage("success", "Signup successful. Redirecting to profile...");
            setTimeout(() => {
                window.location.href = "profile.html";
            }, 3000);
        }
        else{
            showMessage("error", "You Do Not Have Access Token");
            return;
        }
    }
  });

  function showMessage(type, message) {
    const messageDiv = document.getElementById("message");
    messageDiv.innerHTML = `<p class="${type}">${message}</p>`;
  }

  document.addEventListener("DOMContentLoaded", function() {
    if (window.location.pathname === "/profile.html") {
    const user = JSON.parse(localStorage.getItem("user"));
    const profileInfoDiv = document.getElementById("profile-info");
    const profileHTML = `
    <p><strong>Name: </strong> ${user.Name}</p>
    <p><strong>Email: </strong> ${user.Email}</p>
    <p><strong>Password: </strong> ${user.Password}</p>`;
    profileInfoDiv.innerHTML = profileHTML;

    }
  });
   function logout() {
    const user = JSON.parse(localStorage.getItem("user"));
    if(!user || !user.accessToken){
        localStorage.removeItem("user");
        window.location.href = "index.html"; 
    }
  }
  function generateAccessToken() {
    return Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);
  }

