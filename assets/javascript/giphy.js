var villians = ["Annie Wilkes", "Lex Luthor", "Patrick Bateman", "Gollum", "Joker", "Hans Landa", "Harley Quinn", "Bill the Butcher"];

// API key tYXw7aUMNKcmjejpFQhLncBUY285U7iN
function displayGiphs() {
    
            var villian = $(this).attr("villian-name");
            var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=tYXw7aUMNKcmjejpFQhLncBUY285U7iN&q=" + villian + "&limit=1&offset=0&rating=R&lang=en";
    
            // Creates AJAX call for the specific movie button being clicked
            $.ajax({
              url: queryURL,
              method: "GET"
            }).done(function(response) {
                console.log(response);
                console.log("rating is " + response.data[0].rating);
                console.log("giphSource " + response.data[0].images.original.url);
    
              // Creates a div to hold the movie
              var villianDiv = $("<div class = villian >");
              // Retrieves the Rating Data
              var rating = response.data[0].rating;
              // Creates an element to have the rating displayed
              var pRating = $("<p>").text("Rating: " + rating);
              // Displays the rating
              villianDiv.append(pRating);
              // creates an element to hold the gif
              var giphSource = response.data[0].images.original.url;
              var giph = $("<img>").attr("src", giphSource);
              console.log("giph " + giphSource);
              villianDiv.append(giph);
              // Puts the gif and rating into the villanGiphs div.
              $("#villianGiphs").append(villianDiv);
            });
    
          }
function renderButtons() {
    
            // Deletes the villians prior to adding new villians
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

        // Adding click event listeners to all elements with a class of "movie"
      $(document).on("click", ".villian", displayGiphs);
      
        renderButtons();


