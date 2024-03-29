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
    define(['ApiClient', 'model/BestSellingSearchRequest', 'model/BestSellingSearchResponse', 'model/ImageSearchRequest', 'model/ImageSearchResponse', 'model/RealtimeSearchRequest', 'model/RealtimeSearchResponse', 'model/SearchRequest', 'model/SearchResponse', 'model/UploadImageByUrlRequest', 'model/UploadImageResponse', 'model/WebError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BestSellingSearchRequest'), require('../model/BestSellingSearchResponse'), require('../model/ImageSearchRequest'), require('../model/ImageSearchResponse'), require('../model/RealtimeSearchRequest'), require('../model/RealtimeSearchResponse'), require('../model/SearchRequest'), require('../model/SearchResponse'), require('../model/UploadImageByUrlRequest'), require('../model/UploadImageResponse'), require('../model/WebError'));
  } else {
    // Browser globals (root is window)
    if (!root.AliseeksApi) {
      root.AliseeksApi = {};
    }
    root.AliseeksApi.SearchApi = factory(root.AliseeksApi.ApiClient, root.AliseeksApi.BestSellingSearchRequest, root.AliseeksApi.BestSellingSearchResponse, root.AliseeksApi.ImageSearchRequest, root.AliseeksApi.ImageSearchResponse, root.AliseeksApi.RealtimeSearchRequest, root.AliseeksApi.RealtimeSearchResponse, root.AliseeksApi.SearchRequest, root.AliseeksApi.SearchResponse, root.AliseeksApi.UploadImageByUrlRequest, root.AliseeksApi.UploadImageResponse, root.AliseeksApi.WebError);
  }
}(this, function(ApiClient, BestSellingSearchRequest, BestSellingSearchResponse, ImageSearchRequest, ImageSearchResponse, RealtimeSearchRequest, RealtimeSearchResponse, SearchRequest, SearchResponse, UploadImageByUrlRequest, UploadImageResponse, WebError) {
  'use strict';

  /**
   * Search service.
   * @module api/SearchApi
   * @version 1.1.0
   */

  /**
   * Constructs a new SearchApi. 
   * @alias module:api/SearchApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Searches AliExpress in realtime 
     * @param {module:model/RealtimeSearchRequest} realtimeSearchRequest Realtime search request body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RealtimeSearchResponse} and HTTP response
     */
    this.realtimeSearchWithHttpInfo = function(realtimeSearchRequest) {
      var postBody = realtimeSearchRequest;

      // verify the required parameter 'realtimeSearchRequest' is set
      if (realtimeSearchRequest === undefined || realtimeSearchRequest === null) {
        throw new Error("Missing the required parameter 'realtimeSearchRequest' when calling realtimeSearch");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = RealtimeSearchResponse;

      return this.apiClient.callApi(
        '/search/realtime', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Searches AliExpress in realtime 
     * @param {module:model/RealtimeSearchRequest} realtimeSearchRequest Realtime search request body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RealtimeSearchResponse}
     */
    this.realtimeSearch = function(realtimeSearchRequest) {
      return this.realtimeSearchWithHttpInfo(realtimeSearchRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Searches AliExpress in non-realtime. Uses the Aliseeks.com datasource which is continually updated from AliExpress. 
     * @param {module:model/SearchRequest} searchRequest Search request body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SearchResponse} and HTTP response
     */
    this.searchWithHttpInfo = function(searchRequest) {
      var postBody = searchRequest;

      // verify the required parameter 'searchRequest' is set
      if (searchRequest === undefined || searchRequest === null) {
        throw new Error("Missing the required parameter 'searchRequest' when calling search");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = SearchResponse;

      return this.apiClient.callApi(
        '/search', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Searches AliExpress in non-realtime. Uses the Aliseeks.com datasource which is continually updated from AliExpress. 
     * @param {module:model/SearchRequest} searchRequest Search request body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SearchResponse}
     */
    this.search = function(searchRequest) {
      return this.searchWithHttpInfo(searchRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieves best selling products from AliExpress in realtime. 
     * @param {module:model/BestSellingSearchRequest} bestSellingSearchRequest Search best selling request body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BestSellingSearchResponse} and HTTP response
     */
    this.searchBestSellingWithHttpInfo = function(bestSellingSearchRequest) {
      var postBody = bestSellingSearchRequest;

      // verify the required parameter 'bestSellingSearchRequest' is set
      if (bestSellingSearchRequest === undefined || bestSellingSearchRequest === null) {
        throw new Error("Missing the required parameter 'bestSellingSearchRequest' when calling searchBestSelling");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = BestSellingSearchResponse;

      return this.apiClient.callApi(
        '/search/bestSelling', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Retrieves best selling products from AliExpress in realtime. 
     * @param {module:model/BestSellingSearchRequest} bestSellingSearchRequest Search best selling request body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BestSellingSearchResponse}
     */
    this.searchBestSelling = function(bestSellingSearchRequest) {
      return this.searchBestSellingWithHttpInfo(bestSellingSearchRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Searches AliExpress by image in realtime. 
     * @param {module:model/ImageSearchRequest} imageSearchRequest The image search request body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ImageSearchResponse} and HTTP response
     */
    this.searchByImageWithHttpInfo = function(imageSearchRequest) {
      var postBody = imageSearchRequest;

      // verify the required parameter 'imageSearchRequest' is set
      if (imageSearchRequest === undefined || imageSearchRequest === null) {
        throw new Error("Missing the required parameter 'imageSearchRequest' when calling searchByImage");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ImageSearchResponse;

      return this.apiClient.callApi(
        '/search/image', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Searches AliExpress by image in realtime. 
     * @param {module:model/ImageSearchRequest} imageSearchRequest The image search request body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ImageSearchResponse}
     */
    this.searchByImage = function(imageSearchRequest) {
      return this.searchByImageWithHttpInfo(imageSearchRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Uploads an image to AliExpress to allow it to be used in the image search endpoint 
     * @param {module:model/UploadImageByUrlRequest} uploadImageByUrlRequest The upload image by url request body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UploadImageResponse} and HTTP response
     */
    this.uploadImageByUrlWithHttpInfo = function(uploadImageByUrlRequest) {
      var postBody = uploadImageByUrlRequest;

      // verify the required parameter 'uploadImageByUrlRequest' is set
      if (uploadImageByUrlRequest === undefined || uploadImageByUrlRequest === null) {
        throw new Error("Missing the required parameter 'uploadImageByUrlRequest' when calling uploadImageByUrl");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = UploadImageResponse;

      return this.apiClient.callApi(
        '/search/image/upload', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Uploads an image to AliExpress to allow it to be used in the image search endpoint 
     * @param {module:model/UploadImageByUrlRequest} uploadImageByUrlRequest The upload image by url request body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UploadImageResponse}
     */
    this.uploadImageByUrl = function(uploadImageByUrlRequest) {
      return this.uploadImageByUrlWithHttpInfo(uploadImageByUrlRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
