#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 50000;
let myPin = 54321;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Please enter your pin",
        type: "number",
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("correct pin code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "rawlist",
            choices: ["withdraw", "check balance"]
        }
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "How much would you like to transfer?",
                type: "number",
            }
        ]);
        myBalance -= amountAns.amount;
        console.log(`your remaining balance is: ${myBalance}`);
    }
    else if (operationAns.operation === "check balance") {
        console.log(`your balance is: ${myBalance}`);
    }
}
else {
    console.log(" Sorry! Incorrect pin number");
}
