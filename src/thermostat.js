'use strict';

function Thermostat(){
  this.temperature = 20;
}

Thermostat.prototype.upTemp = function(){
  console.log("I AM IN THE FUNCTION")
  console.log(this.temperature)
  this.temperature += 1
  console.log(this.temperature)
}