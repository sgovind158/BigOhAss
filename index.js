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



  
// 3

// Creating one Bike class and inherit by person
class Bike extends Person {
    // #bikeName is private
    #bikeName;
    constructor(person, bikeName) {
      super(person);
      this.#bikeName = bikeName;
    }
  
    // This method print bike name
    printBikeName() {
      console.log(`This is my bike name ${this.#bikeName}`);
    }
  
    //This method print manufacturing details
    manufacturing() {
      console.log("It is used and imported");
    }
  
    //This method print fuel type
    fuel() {
      console.log("It runs on petrol");
    }
  }

  

  // 3

// Creating one Bike class and inherit by person
class Bike extends Person {
    // #bikeName is private
    #bikeName;
    constructor(person, bikeName) {
      super(person);
      this.#bikeName = bikeName;
    }
  
    // This method print bike name
    printBikeName() {
      console.log(`This is my bike name ${this.#bikeName}`);
    }
  
    //This method print manufacturing details
    manufacturing() {
      console.log("It is used and imported");
    }
  
    //This method print fuel type
    fuel() {
      console.log("It runs on petrol");
    }
  }
  