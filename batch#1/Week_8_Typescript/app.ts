class Student {
  public fullName: string | undefined;
  constructor(
    public firstName: string,
    public lastName: string,
    public age: number
  ) {
    this.fullName = firstName + " " + lastName;
    console.log(age);
  }
}

const kumar = new Student("Lakku", "Kumar", 89);
console.log(kumar.age);
