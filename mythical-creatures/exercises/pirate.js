class Pirate {
  constructor (name, job) {
    this.name = name;
    this.job = job || 'Scallywag';
    this.cursed = false;
    this.cursedCount = 0;
    this.booty = 0;
  }
  commitHeinousAct() {
    this.cursedCount++;
    if (this.cursedCount === 3) {
      this.cursed = true;
    }
  }
  robShip() {
    this.booty = 100;
    return 'YAARRR!';
  }
}





module.exports = Pirate;