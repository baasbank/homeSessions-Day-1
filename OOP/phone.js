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