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
    root.AliseeksApi.SearchAggregation = factory(root.AliseeksApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The SearchAggregation model module.
   * @module model/SearchAggregation
   * @version 1.0.4
   */

  /**
   * Constructs a new <code>SearchAggregation</code>.
   * Aliseeks search aggregation 
   * @alias module:model/SearchAggregation
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>SearchAggregation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SearchAggregation} obj Optional instance to populate.
   * @return {module:model/SearchAggregation} The populated <code>SearchAggregation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('totalCount')) {
        obj['totalCount'] = ApiClient.convertToType(data['totalCount'], 'Number');
      }
      if (data.hasOwnProperty('skip')) {
        obj['skip'] = ApiClient.convertToType(data['skip'], 'Number');
      }
      if (data.hasOwnProperty('limit')) {
        obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
      }
      if (data.hasOwnProperty('scrollIdentifier')) {
        obj['scrollIdentifier'] = ApiClient.convertToType(data['scrollIdentifier'], 'String');
      }
    }
    return obj;
  }

  /**
   * The total number of items that match the request 
   * @member {Number} totalCount
   */
  exports.prototype['totalCount'] = undefined;
  /**
   * The number of items that were skipped 
   * @member {Number} skip
   */
  exports.prototype['skip'] = undefined;
  /**
   * The number of items to return 
   * @member {Number} limit
   */
  exports.prototype['limit'] = undefined;
  /**
   * The scroll identifier which can be used in a subsequent search request to fetch the next page. Expires in 60 seconds. 
   * @member {String} scrollIdentifier
   */
  exports.prototype['scrollIdentifier'] = undefined;



  return exports;
}));


