'use strict';

function Thermostat(){
  this.temperature = 20;
  this.powerSaving = true;
  this.MINIMUM_TEMP = 10;
  this.MAX_LIMIT_PSM_ON = 25;
  this.MAX_LIMIT_PSM_OFF = 32;
  this.MEDIUM_ENERGY_USAGE_LIMIT = 18;
}

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
}

Thermostat.prototype.isMinimumTemperature = function(){
  return this.temperature === this.MINIMUM_TEMP;
}

Thermostat.prototype.isMaximumTemperature = function(){
  if(this.isPowersavingModeOn() === false) {
    return this.temperature === this.MAX_LIMIT_PSM_OFF;
  }
  return this.temperature === this.MAX_LIMIT_PSM_ON;
}

Thermostat.prototype.upTemp = function(){
  if (this.isMaximumTemperature()){
    return;
  }
   this.temperature += 1
 }

Thermostat.prototype.downTemp = function(){
  if (this.isMinimumTemperature()){
    return;
  }
    this.temperature -= 1
}

Thermostat.prototype.reset = function(){
  this.temperature = 20;
}

Thermostat.prototype.powerSavingOn = function(){
  this.powerSaving = true;
  }

Thermostat.prototype.powerSavingOff = function(){
  this.powerSaving = false;
}

Thermostat.prototype.isPowersavingModeOn = function(){
  return this.powerSaving === true;
}

Thermostat.prototype.energyUsage = function(){
  if (this.temperature < this.MEDIUM_ENERGY_USAGE_LIMIT) {
    return 'low-usage';
  }
  else if (this.temperature >= this.MEDIUM_ENERGY_USAGE_LIMIT && this.temperature <= this.MAX_LIMIT_PSM_ON){
    return'medium-usage';
  }
    return 'high-usage';
}
