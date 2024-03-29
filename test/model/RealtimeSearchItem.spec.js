/**
 * Aliseeks API
 * AliExpress product searching and product details retrieval API. 
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 3.3.4
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.AliseeksApi);
  }
}(this, function(expect, AliseeksApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new AliseeksApi.RealtimeSearchItem();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('RealtimeSearchItem', function() {
    it('should create an instance of RealtimeSearchItem', function() {
      // uncomment below and update the code to test RealtimeSearchItem
      //var instance = new AliseeksApi.RealtimeSearchItem();
      //expect(instance).to.be.a(AliseeksApi.RealtimeSearchItem);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new AliseeksApi.RealtimeSearchItem();
      //expect(instance).to.be();
    });

    it('should have the property imageUrl (base name: "imageUrl")', function() {
      // uncomment below and update the code to test the property imageUrl
      //var instance = new AliseeksApi.RealtimeSearchItem();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instance = new AliseeksApi.RealtimeSearchItem();
      //expect(instance).to.be();
    });

    it('should have the property ratings (base name: "ratings")', function() {
      // uncomment below and update the code to test the property ratings
      //var instance = new AliseeksApi.RealtimeSearchItem();
      //expect(instance).to.be();
    });

    it('should have the property orders (base name: "orders")', function() {
      // uncomment below and update the code to test the property orders
      //var instance = new AliseeksApi.RealtimeSearchItem();
      //expect(instance).to.be();
    });

    it('should have the property freight (base name: "freight")', function() {
      // uncomment below and update the code to test the property freight
      //var instance = new AliseeksApi.RealtimeSearchItem();
      //expect(instance).to.be();
    });

    it('should have the property priceOptions (base name: "priceOptions")', function() {
      // uncomment below and update the code to test the property priceOptions
      //var instance = new AliseeksApi.RealtimeSearchItem();
      //expect(instance).to.be();
    });

  });

}));
