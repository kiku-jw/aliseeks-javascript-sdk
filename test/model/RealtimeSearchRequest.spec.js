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
    instance = new AliseeksApi.RealtimeSearchRequest();
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

  describe('RealtimeSearchRequest', function() {
    it('should create an instance of RealtimeSearchRequest', function() {
      // uncomment below and update the code to test RealtimeSearchRequest
      //var instance = new AliseeksApi.RealtimeSearchRequest();
      //expect(instance).to.be.a(AliseeksApi.RealtimeSearchRequest);
    });

    it('should have the property category (base name: "category")', function() {
      // uncomment below and update the code to test the property category
      //var instance = new AliseeksApi.RealtimeSearchRequest();
      //expect(instance).to.be();
    });

    it('should have the property text (base name: "text")', function() {
      // uncomment below and update the code to test the property text
      //var instance = new AliseeksApi.RealtimeSearchRequest();
      //expect(instance).to.be();
    });

    it('should have the property priceRange (base name: "priceRange")', function() {
      // uncomment below and update the code to test the property priceRange
      //var instance = new AliseeksApi.RealtimeSearchRequest();
      //expect(instance).to.be();
    });

    it('should have the property shipToCountry (base name: "shipToCountry")', function() {
      // uncomment below and update the code to test the property shipToCountry
      //var instance = new AliseeksApi.RealtimeSearchRequest();
      //expect(instance).to.be();
    });

    it('should have the property shipFromCountry (base name: "shipFromCountry")', function() {
      // uncomment below and update the code to test the property shipFromCountry
      //var instance = new AliseeksApi.RealtimeSearchRequest();
      //expect(instance).to.be();
    });

    it('should have the property sort (base name: "sort")', function() {
      // uncomment below and update the code to test the property sort
      //var instance = new AliseeksApi.RealtimeSearchRequest();
      //expect(instance).to.be();
    });

    it('should have the property skip (base name: "skip")', function() {
      // uncomment below and update the code to test the property skip
      //var instance = new AliseeksApi.RealtimeSearchRequest();
      //expect(instance).to.be();
    });

  });

}));
