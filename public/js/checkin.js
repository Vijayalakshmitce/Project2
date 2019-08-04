// The code in add.js handles what happens when the user clicks the "Add a book" button.

// When user clicks add-btn
$("#add-btn").on("click", function(event) {
  event.preventDefault();

  // Make a newGuest object
  var newGuest = {
    guest_Name: $("#name")
      .val()
      .trim(),
      age: $("#age")
      .val()
      .trim(),
      gender: $("#sex")
      .val()
      .trim(),
      shelter_Name: $("#shelter")
      .val()
      .trim(),
      entry_Date: $("#date")
      .val()
     
  };


  $.post("/api/guest", newGuest)
  
    .then(function() {
      // var div = $("<div>");
      // div.addClass("guest");
      // div.append("<p>" + newGuest.name + "</p>");
      // div.append("<p>" + newGuest.age + "</p>");
      // div.append("<p>" + newGuest.sex + "</p>");
      // div.append("<p>" + newGuest.shelter + "</p>");
      // div.append("<p>" + newGuest.date + "</p>");

      // $("/api/guest").prepend(div);
      alert("added succesfully");
  
    });

 
  $("#name").val("");
  $("#age").val("");
  $("#sex").val("");
  $("#shelter").val("");
  $("#date").val("");
});
