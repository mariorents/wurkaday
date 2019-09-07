$(document).ready(function () {
    const postContainer = $("#postPlace");
    const postCategory = $("#category");

    $(document).on("click", "button.delete", handlePostDelete);
    
    let posts;

    // needs testing idk if it works
    const url = window.location.search;

    
    // needs testing
     getPosts();
     
    function getPosts(cb) {
        
        $.get("/api/posts", function(data) {
          console.log("Posts", data);
          posts = data;
          console.log(data);
          initializeRows();
        });
        console.log(cb);
      }
          
          
          

  function deletePost(id) {
    $.ajax({
      method: "DELETE",
      url: "/api/posts/" + id
    })
      .then(function () {
        getPosts();
      });
  };


      function initializeRows() {
        postContainer.empty();
        var postsToAdd = [];
        for (var i = 0; i < posts.length; i++) {
          postsToAdd.push(createNewRow(posts[i]));
        }
        postContainer.append(postsToAdd);
      };
    //   creates the bulma post for each post according to out database
      function createNewRow(post) {
        var formattedDate = new Date(post.createdAt);
        formattedDate = moment(formattedDate).format("MMMM Do YYYY, h:mm:ss a");
        var newCard = $("<div>");
        newCard.addClass("card");
        var newCardBody = $("<div>");
        newCardBody.addClass("card-body");
        var newMedia = $("<article>");
        newMedia.addClass("media");
        var newLeftFigure = $("<figure>");
        newLeftFigure.addClass("media-left");
        var newLogoImg = $("<img>");
        newLogoImg.attr("src", "assets/images/image.png")
        newLogoImg.addClass("image is-64x64");
        var newMediaContent = $("<div>");
        newMediaContent.addClass("media-content");
        var newContent = $("<div>");
        newContent.addClass("content");
        newContent.text("description: " + post.body)
        var newPoster = $("<h1>");
        var paymentBox = $("<p>");
        paymentBox.addClass("payment");
        paymentBox.text("Payment is: $" + post.payment)
        newPoster.addClass("poster-name");
        newPoster.text("Written by: " + post.name);
        var newPostTitle = $("<p>");
        newPostTitle.addClass("post-title");
        newPostTitle.text("Title: " + post.title + " ")
        var newRightMedia = $("<div>");
        newRightMedia.addClass("media-right");
        var deleteBtn = $("<button>");
        deleteBtn.addClass("delete")
        var emailBox = $("<p>");
        emailBox.addClass("emailBox");
        emailBox.text("Email: " + post.email);
        var subjectBox = $("<p>");
        subjectBox.addClass("subjectBox");
        subjectBox.text("Subject: " + post.category);

        // hopefully these appends work to create bulma media post
        newCard.append(newCardBody);
        newCardBody.append(newMedia);

        newMedia.append(newLeftFigure);
        newMedia.append(newMediaContent);
        newMedia.append(newRightMedia);
        newLeftFigure.append(newLogoImg);
        newMediaContent.append(newPoster);
        newMediaContent.append(newPostTitle);
        newMediaContent.append(formattedDate);
        newMediaContent.append(emailBox);
        newMediaContent.append(paymentBox);
        newMediaContent.append(subjectBox);
        newMediaContent.append(newContent);
        newRightMedia.append(deleteBtn);
        newMedia.data("post", post)
        return newCard;
    }
    
    function handlePostDelete() {
      var currentPost = $(this)
      .parent()
      .parent()
      .data("post");
      deletePost(currentPost.id);
    }
    
  })
        
        
