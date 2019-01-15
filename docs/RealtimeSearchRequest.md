# AliseeksApi.RealtimeSearchRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **Number** | The category to filter by  | [optional] 
**text** | **String** | The text to filter by  | [optional] 
**priceRange** | [**DoubleRange**](DoubleRange.md) |  | [optional] 
**shipToCountry** | **String** | The 2 character ISO code of the country where the item will be shipped to  | [optional] 
**shipFromCountry** | **String** | The 2 character ISO code of the country where the item is shipped from  | [optional] 
**sort** | **String** | The sort order of the result  | [optional] [default to &#39;BEST_MATCH&#39;]
**skip** | **Number** | Number of items to skip, used for pagination  | [optional] 


<a name="SortEnum"></a>
## Enum: SortEnum


* `BEST_MATCH` (value: `"BEST_MATCH"`)

* `HIGHEST_PRICE` (value: `"HIGHEST_PRICE"`)

* `LOWEST_PRICE` (value: `"LOWEST_PRICE"`)

* `NUMBER_OF_ORDERS` (value: `"NUMBER_OF_ORDERS"`)

* `SELLER_RATING` (value: `"SELLER_RATING"`)

* `NEWEST_TO_OLDEST` (value: `"NEWEST_TO_OLDEST"`)




