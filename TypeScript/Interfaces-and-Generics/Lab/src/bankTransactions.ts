type Transaction = {
    [key: string]: number;
}

class CreateAccount<T, U> {
    bankName: T;
    bankID: U;

    constructor(bankName:T, bankID: U) {
        this.bankName = bankName; 
        this.bankID = bankID;
    }
}

class PersonalAccount extends CreateAccount<string, number> {
    readonly ownerName: string;
    money: number = 0;
    recentTransactions: Transaction = {};

    constructor(bankName: string, bankID: number, ownerName: string) {
        super(bankName, bankID);
        this.ownerName = ownerName;
    }

    deposit(amount: number) {
        this.money+= amount;
    }

    expense(amount:number, expenseType: string){
        if(this.money <= 0){
            return `You cant make ${expenseType} transaction`;
        }

        if(Object.keys(this.recentTransactions).includes(expenseType)){
            this.recentTransactions[expenseType] += amount;
        } else {
            this.recentTransactions[expenseType] = amount;
        }
        
        this.money-= amount;
    }

    showDetails(): string {
        
        const totalMoneySpentOnExpenses = Object.values(this.recentTransactions).reduce((sum, amount) => sum + amount, 0);

        const message = `Bank name: ${this.bankName}\nBank ID: ${this.bankID}\nOwner name: ${this.ownerName}\nMoney: ${this.money}\nMoney spent: ${totalMoneySpentOnExpenses}`;

        return message; 
    }
}

// let account = new PersonalAccount('DSK', 101240,

// 'Ivan Ivanov');

// account.deposit(1000);

// account.deposit(1000);

// account.expense(700, 'Buy new phone');

// account.expense(400, 'Book a vacation');

// account.expense(400, 'Book a vacation');

// account.expense(100, 'Buy food');

// console.log(account.showDetails());



let account2 = new PersonalAccount('Fibank', 100000,'Petar Petrol');

account2.deposit(10000);

account2.deposit(7000);

account2.expense(12000, 'Buy a new car');

account2.expense(200, 'Go to a fancy restaurant');

account2.expense(100, 'Go to a bar');

account2.expense(30, 'Go to the movies');

console.log(account2.showDetails());