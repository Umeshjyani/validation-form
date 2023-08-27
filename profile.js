document.addEventListener("DOMContentLoaded", function() {
    const user = JSON.parse(localStorage.getItem("user"));
    const profileInfoDiv = document.getElementById("profileshow");
    const profileHTML = `
    <p><strong>Name: </strong> ${user.Name}</p>
    <p><strong>Email: </strong> ${user.Email}</p>
    <p><strong>Password: </strong> ${user.Password}</p>`;
    profileInfoDiv.innerHTML = profileHTML;
    });

    function logout() {
    const user = JSON.parse(localStorage.getItem("user"));
    if(user.accessToken!=""){
        localStorage.removeItem("user");
        window.location.href = "./index.html"; 
    }
  }