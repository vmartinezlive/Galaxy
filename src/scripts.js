export class GalaxyAge {
  constructor(age){
    this.age = 0,
    this.gender = {
      "female": 120,
      "male": 100
    };
    }
  }

  checkMercuryYears(age, gender) {
    const mercF = 120 / .24;
    const mercM = 100 / .24;
    const mercuryAge =  age / .24;
    if (gender === "female") {
      const femaleLifeExpectancy = mercF - mercuryAge;
      return femaleLifeExpectency;
    }
    else (gender === "male") {
      const maleLifeExpectancy = mercM - mercuryAge;
      return maleLifeExpectancy;
    }

    if (gender === female) {
      mercuryOutput.push("if you are" + age + "in earth. But, you are " + mercuryAge + ("in Mercury. And your have " femaleLifeExpectancy + "more mercury years to live."));
    }
    else (gender === male) {
      mercuryOutput.push("if you are" + age + "in earth. But, you are " + mercuryAge + ("in Mercury. And your have " maleLifeExpectancy + "more mercury years to live."));
    }
  };

  checkVenusYears(){
    let age = this.age;
    const venusAge = function() { return this.age / .62 };
    let gender = function() {
      if (gender === female) {
        const femaleLifeExpectancy =function() this.gender[female] /.62)
      }
      else (gender === male) {
        const maleLifeExpectancy = function() this.gender[male] /.62)
      }
    };
    let venusOutput [];

    if (gender === female) {
      venusOutput.push("if you are" + age + "in earth. But, you are " + venusAge + ("in Mercury. And your have " femaleLifeExpectancy + "more mercury years to live."));
    }
    else (gender === male) {
      venusOutput.push("if you are" + age + "in earth. But, you are " + venusAge + ("in Mercury. And your have " maleLifeExpectancy + "more mercury years to live."));
    }
  };

  checkMarsYears(){
    let age = this.age;
    const marsAge = function() { return this.age / 1.88 };
    let gender = function() {
      if (gender === female) {
        const femaleLifeExpectancy =function() this.gender[female] /1.88)
      }
      else (gender === male) {
        const maleLifeExpectancy = function() this.gender[male] /1.88)
      }
    }
    let marsOutput [];

    if (gender === female) {
      marsOutput.push("if you are" + age + "in earth. But, you are " + marsAge + ("in Mercury. And your have " femaleLifeExpectancy + "more mercury years to live."));
    }
    else (gender === male) {
      marsOutput.push("if you are" + age + "in earth. But, you are " + marsAge + ("in Mercury. And your have " maleLifeExpectancy + "more mercury years to live."));
    }
  }

  checkJupiterYears(){
    let age = this.age;
    const jupiterAge = function() { return this.age / 11.86 };
    let gender = function() {
      if (gender === female) {
        const femaleLifeExpectancy =function() this.gender[female] /11.86)
      }
      else (gender === male) {
        const maleLifeExpectancy = function() this.gender[male] /11.86)
      }
    }
    let jupiterOutput [];

    if (gender === female) {
      jupiterOutput.push("if you are" + age + "in earth. But, you are " + jupiterAge + ("in Mercury. And your have " femaleLifeExpectancy + "more mercury years to live."));
    }
    else (gender === male) {
      jupiterOutput.push("if you are" + age + "in earth. But, you are " + jupiterAge + ("in Mercury. And your have " maleLifeExpectancy + "more mercury years to live."));
    }
  }
