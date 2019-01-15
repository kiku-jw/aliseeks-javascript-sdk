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
    define(['ApiClient', 'model/ProductShippingOptions'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ProductShippingOptions'));
  } else {
    // Browser globals (root is window)
    if (!root.AliseeksApi) {
      root.AliseeksApi = {};
    }
    root.AliseeksApi.ProductShipping = factory(root.AliseeksApi.ApiClient, root.AliseeksApi.ProductShippingOptions);
  }
}(this, function(ApiClient, ProductShippingOptions) {
  'use strict';



  /**
   * The ProductShipping model module.
   * @module model/ProductShipping
   * @version 0.10.0
   */

  /**
   * Constructs a new <code>ProductShipping</code>.
   * Product shipping information 
   * @alias module:model/ProductShipping
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>ProductShipping</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProductShipping} obj Optional instance to populate.
   * @return {module:model/ProductShipping} The populated <code>ProductShipping</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('options')) {
        obj['options'] = ApiClient.convertToType(data['options'], [ProductShippingOptions]);
      }
    }
    return obj;
  }

  /**
   * The list of product shipping options 
   * @member {Array.<module:model/ProductShippingOptions>} options
   */
  exports.prototype['options'] = undefined;



  return exports;
}));

