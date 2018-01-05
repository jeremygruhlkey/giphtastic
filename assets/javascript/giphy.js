var villians = ["Annie Wilkes", "Skeletor", "Patrick Bateman", "Mr Burns", "Mr Blonde", "Joker", "Hans Landa", "Harley Quinn", "Bill the Butcher", "Drumpf"];

// API key tYXw7aUMNKcmjejpFQhLncBUY285U7iN
function displayGiphs() {
    
            var villian = $(this).attr("villian-name");
            var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=tYXw7aUMNKcmjejpFQhLncBUY285U7iN&q=" + villian + "&limit=10&offset=0&rating=R&lang=en";
    
            // Creates AJAX call for the specific villian button being clicked
            $.ajax({
              url: queryURL,
              method: "GET"
            }).done(function(response) {
                console.log(response);
                console.log("rating is " + response.data[0].rating);
                console.log("giphSource " + response.data[0].images.original.url);
                $("#villianGiphs").empty();
            for (var i = 0; i < 10; i++) {
              // Creates a div to hold the giff
              var villianDiv = $("<div class = villianImage >");
              // Retrieves the rating Data
              var rating = response.data[i].rating;
              // Creates an element to have the rating displayed
              var pRating = $("<p>").text("Rating: " + rating);
              // Displays the rating
              villianDiv.append(pRating);
              // creates an img element to hold the gif
              var giphSource = response.data[i].images.fixed_height_small_still.url;
              var animate = response.data[i].images.fixed_height_small.url
              var giph = $("<img class=gif >").attr("src", giphSource);
              giph.attr("data-animate", animate);
            //   console.log("giph " + giphSource);
              villianDiv.append(giph);
              // Puts the gif and rating into the villanGiphs div.
              $("#villianGiphs").append(villianDiv);
            }
            });
    
          }
function renderButtons() {
    
            // Deletes the villians prior to adding new villians to avoid repeat buttons
            $("#villianButtons").empty();
            // Loops through the array of movies
            for (var i = 0; i < villians.length; i++) {
    
              // Generates buttons for each movie in the array
              var a = $("<button>");
              // Adds a class of villian to our button
              a.addClass("villian");
              // Added a data-attribute
              a.attr("villian-name", villians[i]);
              // Provided the initial button text
              a.text(villians[i]);
              // Added the button to the villianButtons div
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

  function animateGiphs() {
      
      var originalSource = $(this).attr("src");
      var newSource = $(this).attr("data-animate");
      console.log("Or " + originalSource);
      console.log("New " + newSource);
      $(this).attr("src", newSource);
      $(this).attr("data-animate", originalSource);
    
  }

        // Adding click event listeners to all elements with a class of "movie"
      $(document).on("click", ".villian", displayGiphs);
      $(document).on("click", ".gif", animateGiphs);
      
        renderButtons();


