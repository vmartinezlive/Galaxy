import { GalaxyAge } from './../src/scripts.js';

describe ('GalaxyAge', function() {
  let userAge;

  beforeEach(function() {
    userAge = new GalaxyAge(19);
  });

  it('should return your age on Earth', function() {
    expect(userAge.age).toEqual(19);
  });

  it('should test your age and life exceptancy in Mercury Years',
  function() {
    expect(userAge.checkMercuryYears(userAge.age, "female")).toEqual("You are 79 in Mercury. And your have 421 more mercury years to live.")
});

  it('should test your age and life expectancy in Venus Years',
  function() {
    expect(userAge.checkVenusYears(userAge.age, "female")).toEqual("You are 31 in Venus. And your have 162.5483870967742 more Venus years to live.")
  });

  it('should test your age and life expectancy in Mars Year',
  function() {
    expect(userAge.checkMarsYears(userAge.age, "female")).toEqual("You are 10 in Mars. And your have 53.829787234042556 more Mars years to live.")
  });

  it('should test your age in Jupiter Year',
  function() {
    expect(userAge.checkJupiterYears(userAge.age, "female")).toEqual("You are 2 in Jupiter. And your have 8.118043844856661 more Jupiter years to live.")
  });

});
