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
    root.AliseeksApi.WebError = factory(root.AliseeksApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The WebError model module.
   * @module model/WebError
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>WebError</code>.
   * General web error response 
   * @alias module:model/WebError
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>WebError</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WebError} obj Optional instance to populate.
   * @return {module:model/WebError} The populated <code>WebError</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('exception')) {
        obj['exception'] = ApiClient.convertToType(data['exception'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('cause')) {
        obj['cause'] = ApiClient.convertToType(data['cause'], 'String');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} exception
   */
  exports.prototype['exception'] = undefined;
  /**
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {String} cause
   */
  exports.prototype['cause'] = undefined;
  /**
   * @member {String} message
   */
  exports.prototype['message'] = undefined;



  return exports;
}));


