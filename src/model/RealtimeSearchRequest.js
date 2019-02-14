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
    define(['ApiClient', 'model/DoubleRange'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DoubleRange'));
  } else {
    // Browser globals (root is window)
    if (!root.AliseeksApi) {
      root.AliseeksApi = {};
    }
    root.AliseeksApi.RealtimeSearchRequest = factory(root.AliseeksApi.ApiClient, root.AliseeksApi.DoubleRange);
  }
}(this, function(ApiClient, DoubleRange) {
  'use strict';



  /**
   * The RealtimeSearchRequest model module.
   * @module model/RealtimeSearchRequest
   * @version 1.0.0-rc.1
   */

  /**
   * Constructs a new <code>RealtimeSearchRequest</code>.
   * Realtime search request body 
   * @alias module:model/RealtimeSearchRequest
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>RealtimeSearchRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RealtimeSearchRequest} obj Optional instance to populate.
   * @return {module:model/RealtimeSearchRequest} The populated <code>RealtimeSearchRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('category')) {
        obj['category'] = ApiClient.convertToType(data['category'], 'Number');
      }
      if (data.hasOwnProperty('text')) {
        obj['text'] = ApiClient.convertToType(data['text'], 'String');
      }
      if (data.hasOwnProperty('priceRange')) {
        obj['priceRange'] = DoubleRange.constructFromObject(data['priceRange']);
      }
      if (data.hasOwnProperty('shipToCountry')) {
        obj['shipToCountry'] = ApiClient.convertToType(data['shipToCountry'], 'String');
      }
      if (data.hasOwnProperty('shipFromCountry')) {
        obj['shipFromCountry'] = ApiClient.convertToType(data['shipFromCountry'], 'String');
      }
      if (data.hasOwnProperty('sort')) {
        obj['sort'] = ApiClient.convertToType(data['sort'], 'String');
      }
      if (data.hasOwnProperty('skip')) {
        obj['skip'] = ApiClient.convertToType(data['skip'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The category to filter by 
   * @member {Number} category
   */
  exports.prototype['category'] = undefined;
  /**
   * The text to filter by 
   * @member {String} text
   */
  exports.prototype['text'] = undefined;
  /**
   * @member {module:model/DoubleRange} priceRange
   */
  exports.prototype['priceRange'] = undefined;
  /**
   * The 2 character ISO code of the country where the item will be shipped to 
   * @member {String} shipToCountry
   */
  exports.prototype['shipToCountry'] = undefined;
  /**
   * The 2 character ISO code of the country where the item is shipped from 
   * @member {String} shipFromCountry
   */
  exports.prototype['shipFromCountry'] = undefined;
  /**
   * The sort order of the result 
   * @member {module:model/RealtimeSearchRequest.SortEnum} sort
   * @default 'BEST_MATCH'
   */
  exports.prototype['sort'] = 'BEST_MATCH';
  /**
   * Number of items to skip, used for pagination 
   * @member {Number} skip
   */
  exports.prototype['skip'] = undefined;


  /**
   * Allowed values for the <code>sort</code> property.
   * @enum {String}
   * @readonly
   */
  exports.SortEnum = {
    /**
     * value: "BEST_MATCH"
     * @const
     */
    "BEST_MATCH": "BEST_MATCH",
    /**
     * value: "HIGHEST_PRICE"
     * @const
     */
    "HIGHEST_PRICE": "HIGHEST_PRICE",
    /**
     * value: "LOWEST_PRICE"
     * @const
     */
    "LOWEST_PRICE": "LOWEST_PRICE",
    /**
     * value: "NUMBER_OF_ORDERS"
     * @const
     */
    "NUMBER_OF_ORDERS": "NUMBER_OF_ORDERS",
    /**
     * value: "SELLER_RATING"
     * @const
     */
    "SELLER_RATING": "SELLER_RATING",
    /**
     * value: "NEWEST_TO_OLDEST"
     * @const
     */
    "NEWEST_TO_OLDEST": "NEWEST_TO_OLDEST"  };


  return exports;
}));


