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
    define(['ApiClient', 'model/TimeDuration'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TimeDuration'));
  } else {
    // Browser globals (root is window)
    if (!root.AliseeksApi) {
      root.AliseeksApi = {};
    }
    root.AliseeksApi.ProductPromotion = factory(root.AliseeksApi.ApiClient, root.AliseeksApi.TimeDuration);
  }
}(this, function(ApiClient, TimeDuration) {
  'use strict';



  /**
   * The ProductPromotion model module.
   * @module model/ProductPromotion
   * @version 0.10.1
   */

  /**
   * Constructs a new <code>ProductPromotion</code>.
   * A product promotion 
   * @alias module:model/ProductPromotion
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>ProductPromotion</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProductPromotion} obj Optional instance to populate.
   * @return {module:model/ProductPromotion} The populated <code>ProductPromotion</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('discount')) {
        obj['discount'] = ApiClient.convertToType(data['discount'], 'Number');
      }
      if (data.hasOwnProperty('timeLeft')) {
        obj['timeLeft'] = TimeDuration.constructFromObject(data['timeLeft']);
      }
    }
    return obj;
  }

  /**
   * The discount of a promotion 
   * @member {Number} discount
   */
  exports.prototype['discount'] = undefined;
  /**
   * @member {module:model/TimeDuration} timeLeft
   */
  exports.prototype['timeLeft'] = undefined;



  return exports;
}));


