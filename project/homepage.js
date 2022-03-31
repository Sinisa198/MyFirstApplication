
if (!cantLogIn()) {
    returnToLogin();
  }
    document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("username").innerText = localStorage.name;
  });

  function cantLogIn() {
    return JSON.parse(localStorage.getItem('logged'));
  }

function searchLink(){
    document.getElementById("link").href=(("https://www.google.com/search?q=") + 
    document.getElementById("linkit").value);
}

function logout() {
    localStorage.logged = 0;
    returnToLogin();
}

function returnToLogin() {
    window.location.href = "login.html";
}

function goToNextPage() {
    localStorage.logged = 0;
    return nextPage();
}

function nextPage() {
    window.location.href = "finishpage.html";
}


