function Phone (theModel, theManufacturer, theImei) { 
  this.model = theModel; 
  this.manufacturer = theManufacturer; 
  this.contacts = {}; 
  this.Imei = theImei; 
} 
Phone.prototype = { 
    constructor: Phone, 
     makeCall:function (numberToCall)  { 
         return "You're connected to " + this.numberToCall; 
     },
}