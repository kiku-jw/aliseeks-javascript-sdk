/**
 * Aliseeks API
 * AliExpress product searching and product details retrieval API. 
 *
 * OpenAPI spec version: 0.10.0
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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AliseeksApi) {
      root.AliseeksApi = {};
    }
    root.AliseeksApi.ProductAttribute = factory(root.AliseeksApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The ProductAttribute model module.
   * @module model/ProductAttribute
   * @version 0.10.0
   */

  /**
   * Constructs a new <code>ProductAttribute</code>.
   * Attribute on a product 
   * @alias module:model/ProductAttribute
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>ProductAttribute</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProductAttribute} obj Optional instance to populate.
   * @return {module:model/ProductAttribute} The populated <code>ProductAttribute</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'String');
      }
      if (data.hasOwnProperty('valueId')) {
        obj['valueId'] = ApiClient.convertToType(data['valueId'], 'String');
      }
    }
    return obj;
  }

  /**
   * The name of the attribute 
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The ID of the attribute 
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The value of the attribute 
   * @member {String} value
   */
  exports.prototype['value'] = undefined;
  /**
   * The ID of the value of the attribute 
   * @member {String} valueId
   */
  exports.prototype['valueId'] = undefined;



  return exports;
}));

