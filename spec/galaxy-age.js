import {GalaxyAge}from "./../src/scripts.js"

describe ("galaxyAge",function() {


  it('should test your age in Mercury Years',
function() {
    var checkMeruryYears = new GalaxyAge(19, 79.16, 420.84);
    expect(checkMeruryYears.mercuryAge).toEqual(19, 70.00, 420.84)
});



  // it('should test your age in Venus Years',
  // function() {
  //   var checkVenusYears = new GalaxyAge(30.64)
  //   expect(checkVenusYear.venusAge()).toEqual(30.64)
  // });
  //
  // it('should test your age in Mars Year',
  // function() {
  //   var checkMarsYears = new GalaxyAge(10.11)
  //   expect(checkMarsYear.marsYear()).toEqual(10.11)
  // });
  //
  // it('should test your age in Jupiter Year',
  // function() {
  //   var checkJupiterYears = new GalaxyAge(10.11)
  //   expect(checkJupiterYear.jupiterYear()).toEqual(true)
  // });
  //
  // it('should test average lifespan in Mercury Year',
  // function() {
  // expect(checkYear.leapYear()).toEqual(10.1)
  // });
  //
  // it('should test average lifespan in Venus Year',
  // function() {
  // expect(checkYear.leapYear()).toEqual(1.6)
  // });
  //
  // it('should test average lifespan in Mars Year',
  // function() {
  // expect(checkYear.leapYear()).toEqual(true)
  // });
}
