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
    instance = new AliseeksApi.ProductPriceOption();
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

  describe('ProductPriceOption', function() {
    it('should create an instance of ProductPriceOption', function() {
      // uncomment below and update the code to test ProductPriceOption
      //var instance = new AliseeksApi.ProductPriceOption();
      //expect(instance).to.be.a(AliseeksApi.ProductPriceOption);
    });

    it('should have the property maxAmount (base name: "maxAmount")', function() {
      // uncomment below and update the code to test the property maxAmount
      //var instance = new AliseeksApi.ProductPriceOption();
      //expect(instance).to.be();
    });

    it('should have the property maxAmountPerPiece (base name: "maxAmountPerPiece")', function() {
      // uncomment below and update the code to test the property maxAmountPerPiece
      //var instance = new AliseeksApi.ProductPriceOption();
      //expect(instance).to.be();
    });

    it('should have the property minAmount (base name: "minAmount")', function() {
      // uncomment below and update the code to test the property minAmount
      //var instance = new AliseeksApi.ProductPriceOption();
      //expect(instance).to.be();
    });

    it('should have the property minAmountPerPiece (base name: "minAmountPerPiece")', function() {
      // uncomment below and update the code to test the property minAmountPerPiece
      //var instance = new AliseeksApi.ProductPriceOption();
      //expect(instance).to.be();
    });

    it('should have the property minimumPurchase (base name: "minimumPurchase")', function() {
      // uncomment below and update the code to test the property minimumPurchase
      //var instance = new AliseeksApi.ProductPriceOption();
      //expect(instance).to.be();
    });

    it('should have the property processingTime (base name: "processingTime")', function() {
      // uncomment below and update the code to test the property processingTime
      //var instance = new AliseeksApi.ProductPriceOption();
      //expect(instance).to.be();
    });

    it('should have the property bulkOption (base name: "bulkOption")', function() {
      // uncomment below and update the code to test the property bulkOption
      //var instance = new AliseeksApi.ProductPriceOption();
      //expect(instance).to.be();
    });

  });

}));
