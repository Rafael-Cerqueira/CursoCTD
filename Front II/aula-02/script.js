let user = 0;
let computador = 0;
let rodada = 1;

function playRound(userSelection, pcSelection) {
  if (userSelection === pcSelection) {
    return "Empate!";
  } else if (
    (userSelection === "pedra" && pcSelection === "tesoura") ||
    (userSelection === "papel" && pcSelection === "pedra") ||
    (userSelection === "tesoura" && pcSelection === "papel")
  ) {
    user++;
    return `Você ganhou a rodada ${rodada}! ${userSelection} vence ${pcSelection}.`;
  } else {
    computador++;
    return `Você perdeu a rodada ${rodada}! ${pcSelection} vence ${userSelection}.`;
  }
}

function game() {
  while (user < 2 && computador < 2) {
    let userSelection = prompt("Escolha pedra, papel ou tesoura:").toLowerCase();
    let choices = ["pedra", "papel", "tesoura"];
    let pcSelection = choices[Math.floor(Math.random() * 3)];

    console.log(playRound(userSelection, pcSelection));
    rodada++;
  }

  if (user > computador) {
    console.log(`Você ganhou o jogo! Placar final: Você ${user}, Computador ${computador}.`);
  } else {
    console.log(`Você perdeu o jogo! Placar final: Computador ${computador}, Você ${user}.`);
  }
}

game();
