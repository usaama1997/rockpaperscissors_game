
window.onload = function() {

    var userScore = 0;
    var compScore = 0;
    var userScore_span = document.querySelector("#user-score");
    var compScore_span = document.querySelector("#comp-score");
    var scoreBoard_div = document.querySelector(".score-board");
    var result_p       = document.querySelector(".result > p");
    var rock_div       = document.querySelector("#rock");
    var paper_div      = document.querySelector("#paper");
    var scissors_div   = document.querySelector("#scissors");
    
    
    function getComputerChoice() {
      var choices = ["'Rock'", "'Paper'", "'Scissors'"];
      var randomNumber = Math.floor(Math.random() * 3); //uses 3 indexes as 0:rock 1:paper 2:scissors
      return choices[randomNumber];
    }
    
    function convertWord(word) {
      switch(word) {
        case "rock":
          return "'Rock'";
        case "paper":
          return "'Paper'";
        case "scissors":
          return "'Scissors'";
      }
    }
    
    function win(user, comp) {
      userScore++;
      userScore_span.innerHTML = userScore;
      compScore_span.innerHTML = compScore;
      //var smallUserWord = "user".fontsize(3).sub();
      //var smallCompWord = "comp".fontsize(3).sub();
      var userChoice_div = document.getElementById(user);
      result_p.innerHTML       = "User chooses " + convertWord(user) + " and beats Computer as it choosed " +
                                 comp  + ". So, You won. 🔥";
      userChoice_div.classList.add("green-glow");
      setTimeout(function() {userChoice_div.classList.remove("green-glow");}, 800);
    }
    
    function lose(user, comp) {
      compScore++;
      userScore_span.innerHTML = userScore;
      compScore_span.innerHTML = compScore;
      //var smallUserWord = "user".fontsize(3).sub();
      ///var smallCompWord = "comp".fontsize(3).sub();
      var userChoice_div = document.getElementById(user);
      result_p.innerHTML       = "User chooses " + convertWord(user) + " and loses to Computer as it choosed " +
                                 comp + ". So, You lost. 👎"; 
      userChoice_div.classList.add("red-glow");
      setTimeout(function() {userChoice_div.classList.remove("red-glow");}, 800);
    }
    
    function draw(user, comp) {
      //var smallUserWord = "user".fontsize(3).sub();
      //var smallCompWord = "comp".fontsize(3).sub();
      var userChoice_div = document.getElementById(user);
      result_p.innerHTML       = "User chooses " + convertWord(user) + " and draws with Computer as it choosed " +
                                 comp +  ".";
      userChoice_div.classList.add("gray-glow");
      setTimeout(function() {userChoice_div.classList.remove("gray-glow");}, 800);
    }
    
    function game(userChoice) {
      var compChoice = getComputerChoice();
      switch(userChoice + compChoice) {
        case "rock'Scissors'":
        case "paper'Rock'":
        case "scissors'Paper'":
          win(userChoice, compChoice);
          break;
        case "rock'Paper'":
        case "paper'Scissors'":
        case "scissors'Rock'":
          lose(userChoice, compChoice);
          break;
        case "rock,'Rock'":
        case "paper,'Paper'":
        case "scissors,'Scissors'":
          draw(userChoice, compChoice);
          break;
      }
    }
    
    
    
    function main() {
      rock_div.addEventListener("click", function() {
        game("rock");
      });
    
      paper_div.addEventListener("click", function() {
        game("paper");
      });
    
      scissors_div.addEventListener("click", function() {
        game("scissors");
      });
    }
    
    main();
    
    };
    