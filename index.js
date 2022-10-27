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
