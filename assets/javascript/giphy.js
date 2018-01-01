var villians = ["Annie Wilkes", "Hans Gruber", "Patrick Bateman", "Gollum", "Joker", "Hans Landa", "Harley Quinn", "Bill the Butcher"];

function renderButtons() {
    
            // Deletes the villians prior to adding new movies
            // (this is necessary otherwise you will have repeat buttons)
            $("#villianButtons").empty();
            // Loops through the array of movies
            for (var i = 0; i < villians.length; i++) {
    
              // Then dynamicaly generates buttons for each movie in the array
              // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
              var a = $("<button>");
              // Adds a class of villian to our button
              a.addClass("villian");
              // Added a data-attribute
              a.attr("villian-name", villians[i]);
              // Provided the initial button text
              a.text(villians[i]);
              // Added the button to the buttons-view div
              $("#villianButtons").append(a);
            }
          }

// This function handles events where the add villian button is clicked
$("#addVillian").on("click", function(event) {
    event.preventDefault();
    // This line of code will grab the input from the textbox
    var villian = $("#villian-input").val().trim();

    // The villian from the textbox is then added to our array
    villians.push(villian);

    // Calling renderButtons which handles the processing of our movie array
    renderButtons();
  });

          renderButtons();