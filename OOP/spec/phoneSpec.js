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
  });  