// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".change-devoured").on("click", function (event) {
    let id = $(this).data("id");
    let newDevoured = $(this).data("newdevoured");

    let newDevouredState = {
      devoured: newDevoured,
    };
    // Send the PUT request.
    $.ajax("/api/burger/" + id, {
      type: "PUT",
      data: newDevouredState,
    }).then(function () {
      console.log("changed devoured to", newDevoured);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    let newBurger = {
      name: $("#ca").val().trim(),
      devoured: $("[name=devour]:checked").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/burger", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      console.log("created new burger");
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".delete-burger").on("click", function (event) {
    let id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burger/" + id, {
      type: "DELETE",
    }).then(function () {
      console.log("deleted burger", id);
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
