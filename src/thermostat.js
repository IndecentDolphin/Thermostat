'use strict';

const MINIMUM_TEMP = 10;

function Thermostat(){
  this.temperature = 20;
}

Thermostat.prototype.upTemp = function(){
  this.temperature += 1
}

Thermostat.prototype.downTemp = function(){
  console.log("Temperature into the downtemp: " + this.temperature)
  if (this.temperature === MINIMUM_TEMP){
    console.log("about to throw an error")
    this.minimumLimitError();
  }
  else {
    console.log("whoops i made it through")
    this.temperature -= 1
  }
}

Thermostat.prototype.minimumLimitError = function(){
  throw "Error: Minimum temperature reached";
}