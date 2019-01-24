# AliseeksApi.SearchApi

All URIs are relative to *https://api.aliseeks.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**realtimeSearch**](SearchApi.md#realtimeSearch) | **POST** /search/realtime | Searches AliExpress in realtime 
[**search**](SearchApi.md#search) | **POST** /search | Searches AliExpress in non-realtime. Uses the Aliseeks.com datasource which is continually updated from AliExpress. 
[**searchBestSelling**](SearchApi.md#searchBestSelling) | **POST** /search/bestSelling | Retrieves best selling products from AliExpress in realtime. 
[**searchByImage**](SearchApi.md#searchByImage) | **POST** /search/image | Searches AliExpress by image in realtime. 
[**uploadImageByUrl**](SearchApi.md#uploadImageByUrl) | **POST** /search/image/upload | Uploads an image to AliExpress to allow it to be used in the image search endpoint 


<a name="realtimeSearch"></a>
# **realtimeSearch**
> RealtimeSearchResponse realtimeSearch(realtimeSearchRequest)

Searches AliExpress in realtime 

### Example
```javascript
var AliseeksApi = require('aliseeks-api');
var defaultClient = AliseeksApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new AliseeksApi.SearchApi();
var realtimeSearchRequest = new AliseeksApi.RealtimeSearchRequest(); // RealtimeSearchRequest | Realtime search request body 
apiInstance.realtimeSearch(realtimeSearchRequest).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **realtimeSearchRequest** | [**RealtimeSearchRequest**](RealtimeSearchRequest.md)| Realtime search request body  | 

### Return type

[**RealtimeSearchResponse**](RealtimeSearchResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="search"></a>
# **search**
> SearchResponse search(searchRequest)

Searches AliExpress in non-realtime. Uses the Aliseeks.com datasource which is continually updated from AliExpress. 

### Example
```javascript
var AliseeksApi = require('aliseeks-api');
var defaultClient = AliseeksApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new AliseeksApi.SearchApi();
var searchRequest = new AliseeksApi.SearchRequest(); // SearchRequest | Search request body 
apiInstance.search(searchRequest).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchRequest** | [**SearchRequest**](SearchRequest.md)| Search request body  | 

### Return type

[**SearchResponse**](SearchResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchBestSelling"></a>
# **searchBestSelling**
> BestSellingSearchResponse searchBestSelling(bestSellingSearchRequest)

Retrieves best selling products from AliExpress in realtime. 

### Example
```javascript
var AliseeksApi = require('aliseeks-api');
var defaultClient = AliseeksApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new AliseeksApi.SearchApi();
var bestSellingSearchRequest = new AliseeksApi.BestSellingSearchRequest(); // BestSellingSearchRequest | Search best selling request body 
apiInstance.searchBestSelling(bestSellingSearchRequest).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bestSellingSearchRequest** | [**BestSellingSearchRequest**](BestSellingSearchRequest.md)| Search best selling request body  | 

### Return type

[**BestSellingSearchResponse**](BestSellingSearchResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchByImage"></a>
# **searchByImage**
> ImageSearchResponse searchByImage(imageSearchRequest)

Searches AliExpress by image in realtime. 

### Example
```javascript
var AliseeksApi = require('aliseeks-api');
var defaultClient = AliseeksApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new AliseeksApi.SearchApi();
var imageSearchRequest = new AliseeksApi.ImageSearchRequest(); // ImageSearchRequest | The image search request body 
apiInstance.searchByImage(imageSearchRequest).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **imageSearchRequest** | [**ImageSearchRequest**](ImageSearchRequest.md)| The image search request body  | 

### Return type

[**ImageSearchResponse**](ImageSearchResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="uploadImageByUrl"></a>
# **uploadImageByUrl**
> UploadImageResponse uploadImageByUrl(uploadImageByUrlRequest)

Uploads an image to AliExpress to allow it to be used in the image search endpoint 

### Example
```javascript
var AliseeksApi = require('aliseeks-api');
var defaultClient = AliseeksApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new AliseeksApi.SearchApi();
var uploadImageByUrlRequest = new AliseeksApi.UploadImageByUrlRequest(); // UploadImageByUrlRequest | The upload image by url request body 
apiInstance.uploadImageByUrl(uploadImageByUrlRequest).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uploadImageByUrlRequest** | [**UploadImageByUrlRequest**](UploadImageByUrlRequest.md)| The upload image by url request body  | 

### Return type

[**UploadImageResponse**](UploadImageResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

