class Wizard {
  constructor (object) {
    this.name = object.name;
    this.bearded = true;
    this.isRested = true;
    this.count = 0;
    this.bearded = true;
    if (object.bearded === false) {
      this.bearded = false;
    } 
  }
  incantation(chant){
    return chant.toUpperCase();
  }
  cast() {
    this.count ++;
    if (this.count >= 3) {
      this.isRested = false;
      return 'I SHALL NOT CAST!';
    } else {
      return 'MAGIC BULLET';
    }
  }
}





module.exports = Wizard;