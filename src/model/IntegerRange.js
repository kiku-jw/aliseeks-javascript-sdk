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
    root.AliseeksApi.IntegerRange = factory(root.AliseeksApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The IntegerRange model module.
   * @module model/IntegerRange
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>IntegerRange</code>.
   * A range of type integer 
   * @alias module:model/IntegerRange
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>IntegerRange</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IntegerRange} obj Optional instance to populate.
   * @return {module:model/IntegerRange} The populated <code>IntegerRange</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('from')) {
        obj['from'] = ApiClient.convertToType(data['from'], 'Number');
      }
      if (data.hasOwnProperty('to')) {
        obj['to'] = ApiClient.convertToType(data['to'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} from
   */
  exports.prototype['from'] = undefined;
  /**
   * @member {Number} to
   */
  exports.prototype['to'] = undefined;



  return exports;
}));


