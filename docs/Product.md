# AliseeksApi.Product

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The AliExpress item ID  | [optional] 
**categoryId** | **String** | The item category  | [optional] 
**companyId** | **String** | The company ID  | [optional] 
**sellerId** | **String** | The seller ID  | [optional] 
**title** | **String** | The subject / title of the item  | [optional] 
**statusId** | **Number** | The AliExpress status ID  | [optional] 
**status** | **String** | The AliExpress status  | [optional] 
**countPerLot** | **Number** | The number of items per lot  | [optional] 
**wishListCount** | **Number** | Number of times the item has been added to a wishlist  | [optional] 
**unit** | **String** | The unit of the item  | [optional] 
**multiUnit** | **String** | The unit for multiple items  | [optional] 
**seller** | [**ProductSeller**](ProductSeller.md) |  | [optional] 
**reviews** | [**ProductReviews**](ProductReviews.md) |  | [optional] 
**trade** | [**TradeInformation**](TradeInformation.md) |  | [optional] 
**promotion** | [**ProductPromotion**](ProductPromotion.md) |  | [optional] 
**productImages** | **[String]** | The item images  | [optional] 
**attributes** | [**[ProductAttribute]**](ProductAttribute.md) | Attributes associated with the AliExpress product  | [optional] 
**htmlDescription** | **String** | The product HTML description  | [optional] 
**priceSummary** | [**PriceSummary**](PriceSummary.md) |  | [optional] 
**prices** | [**[SkuPriceOption]**](SkuPriceOption.md) | All the variations of an AliExpress item and prices associated with each variation  | [optional] 
**shipping** | [**[ProductShippingOptions]**](ProductShippingOptions.md) | The shipping options of an AliExpress item  | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `active` (value: `"active"`)

* `inactive` (value: `"inactive"`)




