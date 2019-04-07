// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-devour").on("click", function(event) {
    var id = $(this).data("id");
    var newdevour = $(this).data("newdevour");

    var newdevourState = {
      devoury: newdevour
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newdevourState
    }).then(
      function() {
        console.log("changed devour to", newdevour);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#ca").val().trim(),
      devour: $("[name=devour]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  // select the button with the class of .burger-delete
  $(".burger-delete").on("click", function(e){
    console.log("clicked the delete button");
    let id = $(this).data("id");
    console.log(id);
    $.ajax({
      url: "/api/burgers/" + id,
      method: "DELETE"
    }).then(function(data){
      if(data) {
        location.reload();
      }
    });
  });

  // on click of the button 

  // call the route to delete a burger with the id
});
