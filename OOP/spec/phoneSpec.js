let Phone = require ('../src/phone');


  'use strict';
  describe("Phone class test", function() {
    describe("Objects should be of the class", function(){

    it("should be a type of `object`", function() {
      var phone1 = new Phone();
      expect(typeof phone1).toEqual(typeof {});
    });
    
    it("should be an instance of the Phone class, function", function() {
      var phone1 = new Phone();
      expect(phone1 instanceof Phone).toBeTruthy();
    });

    it("should have an model, manufacturer, and IMEI that is a type of phone, ", function() {
      var tecno  = new Phone('P5', 'Tecno', 1609898888);
      expect(tecno.model).toBe('P5');
      expect(tecno.manufacturer).toBe('Tecno');
      expect(tecno.Imei).toBe(1609898888);
    });
    });
    describe("Methods should perform some functions when called", function() {
      it("should return You're connected to '80598143143' when that number is called", function(){
        var nokia = new Phone('3310', 'Nokia', 1323989728);
        expect(nokia.makeCall(08059814314)).toBe("You're connected to 8059814314");
      });
      it("should return Call received when recieveCall is called", function(){
        var nokia = new Phone('3310', 'Nokia', 1323989728);
        expect(nokia.receiveCall()).toBe("Call received");
      });
      it("should return 'Please type a message' for an empty message", function(){
        var nokia = new Phone('3310', 'Nokia', 1323989728);
        expect(nokia.sendMessage(8059814314, "")).toBe("Please type a message");
      });
      it("should return 'Message sent' when a message and a number is passed", function(){
        var nokia = new Phone('3310', 'Nokia', 1323989728);
        expect(nokia.sendMessage(8059814314, "I'm an Andela Cycle XXI Fellow")).toBe("Message sent");
      });
      it("should return 'Message from (646)-726-4003 Welcome to Andela, Baasbank", function(){
        var nokia = new Phone('3310', 'Nokia', 1323989728);
        expect(nokia.displayMessage(6467264003, "Welcome to Andela, Baasbank")).toBe("Message from 6467264003 Welcome to Andela, Baasbank");
      });
      
      it("should return all contacts when viewed", function(){
        var nokia = new Phone('3310', 'Nokia', 1323989728);
        expect(nokia.viewContacts()).toBe("These are your contacts");
      });
    });

    });
 