import {GalaxyAge}from "./scripts.js"

describe ("galaxyAge",function() {

  
  it('should return your age on Earth', function(){
    expect(earthAge("01,10,2000")).toEqual(19)
  });

  it('should test your age and life exceptancy in Mercury Years',
  function() {
    var checkMeruryYears = new GalaxyAge(19, "female")
    expect(checkMeruryYears.mercuryAge).toEqual(25, "female")
});

//   it('should test your age and life expectancy in Venus Years',
//   function() {
//     var checkVenusYears = new GalaxyAge(19,"female")
//     expect(checkVenusYear.venusAge()).toEqual(19,"female")
//   });
//
//   it('should test your age and life expectancy in Mars Year',
//   function() {
//     var checkMarsYears = new GalaxyAge(19,"female" )
//     expect(checkMarsYear.marsYear()).toEqual(19,"female" )
//   });
//
//   it('should test your age in Jupiter Year',
//   function() {
//     var checkJupiterYears = new GalaxyAge(19,"female")
//     expect(checkJupiterYear.jupiterYear()).toEqual(19,"female")
//   });

}
