// Create super class Phone and initialize the class properties 

function Phone (theModel, theManufacturer, theImei) { 
  this.model = theModel; 
  this.manufacturer = theManufacturer; 
  this.contacts = {}; 
  this.Imei = theImei; 
} 
/* Overwriting the prototype property with an object literal
and methods definition. This also implements encapsulation */

Phone.prototype = { 
    constructor: Phone, 
     makeCall:function (numberToCall)  { 
         return "You're connected to " + this.numberToCall; 
     },
     receiveCall:function ()  { 
         return "Call received"; 
     }, 
     sendMessage:function (recipientNumber, message) {
        if (this.message == "") {
          return "Please type a message";
        }
        else {
          return "Message sent";
        }
     },
     displayMessage:function (senderNumber, message) {
       return ("Message from " + this.senderNumber + " " + this.message);
     },
     addContact:function (firstName, lastName, number) {
       this.contacts.this.firstName = this.number;
       return viewContacts();
     },
     deleteContact:function (firstName) {
       delete this.contacts.this.firstName;
       return viewContacts();
     },
     viewContacts:function () {
       return this.contacts;
     }
} 

// Implementing Inheritance. SmartPhone class inherits from Phone super class
function SmartPhone(theModel, theManufacturer, theImei) {
  Phone.call(this, theModel, theManufacturer, theImei);
};

inheritPrototype(SmartPhone, Phone);

SmartPhone.prototype.sendMessage = function (emailAddress) { // Method overriding. sendMessage overrides the sendMessage method from the Phone class
  if (this.emailAddress) {                // and polymorphism. sendMessage can send both emails and SMS
  return "Your mail has been sent to " + this.emailAddress;
  }
  else{
    this.sendMessage();
  }
  

}
module.exports = phone;