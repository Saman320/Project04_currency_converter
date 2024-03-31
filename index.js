#!/usr/bin/env node
import inquirer from "inquirer";
let convert = {
    PKR: {
        USD: 0.0036,
        AED: 0.013,
        GBP: 0.0029,
        CAD: 0.0049,
        PKR: 1,
    },
    USD: {
        AED: 3.67,
        GBP: 0.79,
        CAD: 1.35,
        PKR: 277.58,
        USD: 1,
    },
    GBP: {
        USD: 1.26,
        AED: 4.64,
        CAD: 1.71,
        PKR: 350.73,
        GBP: 1,
    },
    CAD: {
        USD: 0.74,
        AED: 2.71,
        GBP: 0.58,
        PKR: 204.94,
        CAD: 1,
    },
    AED: {
        USD: 0.27,
        GBP: 0.22,
        CAD: 0.37,
        PKR: 75.59,
        AED: 1,
    },
};
const answers = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        choices: ["PKR", "USD", "GBP", "CAD", "AED"],
        message: "Select your currency: "
    },
    {
        type: "list",
        name: "to",
        choices: ["PKR", "USD", "GBP", "CAD", "AED"],
        message: "Select your conversion currency: "
    },
    {
        type: "number",
        name: "amount",
        message: "Enter your conversion amount: ",
    },
]);
const { from, to, amount } = answers;
if (from && to && amount) {
    let result = convert[from][to] * amount;
    console.log(`Your conversion from ${from} to ${to} is ${result}`);
}
else {
    console.log("Invalid Inputs");
}
