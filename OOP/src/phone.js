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
         return "You're connected to " + numberToCall; 
     },
     receiveCall:function ()  { 
         return "Call received"; 
     }, 
     sendMessage:function (recipientNumber, message) {
        if (message == "") {
          return "Please type a message";
        }
        else {
          return "Message sent";
        }
     },
     displayMessage:function (senderNumber, message) {
       return ("Message from " + senderNumber + " " + message);
     },
     addContact:function (firstName, lastName, number) {
       this.contacts.firstName = number;
       return firstName + " added to contacts";
     },
     deleteContact:function (firstName, lastName) {
       delete this.contacts.firstName;
       return firstName + " deleted from contacts";
     },
     viewContacts:function () {
       return "These are your contacts";
     }
} 



module.exports = Phone;