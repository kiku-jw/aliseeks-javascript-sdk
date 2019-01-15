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
    root.AliseeksApi.ProductReviews = factory(root.AliseeksApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The ProductReviews model module.
   * @module model/ProductReviews
   * @version 0.10.0
   */

  /**
   * Constructs a new <code>ProductReviews</code>.
   * Reviews on a product 
   * @alias module:model/ProductReviews
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>ProductReviews</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProductReviews} obj Optional instance to populate.
   * @return {module:model/ProductReviews} The populated <code>ProductReviews</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('fiveStarCount')) {
        obj['fiveStarCount'] = ApiClient.convertToType(data['fiveStarCount'], 'Number');
      }
      if (data.hasOwnProperty('fourStarCount')) {
        obj['fourStarCount'] = ApiClient.convertToType(data['fourStarCount'], 'Number');
      }
      if (data.hasOwnProperty('threeStarCount')) {
        obj['threeStarCount'] = ApiClient.convertToType(data['threeStarCount'], 'Number');
      }
      if (data.hasOwnProperty('twoStarCount')) {
        obj['twoStarCount'] = ApiClient.convertToType(data['twoStarCount'], 'Number');
      }
      if (data.hasOwnProperty('oneStarCount')) {
        obj['oneStarCount'] = ApiClient.convertToType(data['oneStarCount'], 'Number');
      }
      if (data.hasOwnProperty('totalCount')) {
        obj['totalCount'] = ApiClient.convertToType(data['totalCount'], 'Number');
      }
      if (data.hasOwnProperty('positiveCount')) {
        obj['positiveCount'] = ApiClient.convertToType(data['positiveCount'], 'Number');
      }
      if (data.hasOwnProperty('negativeCount')) {
        obj['negativeCount'] = ApiClient.convertToType(data['negativeCount'], 'Number');
      }
      if (data.hasOwnProperty('neutralCount')) {
        obj['neutralCount'] = ApiClient.convertToType(data['neutralCount'], 'Number');
      }
      if (data.hasOwnProperty('ratings')) {
        obj['ratings'] = ApiClient.convertToType(data['ratings'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} fiveStarCount
   */
  exports.prototype['fiveStarCount'] = undefined;
  /**
   * @member {Number} fourStarCount
   */
  exports.prototype['fourStarCount'] = undefined;
  /**
   * @member {Number} threeStarCount
   */
  exports.prototype['threeStarCount'] = undefined;
  /**
   * @member {Number} twoStarCount
   */
  exports.prototype['twoStarCount'] = undefined;
  /**
   * @member {Number} oneStarCount
   */
  exports.prototype['oneStarCount'] = undefined;
  /**
   * Total review count 
   * @member {Number} totalCount
   */
  exports.prototype['totalCount'] = undefined;
  /**
   * Count of positive reviews 
   * @member {Number} positiveCount
   */
  exports.prototype['positiveCount'] = undefined;
  /**
   * Count of negative reviews 
   * @member {Number} negativeCount
   */
  exports.prototype['negativeCount'] = undefined;
  /**
   * Count of neutral reviews 
   * @member {Number} neutralCount
   */
  exports.prototype['neutralCount'] = undefined;
  /**
   * Product ratings score 
   * @member {Number} ratings
   */
  exports.prototype['ratings'] = undefined;



  return exports;
}));

