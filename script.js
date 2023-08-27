const show=document.getElementById("signupbtn");
function submidata(){
    // event.preventDefault();
    const Name=document.getElementById("name").value.trim();
    const Email=document.getElementById("email").value.trim();
    const Password=document.getElementById("password").value;
    const ConfirmPassword=document.getElementById("ConfirmPassword").value;

    if (!Name || !Email || !Password || !ConfirmPassword) {
            showMessage("error", "All fields are mandatory.");
            return;
      }
    else{
        if(Password != ConfirmPassword || Password=="" || ConfirmPassword==""){
            showMessage("error", "Password and Confirm Password are not match please check");
            return;
        }
        const accessToken = generateAccessToken();
        const user = {
            accessToken,
            Name,
            Email,
            Password,
        };
        localStorage.setItem("user", JSON.stringify(user));
        const getuser = JSON.parse(localStorage.getItem("user"));

        if(getuser!="" || !getuser.accessToken !=""){
            showMessage("success", "Signup successful. Redirecting to profile...");
            setTimeout(() => {
                window.location.href = "profile.html";
            }, 2000);
        }
        else{
            showMessage("error", "You Do Not Have Access Token");
            return;
        }
    }
  }

  function showMessage(type, message) {
    const messageDiv = document.getElementById("message");
    messageDiv.innerHTML = `${message}`;
    messageDiv.classList.remove("error", "success");
    if(type== "error")
        messageDiv.classList.add("error");
    else
        messageDiv.classList.add("success");

    messageDiv.style.display = "block";
  }


  function generateAccessToken() {
    return Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);
  }

