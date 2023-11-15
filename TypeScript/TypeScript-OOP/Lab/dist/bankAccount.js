"use strict";
class BankAccount {
    constructor() {
        this.accountId = BankAccount.accountIdCounter++;
        this.balance = 0;
    }
    static setInterestRate(interestRate) {
        BankAccount.interestRate = interestRate;
    }
    static getInterestRate(interestYears, balance) {
        return BankAccount.interestRate * interestYears * balance;
    }
    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited ${amount} to ID${this.accountId}`);
    }
    getAccountId() {
        return this.accountId;
    }
    getBalance() {
        return this.balance;
    }
}
BankAccount.accountIdCounter = 1;
BankAccount.interestRate = 0.02;
function executeCommands(commands) {
    const accounts = [];
    for (const command of commands) {
        const tokens = command.split(" ");
        const action = tokens[0];
        switch (action) {
            case "Create":
                const account = new BankAccount();
                accounts.push(account);
                console.log(`Account ID${account.getAccountId()} created`);
                break;
            case "Deposit":
                const accountId = Number(tokens[1]);
                const amount = Number(tokens[2]);
                const depositAccount = accounts.find(acc => acc.getAccountId() === accountId);
                if (depositAccount) {
                    depositAccount.deposit(amount);
                }
                else {
                    console.log(`Account does not exist`);
                }
                break;
            case "SetInterest":
                const newInterestRate = Number(tokens[1]);
                BankAccount.setInterestRate(newInterestRate);
                break;
            case "GetInterest":
                const interestAccountId = Number(tokens[1]);
                const interestYears = Number(tokens[2]);
                const interestAccount = accounts.find(acc => acc.getAccountId() === interestAccountId);
                if (interestAccount) {
                    const interest = BankAccount.getInterestRate(interestYears, interestAccount.getBalance());
                    console.log(`${interest.toFixed(2)}`);
                }
                else {
                    console.log(`Account does not exist`);
                }
                break;
            case "End":
                // End of commands
                break;
            default:
                console.log("Invalid command");
                break;
        }
    }
}
// const commands1 = ["Create", "Deposit 1 20", "GetInterest 1 10", "End"];
// executeCommands(commands1);
const commands2 = ["Create", "Create", "Deposit 1 20", "Deposit 3 20", "Deposit 2 10", "SetInterest 1.5", "GetInterest 1 1", "GetInterest 2 1", "GetInterest 3 1", "End"];
executeCommands(commands2);
//# sourceMappingURL=bankAccount.js.map