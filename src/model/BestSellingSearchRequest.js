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
    define(['ApiClient', 'model/RealtimeCurrency'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./RealtimeCurrency'));
  } else {
    // Browser globals (root is window)
    if (!root.AliseeksApi) {
      root.AliseeksApi = {};
    }
    root.AliseeksApi.BestSellingSearchRequest = factory(root.AliseeksApi.ApiClient, root.AliseeksApi.RealtimeCurrency);
  }
}(this, function(ApiClient, RealtimeCurrency) {
  'use strict';



  /**
   * The BestSellingSearchRequest model module.
   * @module model/BestSellingSearchRequest
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>BestSellingSearchRequest</code>.
   * Search request for best selling products 
   * @alias module:model/BestSellingSearchRequest
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>BestSellingSearchRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BestSellingSearchRequest} obj Optional instance to populate.
   * @return {module:model/BestSellingSearchRequest} The populated <code>BestSellingSearchRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('range')) {
        obj['range'] = ApiClient.convertToType(data['range'], 'String');
      }
      if (data.hasOwnProperty('category')) {
        obj['category'] = ApiClient.convertToType(data['category'], 'String');
      }
      if (data.hasOwnProperty('skip')) {
        obj['skip'] = ApiClient.convertToType(data['skip'], 'Number');
      }
      if (data.hasOwnProperty('locale')) {
        obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
      }
      if (data.hasOwnProperty('currency')) {
        obj['currency'] = RealtimeCurrency.constructFromObject(data['currency']);
      }
    }
    return obj;
  }

  /**
   * The time range to look for best selling products. Can be Top best selling products or Weekly best selling products. 
   * @member {module:model/BestSellingSearchRequest.RangeEnum} range
   * @default 'top'
   */
  exports.prototype['range'] = 'top';
  /**
   * The category to look for best selling products. Only certain categories can be searched for depending on the `range`. When range is \"top\", only the categories [ \"all\", \"fashion\", \"electronics\", \"sports\", \"health_beauty\", \"kids_baby\", \"home_garden\", \"automotive\" ] are supported. When range is \"weekly\", only the categories [ \"woman\", \"men\", \"electronics\", \"sports\", \"health_beauty\", \"kids_baby\", \"automotive\" ] are supported. 
   * @member {module:model/BestSellingSearchRequest.CategoryEnum} category
   * @default 'electronics'
   */
  exports.prototype['category'] = 'electronics';
  /**
   * The number of results to skip. Allows for pagination. 
   * @member {Number} skip
   * @default 0
   */
  exports.prototype['skip'] = 0;
  /**
   * AliExpress locale to use. 
   * @member {String} locale
   * @default 'en_US'
   */
  exports.prototype['locale'] = 'en_US';
  /**
   * @member {module:model/RealtimeCurrency} currency
   */
  exports.prototype['currency'] = undefined;


  /**
   * Allowed values for the <code>range</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RangeEnum = {
    /**
     * value: "top"
     * @const
     */
    "top": "top",
    /**
     * value: "weekly"
     * @const
     */
    "weekly": "weekly"  };

  /**
   * Allowed values for the <code>category</code> property.
   * @enum {String}
   * @readonly
   */
  exports.CategoryEnum = {
    /**
     * value: "all"
     * @const
     */
    "all": "all",
    /**
     * value: "fashion"
     * @const
     */
    "fashion": "fashion",
    /**
     * value: "sports"
     * @const
     */
    "sports": "sports",
    /**
     * value: "health_beauty"
     * @const
     */
    "health_beauty": "health_beauty",
    /**
     * value: "home_garden"
     * @const
     */
    "home_garden": "home_garden",
    /**
     * value: "kids_baby"
     * @const
     */
    "kids_baby": "kids_baby",
    /**
     * value: "automotive"
     * @const
     */
    "automotive": "automotive",
    /**
     * value: "electronics"
     * @const
     */
    "electronics": "electronics",
    /**
     * value: "men"
     * @const
     */
    "men": "men",
    /**
     * value: "women"
     * @const
     */
    "women": "women"  };


  return exports;
}));


