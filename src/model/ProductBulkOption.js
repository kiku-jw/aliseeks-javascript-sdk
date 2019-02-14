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
    define(['ApiClient', 'model/Amount'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Amount'));
  } else {
    // Browser globals (root is window)
    if (!root.AliseeksApi) {
      root.AliseeksApi = {};
    }
    root.AliseeksApi.ProductBulkOption = factory(root.AliseeksApi.ApiClient, root.AliseeksApi.Amount);
  }
}(this, function(ApiClient, Amount) {
  'use strict';



  /**
   * The ProductBulkOption model module.
   * @module model/ProductBulkOption
   * @version 1.0.0-rc.1
   */

  /**
   * Constructs a new <code>ProductBulkOption</code>.
   * A bulk option to purchase a product 
   * @alias module:model/ProductBulkOption
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>ProductBulkOption</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProductBulkOption} obj Optional instance to populate.
   * @return {module:model/ProductBulkOption} The populated <code>ProductBulkOption</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('price')) {
        obj['price'] = Amount.constructFromObject(data['price']);
      }
      if (data.hasOwnProperty('discount')) {
        obj['discount'] = ApiClient.convertToType(data['discount'], 'Number');
      }
      if (data.hasOwnProperty('bulkOrderCount')) {
        obj['bulkOrderCount'] = ApiClient.convertToType(data['bulkOrderCount'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Amount} price
   */
  exports.prototype['price'] = undefined;
  /**
   * The discount for the bulk option 
   * @member {Number} discount
   */
  exports.prototype['discount'] = undefined;
  /**
   * The amount to order to be considered a bulk purchase 
   * @member {Number} bulkOrderCount
   */
  exports.prototype['bulkOrderCount'] = undefined;



  return exports;
}));


