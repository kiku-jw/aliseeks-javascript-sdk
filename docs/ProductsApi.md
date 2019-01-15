# AliseeksApi.ProductsApi

All URIs are relative to *https://api.aliseeks.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getProductDetails**](ProductsApi.md#getProductDetails) | **POST** /products/details | Gets product details from AliExpress in realtime. 
[**getProductHtmlDescription**](ProductsApi.md#getProductHtmlDescription) | **POST** /products/description/html | Get product HTML description from AliExpress in realtime. 
[**getProductShipping**](ProductsApi.md#getProductShipping) | **POST** /products/shipping | Gets product shipping information AliExpress in realtime. 
[**getProductSkus**](ProductsApi.md#getProductSkus) | **POST** /products/variations | Gets product skus / variation information from AliExpress in realtime. 


<a name="getProductDetails"></a>
# **getProductDetails**
> ProductDetail getProductDetails(productDetailsRequest)

Gets product details from AliExpress in realtime. 

### Example
```javascript
var AliseeksApi = require('aliseeks-api');
var defaultClient = AliseeksApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new AliseeksApi.ProductsApi();
var productDetailsRequest = new AliseeksApi.ProductDetailsRequest(); // ProductDetailsRequest | The request body to get product details 
apiInstance.getProductDetails(productDetailsRequest).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productDetailsRequest** | [**ProductDetailsRequest**](ProductDetailsRequest.md)| The request body to get product details  | 

### Return type

[**ProductDetail**](ProductDetail.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getProductHtmlDescription"></a>
# **getProductHtmlDescription**
> ProductHtmlDescription getProductHtmlDescription(productHtmlDescriptionRequest)

Get product HTML description from AliExpress in realtime. 

### Example
```javascript
var AliseeksApi = require('aliseeks-api');
var defaultClient = AliseeksApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new AliseeksApi.ProductsApi();
var productHtmlDescriptionRequest = new AliseeksApi.ProductHtmlDescriptionRequest(); // ProductHtmlDescriptionRequest | The request body to get product html description 
apiInstance.getProductHtmlDescription(productHtmlDescriptionRequest).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productHtmlDescriptionRequest** | [**ProductHtmlDescriptionRequest**](ProductHtmlDescriptionRequest.md)| The request body to get product html description  | 

### Return type

[**ProductHtmlDescription**](ProductHtmlDescription.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getProductShipping"></a>
# **getProductShipping**
> ProductShipping getProductShipping(productShippingRequest)

Gets product shipping information AliExpress in realtime. 

### Example
```javascript
var AliseeksApi = require('aliseeks-api');
var defaultClient = AliseeksApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new AliseeksApi.ProductsApi();
var productShippingRequest = new AliseeksApi.ProductShippingRequest(); // ProductShippingRequest | The request body to get product shipping 
apiInstance.getProductShipping(productShippingRequest).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productShippingRequest** | [**ProductShippingRequest**](ProductShippingRequest.md)| The request body to get product shipping  | 

### Return type

[**ProductShipping**](ProductShipping.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getProductSkus"></a>
# **getProductSkus**
> ProductSkus getProductSkus(productSkusRequest)

Gets product skus / variation information from AliExpress in realtime. 

### Example
```javascript
var AliseeksApi = require('aliseeks-api');
var defaultClient = AliseeksApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new AliseeksApi.ProductsApi();
var productSkusRequest = new AliseeksApi.ProductSkusRequest(); // ProductSkusRequest | The request body to get product skus / variations 
apiInstance.getProductSkus(productSkusRequest).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productSkusRequest** | [**ProductSkusRequest**](ProductSkusRequest.md)| The request body to get product skus / variations  | 

### Return type

[**ProductSkus**](ProductSkus.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json
