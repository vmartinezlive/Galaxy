export class GalaxyAge {
  constructor(age, life){
    this.age = age;
    this.life = life(100);
  }

  checkMercuryYears(){
    let age = this.age;
    const marcuryAge = function() { return this.age / .24 }
    }

  checkVenusYears(){
    let age = this.age;
    const venusAge = function() { return this.age / .62 }
    }

  checkVenusYears(){
    let age = this.age;
    const marsAge = function() { return this.age / 1.88 }
    }

}
