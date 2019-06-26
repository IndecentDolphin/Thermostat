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
    // for ( let i = 1; i <= 10; i++){
    //   thermostat.downTemp
    // }
    thermostat.temperature = 10
    
    expect(function(){thermostat.downTemp()}).toThrow(("Error: Minimum temperature reached"))
  });
});