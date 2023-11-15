"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getDetails() {
        console.log(`${this.name} is ${this.age} years old.`);
    }
}
const person1 = new Person("Peter", 10);
person1.getDetails();
const person2 = new Person("Sofia", 15);
person2.getDetails();
//# sourceMappingURL=opinionPoll.js.map