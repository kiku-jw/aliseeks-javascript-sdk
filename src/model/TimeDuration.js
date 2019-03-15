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
    root.AliseeksApi.TimeDuration = factory(root.AliseeksApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The TimeDuration model module.
   * @module model/TimeDuration
   * @version 1.0.4
   */

  /**
   * Constructs a new <code>TimeDuration</code>.
   * A time duration 
   * @alias module:model/TimeDuration
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>TimeDuration</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TimeDuration} obj Optional instance to populate.
   * @return {module:model/TimeDuration} The populated <code>TimeDuration</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('days')) {
        obj['days'] = ApiClient.convertToType(data['days'], 'Number');
      }
      if (data.hasOwnProperty('hours')) {
        obj['hours'] = ApiClient.convertToType(data['hours'], 'Number');
      }
      if (data.hasOwnProperty('minutes')) {
        obj['minutes'] = ApiClient.convertToType(data['minutes'], 'Number');
      }
      if (data.hasOwnProperty('seconds')) {
        obj['seconds'] = ApiClient.convertToType(data['seconds'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} days
   */
  exports.prototype['days'] = undefined;
  /**
   * @member {Number} hours
   */
  exports.prototype['hours'] = undefined;
  /**
   * @member {Number} minutes
   */
  exports.prototype['minutes'] = undefined;
  /**
   * @member {Number} seconds
   */
  exports.prototype['seconds'] = undefined;



  return exports;
}));


