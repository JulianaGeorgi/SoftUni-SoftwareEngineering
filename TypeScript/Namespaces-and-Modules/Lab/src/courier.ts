import { Delivery } from "./deliveries";
import FoodAndBeverages = require("./deliveries");

class Courier implements FoodAndBeverages.Delivery {
    protected placesToVisit: { customerName: string; visited: boolean }[] = []; // array of objects

    constructor(placesToVisit: { customerName: string; visited: boolean }[]) {
        this.placesToVisit = placesToVisit;
    }

    newCustomer(customerName: string, visited: boolean = false): string {
        const existingCustomer = this.placesToVisit.find(customer => customer.customerName === customerName);

        if (existingCustomer) {
            throw new Error(`${customerName} is already a customer of yours!`);
        } else {
            this.placesToVisit.push({ customerName, visited });
            return `${customerName} just became your client.`;
        }
    }

    visitCustomer(customerName: string): string {
        const customer = this.placesToVisit.find(cust => cust.customerName === customerName);

        if (!customer) {
            throw new Error(`${customerName} is not your customer.`);
        } else {
            customer.visited = true;
            return `Visited ${customerName}.`;
        }
    }

    showCustomers(): string {
        let customersList = '';
        this.placesToVisit.forEach(customer => {
            const visited = customer.visited ? 'visited' : 'not visited';
            customersList += `${customer.customerName} -> ${visited}\n`;
        });
        return customersList.trim();
    }
}
    

let courier = new Courier([{ customerName: 'DHL', visited: false }]);

courier.newCustomer('Speedy');

courier.newCustomer('MTM');

courier.newCustomer('TipTop');

courier.visitCustomer('DHL');

courier.visitCustomer('MTM');

courier.visitCustomer('MTM');

console.log(courier.showCustomers());