 function logIn(event) {
    event.preventDefault();
    var user = document.forms['loginForm']['username'].value;
    var pass = document.forms['loginForm']['password'].value;
    

    if (user == 'krle' && pass == 'krle') {
      localStorage.logged = 1;
      window.location.href = 'homepage.html';
    } 
    else {
      alert('Pogresan username ili password ');
    }
  }
  
  
