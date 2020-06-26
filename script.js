 window.onload = function() {

    var userScore = 0;
    var compScore = 0;
    var userScore_span = document.querySelector("#user-score");
    var compScore_span = document.querySelector("#comp-score");
    
    var result_p       = document.querySelector(".result > p");
    var rock_div       = document.querySelector("#rock");
    var paper_div      = document.querySelector("#paper");
    var scissors_div   = document.querySelector("#scissors");

    let highScore      = 0  
    var highScore_span = document.querySelector('#high-score')
    var reset_score    = document.querySelector('#reset_id')
    
    
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

      highScore_span.innerHTML = highScore;
      if(userScore > highScore){
        high_Score()
      }
      highScore_span.innerHTML = highScore;


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
      
      var userChoice_div = document.getElementById(user);
      result_p.innerHTML       = "User chooses " + convertWord(user) + " and loses to Computer as it choosed " +
                                 comp + ". So, You lost. 👎"; 
      userChoice_div.classList.add("red-glow");
      setTimeout(function() {userChoice_div.classList.remove("red-glow");}, 800);
    }
    
    function draw(user, comp) {
     
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

    function high_Score(){
      let temp = userScore;
      highScore = userScore;

    }

    function scorezero() {
      compScore = 0;
      userScore = 0;
      userScore_span.innerHTML = 0;
      compScore_span.innerHTML = 0;
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

      reset_score.addEventListener("click", function() {
        scorezero();
      });
    }

    
    main();
    
    };
    