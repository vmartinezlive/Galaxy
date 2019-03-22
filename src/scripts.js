export class GalaxyAge {
  constructor(age){
    this.age = age
  }

  checkEarthAge(age) {
    let inputDob = new Date
    let currentAge = new Date
    age = currentAge - inputDob
  }
  checkMercuryYears(age, gender){
    const mercF = 120 / .24;
    const mercM = 100 / .24;
    const mercuryAge = Math.round(this.age / .24);
    if (gender === "female"){
      const femaleLifeExpectancy = mercF - mercuryAge;
      const merFemaleOutput = (`You are ${mercuryAge} in Mercury. And your have ${femaleLifeExpectancy} more mercury years to live.`);
      return merFemaleOutput;
    }
    else if (gender === "male") {
      const maleLifeExpectancy = mercM - mercuryAge;
      const merMaleOutput = (`You are ${mercuryAge} in Mercury. And your have ${maleLifeExpectancy} more mercury years to live.`);
      return merMaleOutput;
    }
  }

  checkVenusYears(age,gender){
    const venusF = 120 / .62;
    const venusM = 100 / .62;
    const venusAge =  Math.round(this.age / .62);
    if (gender === "female"){
      const femaleLifeExpectancy = venusF - venusAge;
      const venusFemaleOutput = (`You are ${venusAge} in Venus. And your have ${femaleLifeExpectancy} more Venus years to live.`);
      return venusFemaleOutput;
    }
    else if (gender === "male") {
      const maleLifeExpectancy = venusM - venusAge;
      const venusMaleOutput = (`You are ${venusAge} in Venus. And your have ${maleLifeExpectancy} more Venus years to live.`);
      return venusMaleOutput;
    }
  }

  checkMarsYears(age,gender){
    const marsF = 120 / 1.88;
    const marsM = 100 / 1.88;
    const marsAge = Math.round(this.age / 1.88);
    if (gender === "female") {
      const femaleLifeExpectancy = marsF - marsAge;
      const marsFemaleOutput = (`You are ${marsAge} in Mars. And your have ${femaleLifeExpectancy} more Mars years to live.`);
      return marsFemaleOutput;
    }
    else if (gender === "male") {
      const maleLifeExpectancy = marsM - marsAge;
      const marsMaleOutput = (`You are ${marsAge} in Mars. And your have ${maleLifeExpectancy} more Mars years to live.`);
      return marsMaleOutput;
    }
  }

  checkJupiterYears(age,gender){
    const jupiterF = 120 / 11.86;
    const jupiterM = 100 / 11.86;
    const jupiterAge =  Math.round(this.age / 11.86);
    if (gender === "female") {
      const femaleLifeExpectancy = jupiterF - jupiterAge;
      const jupiterFemaleOutput = (`You are ${jupiterAge} in Jupiter. And your have ${femaleLifeExpectancy} more Jupiter years to live.`);
      return jupiterFemaleOutput;
    }
    else if (gender === "male") {
      const maleLifeExpectancy = jupiterM - jupiterAge;
      const jupiterMaleOutput = ("You are " + jupiterAge + "in Jupiter. And your have " + maleLifeExpectancy + "more jupiter years to live.");
      return jupiterMaleOutput;
    }
  }
}
