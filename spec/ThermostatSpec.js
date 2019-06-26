describe('Thermostat', function(){

  var thermostat = new Thermostat

  it('Has an initial temperature of 20', () => {
    expect(thermostat.temperature).toEqual(20);
  });

  it('Temperature can be increased by 1', () => {
    thermostat.upTemp()
    expect(thermostat.temperature).toEqual(21);
  });

});