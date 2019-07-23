class Ogre {
  constructor(name, home) {
    this.name = name;
    this.home = home || 'Swamp';
    this.swings = 0;
  }

  encounter(human) {
    human.encounterCounter++;
    if (human.encounterCounter === 3 || human.encounterCounter === 6) {
      this.swings++;
    }
    if (this.swings === 2) {
      human.knockedOut = true;
  }
}

  swingAt() {
    this.swings++;
  }

  apologize(human) {
    human.knockedOut = false;
  }
}







module.exports = Ogre;