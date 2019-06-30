# AliseeksApi.ProductsApi

All URIs are relative to *https://api.aliseeks.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getProduct**](ProductsApi.md#getProduct) | **POST** /products | Get products details as an aggregated request from AliExpress in realtime. 
[**getProductDetails**](ProductsApi.md#getProductDetails) | **POST** /products/details | Gets product details from AliExpress in realtime. 
[**getProductHtmlDescription**](ProductsApi.md#getProductHtmlDescription) | **POST** /products/description/html | Get product HTML description from AliExpress in realtime. 
[**getProductReviews**](ProductsApi.md#getProductReviews) | **POST** /products/reviews | Get product reviews from AliExpress in realtime 
[**getProductShipping**](ProductsApi.md#getProductShipping) | **POST** /products/shipping | Gets product shipping information AliExpress in realtime. 
[**getProductSkus**](ProductsApi.md#getProductSkus) | **POST** /products/variations | Gets product skus / variation information from AliExpress in realtime. 
[**getProductTransactions**](ProductsApi.md#getProductTransactions) | **POST** /products/transactions | Get product transactions from AliExpress in realtime. 


<a name="getProduct"></a>
# **getProduct**
> Product getProduct(opts)

Get products details as an aggregated request from AliExpress in realtime. 

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
var opts = {
  'productRequest': new AliseeksApi.ProductRequest() // ProductRequest | The request body of get product 
};
apiInstance.getProduct(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productRequest** | [**ProductRequest**](ProductRequest.md)| The request body of get product  | [optional] 

### Return type

[**Product**](Product.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

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

<a name="getProductReviews"></a>
# **getProductReviews**
> ProductReviews getProductReviews(productReviewsRequest)

Get product reviews from AliExpress in realtime 

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
var productReviewsRequest = new AliseeksApi.ProductReviewsRequest(); // ProductReviewsRequest | The request body to get product reviews 
apiInstance.getProductReviews(productReviewsRequest).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productReviewsRequest** | [**ProductReviewsRequest**](ProductReviewsRequest.md)| The request body to get product reviews  | 

### Return type

[**ProductReviews**](ProductReviews.md)

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

<a name="getProductTransactions"></a>
# **getProductTransactions**
> ProductTransactions getProductTransactions(productTransactionsRequest)

Get product transactions from AliExpress in realtime. 

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
var productTransactionsRequest = new AliseeksApi.ProductTransactionsRequest(); // ProductTransactionsRequest | The request body to get product transactions 
apiInstance.getProductTransactions(productTransactionsRequest).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productTransactionsRequest** | [**ProductTransactionsRequest**](ProductTransactionsRequest.md)| The request body to get product transactions  | 

### Return type

[**ProductTransactions**](ProductTransactions.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

