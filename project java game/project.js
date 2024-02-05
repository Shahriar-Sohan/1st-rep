//deposit some money
//determine number of lines to bet on
//collect a bet amount
//spin the slot machine
//check if thwe user won
//give the user their price
//play again

const prompt = require("prompt-sync")();


const rows = 3;
const cols = 3;

const symbolsCount = {
    "A": 2,
    "B": 4,
    "C": 6,
    "D": 8
}
const symbolValues = {
    "A": 5,
    "B": 4,
    "C": 3,
    "D": 2
}






const deposit = () => {
    while(true) {
        const depositAmount = prompt("Enter a deposit amount: ");
        const numberDepositAmount = parseFloat(depositAmount);
    
        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0 ) {
            console.log("Invalid deposit amount, try again.")
        } else {
            return numberDepositAmount; }
      }
};

const getNumberOfLines = () => {
    while(true) {
        const lines = prompt("Enter the number of lines to bet on(1-3): ");
        const numberOfLines = parseFloat(lines);
    
        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3 ) {
            console.log("Invalid number of lines, try again.")
        } else {
            return numberOfLines; }
      }
};

const getBet = (balance, lines) => {
    while(true) {
        const bet = prompt("Enter the bet per line: ");
        const numberBet = parseFloat(bet);
    
        if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines) {
            console.log("Invalid bet, try again.")
        } else {
            return numberBet; }
      }
};

const spin = () => {
    const symbol = [];
    for (const [symbol, count] of Object.entries(symbolsCount)) {
        
    }
}




let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance);