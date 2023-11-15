class Animal {
    eating(): void {
        console.log("eating...");
    }
}

class Dog extends Animal {
    bark(): void {
        console.log("barking...");
    }
}

class Cat extends Animal {
    meow(): void {
        console.log("meowing...")
    }
}

const cat1 = new Cat();
cat1.eating();

const dog1 = new Dog(); 
dog1.bark();