#!/usr/bin/env node
import inquirer from "inquirer";
console.log("Welcome to saaa-cli number guessing game");
const randomNumber= Math.floor(Math.random()*6 +1);
const answer =await inquirer.prompt([
    {name:"UserGuessedNumber",type:"number",message:"Enter your guess number between 1-6:",},]);
    if(answer.UserGuessedNumber === randomNumber) {
        console.log("Congrats you got it right");
    }else{
        console.log("Sorry you got it wrong number");
    }