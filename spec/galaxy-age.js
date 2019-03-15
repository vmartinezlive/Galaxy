import {GalaxyAge}from "./../src/scripts.js"

describe ("galaxyAge",function() {

  it('should test your age in Mercury Years',
function() {
    var checkMeruryYears = new GalaxyAge(79.16, 100);
    expect(checkMeruryYears.mercuryAge).toEqual(true)
});

  it('should test your age in Venus Years',
  function() {
  expect(checkVenusYear.venusAge()).toEqual(30.64)
  });

  it('should test your age in Mars Year',
  function() {
  expect(checkYear.leapYear()).toEqual(30.64)
  });

  it('should test average lifespan in Mercury Year',
  function() {
  expect(checkYear.leapYear()).toEqual(10.1)
  });

  it('should test average lifespan in Venus Year',
  function() {
  expect(checkYear.leapYear()).toEqual(1.6)
  });

  it('should test average lifespan in Mars Year',
  function() {
  expect(checkYear.leapYear()).toEqual(true)
  });
}
