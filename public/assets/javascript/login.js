$(document).ready(function() {
    const loginForm = $("#login");
    const email = $("#email-input");
    const password = $("#password-input");

    loginForm.on("submit", function(event) {
        event.preventDefault();
        const userData = {
            email: email.val().trim(),
            password: password.val().trim()
        }

        if(!userData.email || !userData.password) {
            return;
        }

        loginUser(userData.email, userData.password);
        emailInput.val("");
        passwordInput.val("");
    });

    function loginUser(email, password) {
        $.post("/api/login", {
          email: email,
          password: password
        })
          .then(function() {
            window.location.replace("/home");
          })
          .catch(function(err) {
            console.log(err);
          });
      }
    
})