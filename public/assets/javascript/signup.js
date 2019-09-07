// $(document).ready(function(){
//     const signupForm = $(".signup");
//     const email = $("#email");
//     const about = $("#about");
//     const username = $("#username");
//     const password = $("#password");
//     const workerType = $("#workerType");
    
//     signupForm.on("submit", event => {
//         event.preventDefault();
//         let userData ={
//             email: email.val().trim(),
//             about: about.val().trim(),
//             username: username.val().trim(),
//             password: password.val().trim(),
//             workerType: workerType.val().trim()
//         };

//         if(!userData) {
//             return;
//         }

//         registerUser(userData);
//         email.val("");
//         about.val("");
//         username.val("");
//         password.val("");
//         workerType.val("");
//     });

//     function registerUser(email, about, username, password, workerType) {
//         $.post("api/signup",{
//             email: email,
//             about: about,
//             username: username,
//             password: password, 
//             workerType: workerType  
//         })
//         .then(function(data) {
//             window.location.replace("/home");
//         })
//         .catch(handleLoginErr);
//     };

//     function handleLoginErr(err) {
//         $("#alert .msg").text(err.responseJSON);
//         $("#alert").fadeIn(500);
//     }
// });