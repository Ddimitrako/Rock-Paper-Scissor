function game() {  
  const playBtn = document.querySelector('.intro button');
  const introScreen = document.querySelector('.intro');
  const match = document.querySelector('.match');
  //start Game 
  playBtn.addEventListener('click', () => {
    introScreen.classList.add("fadeOut");
    match.classList.add("fadeIn");
  });

};
//Play the game
const playGame = () => {  
  const options = document.querySelector(".options button");
  const computerHand = document.querySelector(".computer-hand");
  const playerHand = document.querySelector(".player-hand");
  const rock = document.querySelector(".rock");
  const paper = document.querySelector(".paper");
  const scissor = document.querySelector(".scissors");
  const winner = document.querySelector(".winner");
  //const scissor= document.querySelector(".options")

  const computerOptions = ['rock', 'paper', 'scissors'];
  //loop through each option
  rock.addEventListener('click', () => {
    const computerNumber = Math.floor(Math.random() * 3);
    const computerChoice = computerOptions[computerNumber];
    const playerChoice = 'rock';
    compareHands(playerChoice, computerChoice);
    playerHand.src = './assets/rock.png';
    let src = './assets/computerChoice.png';
    src = src.replace("computerChoice", computerChoice);
    computerHand.src = src;
    console.log(playerChoice, computerChoice);
  });

  paper.addEventListener('click', () => {
    const computerNumber = Math.floor(Math.random() * 3);
    const computerChoice = computerOptions[computerNumber];
    const playerChoice = 'paper';
    compareHands(playerChoice, computerChoice);
    playerHand.src = './assets/paper.png';
    let src = './assets/computerChoice.png';
    src = src.replace("computerChoice", computerChoice);
    computerHand.src = src;
    console.log(playerChoice, computerChoice);
  });
  scissor.addEventListener('click', () => {
    const computerNumber = Math.floor(Math.random() * 3);
    const computerChoice = computerOptions[computerNumber];
    const playerChoice = 'scissors';
    playerHand.src = './assets/scissors.png';
    compareHands(playerChoice, computerChoice);
    let src = './assets/computerChoice.png';
    src = src.replace("computerChoice", computerChoice);
    computerHand.src = src;
    console.log(playerChoice, computerChoice);
  });
  //Comparing Function
  let playerScore = 0;
  let computerScore = 0;
  const compareHands = (playerChoice, computerChoice) => {
    const playerScoreValue = document.querySelector(".player-score p");
    const computerScoreValue = document.querySelector(".computer-score p");
    
    if (playerChoice === computerChoice) {
      winner.textContent = 'It is a tie';
      return;
    }
    //Check for Rock
    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "Player Wins";
        playerScore++;        
        playerScoreValue.textContent=playerScore;
        return;
      } else {
        winner.textContent = "Computer Wins";
        computerScore++;
        computerScoreValue.textContent=computerScore;
        return;
      }
    }
    //Check for Paper
    if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        winner.textContent = "Computer Wins";
        computerScore++;
        computerScoreValue.textContent=computerScore;
        return;
      } else {
        winner.textContent = "Player Wins";
        playerScore++;
        playerScoreValue.textContent=playerScore;
        return;
      }
    }
    //Check for Scissors
    if (playerChoice === "scissors") {
      if (computerChoice === "rock") {
        winner.textContent = "Computer Wins";
        computerScore++;
        computerScoreValue.textContent=computerScore;
        return;
      } else {
        winner.textContent = "Player Wins";
        playerScore++;
        playerScoreValue.textContent=playerScore;
        return;
      }
    }
  }

};
game();
playGame();
