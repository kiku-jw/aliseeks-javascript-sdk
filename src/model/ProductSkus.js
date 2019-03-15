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
    define(['ApiClient', 'model/ProductSku'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ProductSku'));
  } else {
    // Browser globals (root is window)
    if (!root.AliseeksApi) {
      root.AliseeksApi = {};
    }
    root.AliseeksApi.ProductSkus = factory(root.AliseeksApi.ApiClient, root.AliseeksApi.ProductSku);
  }
}(this, function(ApiClient, ProductSku) {
  'use strict';



  /**
   * The ProductSkus model module.
   * @module model/ProductSkus
   * @version 1.0.4
   */

  /**
   * Constructs a new <code>ProductSkus</code>.
   * Product pricing information with all variations 
   * @alias module:model/ProductSkus
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>ProductSkus</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProductSkus} obj Optional instance to populate.
   * @return {module:model/ProductSkus} The populated <code>ProductSkus</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('variations')) {
        obj['variations'] = ApiClient.convertToType(data['variations'], [ProductSku]);
      }
    }
    return obj;
  }

  /**
   * List of product pricing information 
   * @member {Array.<module:model/ProductSku>} variations
   */
  exports.prototype['variations'] = undefined;



  return exports;
}));


