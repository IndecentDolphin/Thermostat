describe('Thermostat', function(){

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat
  })


  it('Has an initial temperature of 20', () => {
    expect(thermostat.temperature).toEqual(20);
  });

  it('Temperature can be increased by 1', () => {
    thermostat.upTemp()
    expect(thermostat.temperature).toEqual(21);
  });

  it('Temperature can be decreased by 1', () => {
    thermostat.downTemp()
    expect(thermostat.temperature).toEqual(19);
  });

  it('Minimum temperature is 10 degrees', () => {
    thermostat.temperature = 10

    expect(function(){thermostat.downTemp()}).toThrow(("Error: Minimum temperature reached"))
  });

  it('Has an initial status of power saving mode: off', () => {
    expect(thermostat.powerSaving).toEqual('Off');
  });

  it('It enforces a max temp of 25 degrees when power saving is on', () => {
    thermostat.switchPowerSaving
    thermostat.temperature = 25
    expect(function(){thermostat.upTemp()}).toThrow(("Error: Maximum temperature reached"))
  });

  it('It enforces a max temp of 32 degrees when power saving is off', () => {
    thermostat.temperature = 32
    expect(function(){thermostat.upTemp()}).toThrow(("Error: Maximum temperature reached"))
  });


});
