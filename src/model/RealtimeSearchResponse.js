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
    define(['ApiClient', 'model/RealtimeSearchAggregation', 'model/RealtimeSearchItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./RealtimeSearchAggregation'), require('./RealtimeSearchItem'));
  } else {
    // Browser globals (root is window)
    if (!root.AliseeksApi) {
      root.AliseeksApi = {};
    }
    root.AliseeksApi.RealtimeSearchResponse = factory(root.AliseeksApi.ApiClient, root.AliseeksApi.RealtimeSearchAggregation, root.AliseeksApi.RealtimeSearchItem);
  }
}(this, function(ApiClient, RealtimeSearchAggregation, RealtimeSearchItem) {
  'use strict';



  /**
   * The RealtimeSearchResponse model module.
   * @module model/RealtimeSearchResponse
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>RealtimeSearchResponse</code>.
   * The response from a realtime request 
   * @alias module:model/RealtimeSearchResponse
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>RealtimeSearchResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RealtimeSearchResponse} obj Optional instance to populate.
   * @return {module:model/RealtimeSearchResponse} The populated <code>RealtimeSearchResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('aggregation')) {
        obj['aggregation'] = RealtimeSearchAggregation.constructFromObject(data['aggregation']);
      }
      if (data.hasOwnProperty('items')) {
        obj['items'] = ApiClient.convertToType(data['items'], [RealtimeSearchItem]);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/RealtimeSearchAggregation} aggregation
   */
  exports.prototype['aggregation'] = undefined;
  /**
   * The items from a realtime search 
   * @member {Array.<module:model/RealtimeSearchItem>} items
   */
  exports.prototype['items'] = undefined;



  return exports;
}));


