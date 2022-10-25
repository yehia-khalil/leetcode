/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function(big, medium, small) {
  this.bigSpace=big;
  this.mediumSpace=medium;
  this.smallSpace=small;
  
  
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
    switch(carType){
      case 1:
        if(this.bigSpace){
          this.bigSpace --;
          return true;
        }
        return false
        break;
      case 2:
        if(this.mediumSpace){
          this.mediumSpace --;
          return true;
        }
        return false;
        break;
      case 3:
        if(this.smallSpace){
          this.smallSpace --;
          return true;
        }
        return false;
        break;
    }
};

/** 
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */