/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function(big, medium, small) {
  this.bigSpace=big;
  this.mediumSpace=medium;
  this.smallSpace=small;
  this.parking={
    1:this.bigSpace,
    2:this.mediumSpace,
    3:this.smallSpace
  }
  
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
  if(this.parking[carType]){
    this.parking[carType]--;
    return true;
  }
  return false;
};

/** 
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */