/**
 * Created by synus on 24/11/17.
 */
export class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    get display() {
        return `${this.name} is ${this.age} years old.`;
    }
}
