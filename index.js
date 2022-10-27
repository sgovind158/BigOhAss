let { log } = console;

//Creating one common person class
class Person {
  name;

  constructor(name) {
    this.name = name;
  }

  // It is return person name
  get getName() {
    return this.name;
  }
}




// Creating one Car class and inherit by person
class Car extends Person {
    // #carName is private
    #carName;
    constructor(person, carName) {
      super(person);
      this.#carName = carName;
    }
  
    // This method print car name
    printCarName() {
      console.log(`This is my car name ${this.#carName}`);
    }
  
    //This method print manufacturing details
    manufacturing() {
      console.log("It is new and made in india");
    }
  
    //This method print fuel type
    fuel() {
      console.log("It runs on diesel");
    }
  }