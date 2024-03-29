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
    root.AliseeksApi.SkuPriceOptionProperty = factory(root.AliseeksApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The SkuPriceOptionProperty model module.
   * @module model/SkuPriceOptionProperty
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>SkuPriceOptionProperty</code>.
   * A property of a sku of a product 
   * @alias module:model/SkuPriceOptionProperty
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>SkuPriceOptionProperty</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SkuPriceOptionProperty} obj Optional instance to populate.
   * @return {module:model/SkuPriceOptionProperty} The populated <code>SkuPriceOptionProperty</code> instance.
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
      if (data.hasOwnProperty('valueId')) {
        obj['valueId'] = ApiClient.convertToType(data['valueId'], 'Number');
      }
      if (data.hasOwnProperty('valueName')) {
        obj['valueName'] = ApiClient.convertToType(data['valueName'], 'String');
      }
      if (data.hasOwnProperty('valueDisplayName')) {
        obj['valueDisplayName'] = ApiClient.convertToType(data['valueDisplayName'], 'String');
      }
      if (data.hasOwnProperty('shipFromCountry')) {
        obj['shipFromCountry'] = ApiClient.convertToType(data['shipFromCountry'], 'String');
      }
    }
    return obj;
  }

  /**
   * The ID of the property 
   * @member {Number} propertyId
   */
  exports.prototype['propertyId'] = undefined;
  /**
   * The name of the property 
   * @member {String} propertyName
   */
  exports.prototype['propertyName'] = undefined;
  /**
   * The ID of the property value 
   * @member {Number} valueId
   */
  exports.prototype['valueId'] = undefined;
  /**
   * The name of the property value 
   * @member {String} valueName
   */
  exports.prototype['valueName'] = undefined;
  /**
   * The display name of the property value 
   * @member {String} valueDisplayName
   */
  exports.prototype['valueDisplayName'] = undefined;
  /**
   * The country that the sku is shipped from 
   * @member {String} shipFromCountry
   */
  exports.prototype['shipFromCountry'] = undefined;



  return exports;
}));


