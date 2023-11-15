"use strict";
class Animal {
    eating() {
        console.log("eating...");
    }
}
class Dog extends Animal {
    bark() {
        console.log("barking...");
    }
}
class Cat extends Animal {
    meow() {
        console.log("meowing...");
    }
}
const cat1 = new Cat();
cat1.eating();
const dog1 = new Dog();
dog1.bark();
//# sourceMappingURL=hierarchicalInheritance.js.map