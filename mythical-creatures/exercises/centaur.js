class Centaur {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
    this.count = 0;
  }
  shoot() {
    this.count++;
    this.updateCranky();
    if (this.cranky === true || this.layingDown === true) {
      return 'NO!';
    }
    return 'Twang!!!';
  }
  run() {
    this.count++;
    this.updateCranky();
    if (this.layingDown === true) {
      return 'NO!';
    }
    return 'Clop clop clop clop!!!';
  }
  updateCranky() {
    if (this.count === 3) {
      this.cranky = true;
    }
  }
  sleep() {
    if (this.standing === true) {
      return 'NO!';
    } else if (this.layingDown === true) {
      this.cranky = false;
      return 'ZZZZ';
    }
  }
  layDown() {
    this.standing = false;
    this.layingDown = true;
  }
  standUp() {
    this.standing = true;
    this.layingDown = false;
  }
  drinkPotion() {
    if (this.standing === true) {
     this.cranky = !this.cranky;
    } else {
      return 'Not while I\'m laying down!';
    }
  }
}





module.exports = Centaur