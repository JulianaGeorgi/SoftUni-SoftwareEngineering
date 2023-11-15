class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getDetails(): void {
        console.log(`${this.name} is ${this.age} years old.`)
    }
}

const person1 = new Person("Peter", 10);
person1.getDetails();

const person2 = new Person("Sofia", 15);
person2.getDetails();