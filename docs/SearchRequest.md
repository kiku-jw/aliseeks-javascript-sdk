# AliseeksApi.SearchRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**text** | **String** | The search query  | [optional] 
**sort** | **String** |  | [optional] [default to &#39;BEST_MATCH&#39;]
**currency** | [**NonRealtimeCurrency**](NonRealtimeCurrency.md) |  | [optional] 
**category** | **Number** | The AliExpress category to search in  | [optional] 
**includeSubcategories** | **Boolean** | When this flag is set to &#x60;true&#x60; the &#x60;category&#x60; field will be expanded so that all items in sub-categories will be included  | [optional] [default to false]
**sortDirection** | **String** | The direction to sort the results by. Only valid for certain &#x60;sort&#x60; values  | [optional] [default to &#39;ASC&#39;]
**ratingsRange** | [**DoubleRange**](DoubleRange.md) |  | [optional] 
**quantityRange** | [**IntegerRange**](IntegerRange.md) |  | [optional] 
**priceRange** | [**DoubleRange**](DoubleRange.md) |  | [optional] 
**unitPriceRange** | [**DoubleRange**](DoubleRange.md) |  | [optional] 
**orderRange** | [**IntegerRange**](IntegerRange.md) |  | [optional] 
**itemIdRange** | [**StringRange**](StringRange.md) |  | [optional] 
**freightTypes** | **[String]** | Filter by freight types  | [optional] 
**skip** | **Number** | Skip a number of items, if you need to skip more than 10000 items then use the scroll feature  | [optional] 
**limit** | **Number** | Limit the request to a number of items  | [optional] 
**scrollPagination** | **Boolean** | When this value is &#x60;true&#x60; then you will receive a scroll identifier which you can use to request the next page of results. The scroll identifier is good for 60 seconds.  | [optional] [default to false]
**scrollIdentifier** | **String** | The scroll identifier which can be retrieved by sending an initial search request with &#x60;scrollPagination&#x60; set to &#x60;true&#x60;. Scroll identifiers are good for 60 seconds.  | [optional] 


<a name="SortEnum"></a>
## Enum: SortEnum


* `PRODUCT_ID` (value: `"PRODUCT_ID"`)

* `UPDATE_TIME` (value: `"UPDATE_TIME"`)

* `WHOLESALE_PRICE` (value: `"WHOLESALE_PRICE"`)

* `ITEM_RATING` (value: `"ITEM_RATING"`)

* `ORDERS` (value: `"ORDERS"`)

* `BEST_MATCH` (value: `"BEST_MATCH"`)




<a name="SortDirectionEnum"></a>
## Enum: SortDirectionEnum


* `ASC` (value: `"ASC"`)

* `DESC` (value: `"DESC"`)




