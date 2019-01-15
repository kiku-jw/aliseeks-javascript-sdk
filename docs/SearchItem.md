# AliseeksApi.SearchItem

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | AliExpress Product ID  | [optional] 
**title** | **String** | The subject / title of the product  | [optional] 
**categoryId** | **Number** | The category of the item  | [optional] 
**imageUrl** | **String** | Image URL for the item  | [optional] 
**detailUrl** | **String** | The detail URL of the item  | [optional] 
**lotSize** | **Number** | The lot size that the item is sold in  | [optional] 
**lotUnit** | **String** | The unit when describing a lot for this item  | [optional] 
**price** | [**Amount**](Amount.md) |  | [optional] 
**ratings** | **Number** | The ratings of this item  | [optional] 
**orders** | **Number** | The number of orders of this item  | [optional] 
**freight** | [**SearchItemFreight**](SearchItemFreight.md) |  | [optional] 
**seller** | [**SearchItemSeller**](SearchItemSeller.md) |  | [optional] 
**freightTypes** | [**[SearchItemFreightType]**](SearchItemFreightType.md) | List of freight types available for this item  | [optional] 


