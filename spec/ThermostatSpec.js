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

  it('Has an initial status of power saving mode: on', () => {
    expect(thermostat.powerSaving).toEqual('On');
  });

  xit('It enforces a max temp of 25 degrees when power saving is on', () => {
    thermostat.switchPowerSaving
    thermostat.temperature = 25
    expect(function(){thermostat.upTemp()}).toThrow(("Error: Maximum temperature reached"))
  });

  xit('It enforces a max temp of 32 degrees when power saving is off', () => {
    thermostat.temperature = 32
    expect(function(){thermostat.upTemp()}).toThrow(("Error: Maximum temperature reached"))
  });

  it('Has a reset function which sets temperature to 20', () => {
    thermostat.temperature = 25
    thermostat.reset()
    expect(thermostat.temperature).toEqual(20);
  });
 
  it('it has low-usage when temp is < 18', () => {
    thermostat.temperature = 17
    thermostat.calculateEnergyUsage()
    expect(thermostat.energyUsage).toEqual("low-usage")
  });

  it('it has medium-usage when temp is < 25', () => {
    thermostat.temperature = 24
    thermostat.calculateEnergyUsage()
    expect(thermostat.energyUsage).toEqual("medium-usage")
  });

  it('it has high-usage when temp is > 25', () => {
    thermostat.temperature = 26
    thermostat.calculateEnergyUsage()
    expect(thermostat.energyUsage).toEqual("high-usage")
  });
});
