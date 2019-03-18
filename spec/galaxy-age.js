import {GalaxyAge}from "./../src/scripts.js"

describe ("galaxyAge",function() {


  it('should test your age and life exceptancy in Mercury Years',
  function() {
    var checkMeruryYears = new GalaxyAge(19, 79.16, 420.84);
    expect(checkMeruryYears.mercuryAge).toEqual(19, 70.00, 420.84)
});

  it('should test your age and life expectancy in Venus Years',
  function() {
    var checkVenusYears = new GalaxyAge(19, 30.64, 193.55)
    expect(checkVenusYear.venusAge()).toEqual(19, 30.64, 193.55)
  });

  it('should test your age and life expectancy in Mars Year',
  function() {
    var checkMarsYears = new GalaxyAge(19, 10.11, 63.83 )
    expect(checkMarsYear.marsYear()).toEqual(19, 10.11, 63.83 )
  });

  it('should test your age in Jupiter Year',
  function() {
    var checkJupiterYears = new GalaxyAge(19, 1.60, 10.12)
    expect(checkJupiterYear.jupiterYear()).toEqual(19, 1.60, 10.12)
  });

}
