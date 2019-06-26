'use strict';

const MINIMUM_TEMP = 10;
const POWER_SAVE_MAX_TEMP = 25;
const MAX_TEMP = 32;

function Thermostat(){
  this.temperature = 20;
  this.powerSaving = 'Off';
}

Thermostat.prototype.upTemp = function(){
  if (this.temperature === POWER_SAVE_MAX_TEMP){
    this.maximumLimitError();
  }
  else if (this.temperature === MAX_TEMP){
    this.maximumLimitError();
  }
  else {
   this.temperature += 1
  }
 }

Thermostat.prototype.downTemp = function(){
  if (this.temperature === MINIMUM_TEMP){
    this.minimumLimitError();
  }
  else {
    this.temperature -= 1
  }
}

Thermostat.prototype.minimumLimitError = function(){
  throw "Error: Minimum temperature reached";
}

Thermostat.prototype.maximumLimitError = function(){
  throw "Error: Maximum temperature reached";
}
