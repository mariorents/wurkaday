$(document).ready(function () {

  const postContainer = $(".postPlace");
  const postCategory = $("#category");

    $(document).on("click", "button.delete", handlePostDelete);

    let posts;

    // needs testing idk if it works
    const url = window.location.search;

    const profileId;
    if (url.indexOf("?name=") !== -1) {
        profileId = url.split("=")[1];
        getPosts(profileId);
    }
    
    else {
        getPosts();
    }
    // needs testing
    
    function getPosts(profile) {
        profileId = profile || "";
        if (profileId) {
          profileId = "/?name=" + profileId;
        }
        $.get("/api/posts" + profileId, function(data) {
          console.log("Posts", data);
          posts = data;
          if (!posts || !posts.length) {
            displayEmpty(profile);
          }
          else {
            initializeRows();
          }
        });
      }
      else {
        initializeRows();
      }
    });
  }

  function deletePost(id) {
    $.ajax({
      method: "DELETE",
      url: "/api/posts/" + id
    })
      .then(function () {
        getPosts(postCategory.val());
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
        var newMedia = $("<article>");
        newMedia.addClass("media");
        var newLeftFigure = $("<figure>");
        newLeftFigure.addClass("media-left");
        var newLogoImg = $("<p scr='https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=2ahUKEwicjbm-ubbkAhVOip4KHSSkDS8QjRx6BAgBEAQ&url=https%3A%2F%2Fwww.lapsi.org%2Fpics%2Fj&psig=AOvVaw2aYZDVq_H2Z-8CDa7LwQ2t&ust=1567661802647506'>");
        newLogoImg.addClass("image is-64x64");
        var newMediaContent = $("<div>");
        newMediaContent.addClass("media-content");
        var newContent = $("<div>");
        newContent.addClass("content");
        newContent.text(post.body)
        var newPoster = $("<h1>");
        newPoster.addClass("poster-name");
        newPoster.text("Written by: " + post.Profile.name)
        var newPostTitle = $("<p>");
        newPostTitle.addClass("post-title");
        newPostTitle.text(post.title + " ")
        var newRightMedia = $("<div>");
        newRightMedia.addClass("media-right");
        var deleteBtn = $("<button>");
        deleteBtn.addClass("delete")
        

        // hopefully these appends work to create bulma media post
        newMedia.append(newLeftFigure);
        newMedia.append(newMediaContent);
        newMedia.append(newRightMedia);
        newLeftFigure.append(newLogoImg);
        newMediaContent.append(newPostTitle);
        newMediaContent.append(newContent);
        newRightMedia.append(deleteBtn);
        newMedia.data("post", post)
        return newMedia;
    }
})

function handlePostDelete() {
    var currentPost = $(this)
      .parent()
      .parent()
      .data("post");
    deletePost(currentPost.id);
  }
        
        
        
