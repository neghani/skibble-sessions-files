"use strict";
class Student {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.fullName = firstName + " " + lastName;
        console.log(age);
    }
}
const kumar = new Student("Lakku", "Kumar", 89);
console.log(kumar.age);
//# sourceMappingURL=app.js.map