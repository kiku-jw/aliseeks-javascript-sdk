/**
 * Aliseeks API
 * AliExpress product searching and product details retrieval API. 
 *
 * OpenAPI spec version: 0.10.1
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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/SkuPropertyValue'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SkuPropertyValue'));
  } else {
    // Browser globals (root is window)
    if (!root.AliseeksApi) {
      root.AliseeksApi = {};
    }
    root.AliseeksApi.SkuProperty = factory(root.AliseeksApi.ApiClient, root.AliseeksApi.SkuPropertyValue);
  }
}(this, function(ApiClient, SkuPropertyValue) {
  'use strict';



  /**
   * The SkuProperty model module.
   * @module model/SkuProperty
   * @version 1.0.0-rc.1
   */

  /**
   * Constructs a new <code>SkuProperty</code>.
   * Defines a product SKU which corresponds to an item variation 
   * @alias module:model/SkuProperty
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>SkuProperty</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SkuProperty} obj Optional instance to populate.
   * @return {module:model/SkuProperty} The populated <code>SkuProperty</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('propertyId')) {
        obj['propertyId'] = ApiClient.convertToType(data['propertyId'], 'Number');
      }
      if (data.hasOwnProperty('propertyName')) {
        obj['propertyName'] = ApiClient.convertToType(data['propertyName'], 'String');
      }
      if (data.hasOwnProperty('values')) {
        obj['values'] = ApiClient.convertToType(data['values'], [SkuPropertyValue]);
      }
    }
    return obj;
  }

  /**
   * The ID of the SKU property 
   * @member {Number} propertyId
   */
  exports.prototype['propertyId'] = undefined;
  /**
   * The name of the property 
   * @member {String} propertyName
   */
  exports.prototype['propertyName'] = undefined;
  /**
   * The values of this SKU property 
   * @member {Array.<module:model/SkuPropertyValue>} values
   */
  exports.prototype['values'] = undefined;



  return exports;
}));


