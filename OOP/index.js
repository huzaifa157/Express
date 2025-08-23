// -------------------- Parent Class --------------------
class Human {
  // constructor is used to initialize object properties
  constructor(name, age) {
    this.name = name;   // property 'name'
    this.age = age;     // property 'age'
  }

  // Parent method
  speak() {
    console.log("I can speak ");
  }

  // Parent method
  eat() {
    console.log("eating");
  }
}

// -------------------- Child Class --------------------
class Man extends Human {   // 'Man' is a subclass of 'Human'
  
  // constructor of child class
  constructor(name, age, beard, father) {
    // super(...) calls parent constructor (Human)
    // This avoids writing this.name = name; this.age = age again
    super(name, age);

    // new properties added in child class
    this.beard = beard;
    this.father = father;
  }

  // Overriding parent method 'speak'
  speak() {
    console.log("hi I am male");
    // Here we are not using super.speak(), 
    // so only the child's speak() runs
  }

  // Overriding parent method 'eat'
  eat() {
    // Calling parent version of eat() using super
    // Without super.eat() → it would only run child's code
    super.eat();
    // we could also add more code here if we wanted
    // e.g. console.log("also eating like a man");
  }
}

// -------------------- Object Creation --------------------
const Hassan = new Man("Hassan", 16, "yes", "in future");

// Calls child's overridden method 'speak'
Hassan.speak();   // Output: hi I am male

// Calls child's overridden 'eat', 
// which internally also calls parent's eat()
Hassan.eat();     // Output: eating

// Logs the object with all its properties
console.log(Hassan);
/*
Output:
Man {
  name: 'Hassan',
  age: 16,
  beard: 'yes',
  father: 'in future'
}
*/

