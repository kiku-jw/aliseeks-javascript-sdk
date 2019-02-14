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
    define(['ApiClient', 'model/ProductRequestComponent', 'model/RealtimeCurrency'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ProductRequestComponent'), require('./RealtimeCurrency'));
  } else {
    // Browser globals (root is window)
    if (!root.AliseeksApi) {
      root.AliseeksApi = {};
    }
    root.AliseeksApi.ProductRequest = factory(root.AliseeksApi.ApiClient, root.AliseeksApi.ProductRequestComponent, root.AliseeksApi.RealtimeCurrency);
  }
}(this, function(ApiClient, ProductRequestComponent, RealtimeCurrency) {
  'use strict';



  /**
   * The ProductRequest model module.
   * @module model/ProductRequest
   * @version 0.10.1
   */

  /**
   * Constructs a new <code>ProductRequest</code>.
   * Get product request body when fetching a product from AliExpress 
   * @alias module:model/ProductRequest
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>ProductRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProductRequest} obj Optional instance to populate.
   * @return {module:model/ProductRequest} The populated <code>ProductRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('currency')) {
        obj['currency'] = RealtimeCurrency.constructFromObject(data['currency']);
      }
      if (data.hasOwnProperty('productId')) {
        obj['productId'] = ApiClient.convertToType(data['productId'], 'String');
      }
      if (data.hasOwnProperty('locale')) {
        obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
      }
      if (data.hasOwnProperty('timeZone')) {
        obj['timeZone'] = ApiClient.convertToType(data['timeZone'], 'String');
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
      if (data.hasOwnProperty('sendGoodsCountry')) {
        obj['sendGoodsCountry'] = ApiClient.convertToType(data['sendGoodsCountry'], 'String');
      }
      if (data.hasOwnProperty('quantity')) {
        obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
      }
      if (data.hasOwnProperty('components')) {
        obj['components'] = ApiClient.convertToType(data['components'], [ProductRequestComponent]);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/RealtimeCurrency} currency
   */
  exports.prototype['currency'] = undefined;
  /**
   * The Product ID 
   * @member {String} productId
   */
  exports.prototype['productId'] = undefined;
  /**
   * AliExpress locale to use. 
   * @member {String} locale
   * @default 'en_US'
   */
  exports.prototype['locale'] = 'en_US';
  /**
   * Timezone to format times in 
   * @member {String} timeZone
   * @default 'CST'
   */
  exports.prototype['timeZone'] = 'CST';
  /**
   * Two character iso country code 
   * @member {String} country
   */
  exports.prototype['country'] = undefined;
  /**
   * Two character iso country code 
   * @member {String} sendGoodsCountry
   */
  exports.prototype['sendGoodsCountry'] = undefined;
  /**
   * @member {Number} quantity
   */
  exports.prototype['quantity'] = undefined;
  /**
   * @member {Array.<module:model/ProductRequestComponent>} components
   */
  exports.prototype['components'] = undefined;



  return exports;
}));


