$(document).ready(function () {


    const titleInput = $("#jobTitle");
    const paymentInput = $("#paymentAmount");
    const subjectInput = $("#subjectType");
    const descriptionInput = $("#descriptionInput");
    
    
    
    const forumSubmit = (event) => {
        event.preventDefault();

        // if (!titleInput.val().trim() || !paymentInput.val().trim() || !subjectInput.val() || !descriptionInput.val()) {
        //     return;
        // }
        const newPost = {
            title: titleInput.val(),
            body: descriptionInput.val(),
            category: subjectInput.val(),
            payment: paymentInput.val(),
            // profile: jake
        };
        
        submitPost(newPost);
        console.log(newPost);
    }
    
    
    function submitPost(post) {
        $.post("/api/posts", post, function() {
            window.location.href = "/posts";
        });
    }
    
    
    $("#submitBtn").on("click", forumSubmit);
    
    
    
    
})