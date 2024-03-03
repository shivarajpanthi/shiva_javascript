class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }



    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age}years old`)
    }



}

const shiva = new Person("khem", 30)
const sagar = new Person("shankar", 22)
console.log(shiva.name)
sagar.greet()