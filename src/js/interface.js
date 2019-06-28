
$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();


$('#temp-up').on('click', function() { 
  thermostat.upTemp(); 
  updateTemperature(); 
})

$('#temp-down').click(function() { 
  thermostat.downTemp();
  updateTemperature();
})

$('#temp-reset').click(function() {
  thermostat.reset();
  updateTemperature();
});

$('#psm-on').click(function() {
  thermostat.powerSavingOn();
  $('#power-saving').text('ON')
})

$('#psm-off').click(function() {
  thermostat.powerSavingOff();
  $('#power-saving').text('OFF')
})

function updateTemperature() {
  $('#temp').text(thermostat.temperature);
  $('#temp').attr('class', thermostat.energyUsage());
}
})