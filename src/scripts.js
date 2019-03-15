export class GalaxyAge {
  constructor(age){
    this.age = age;
  }

  checkMercuryYears(){
    let age = this.age;
    const marcuryAge = function() { return this.age / .24 }
    }

  checkVenusYears(){
    let age = this.age;
    const venusAge = function() { return this.age / .62 }
    }

  checkMarsYears(){
    let age = this.age;
    const marsAge = function() { return this.age / 1.88 }
    }

  checkJupiterYears(){
    let age = this.age;
    const jupiterAge = function() { return this.age / 1.88 }
    }

}

export class lifeExpectancy {
  constructor(life){
    this.life = life;
    this.woman = woman(120);
    this.man = man(100);

checkExpectancyMercury(){
  let woman = this.woman
  const fullLifeMercury = function() {return (this.woman / .24);
  const expectancyMercury = function() {return fullLifeMercury - mercuryAge}
}


}
