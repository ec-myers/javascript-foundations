class Hobbit {
  constructor(name) {
    this.name = name;
    this.disposition = 'homebody';
    this.age = 0;
    this.isShort = true;
    this.old = false;
    this.hasRing = false;
    if (this.name === 'Frodo') {
      this.hasRing = true;
    }
  }
  celebrateBirthday() {
    this.age++;
    if (this.age <= 32) {
      this.adult = false;
    }
    if (this.age>= 33) {
      this.adult = true;
    }
    if (this.age >= 101) {
      this.old = true;
    }
  }
}





module.exports = Hobbit