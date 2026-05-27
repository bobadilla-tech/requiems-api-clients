# Org.OpenAPITools.Api.CommoditiesApi

All URIs are relative to _https://api.requiems.xyz_

| Method                                                                                     | HTTP request                                | Description         |
| ------------------------------------------------------------------------------------------ | ------------------------------------------- | ------------------- |
| [**V1FinanceCommoditiesCommodityGet**](CommoditiesApi.md#v1financecommoditiescommodityget) | **GET** /v1/finance/commodities/{commodity} | Get Commodity Price |

<a id="v1financecommoditiescommodityget"></a>

# **V1FinanceCommoditiesCommodityGet**

> V1FinanceCommoditiesCommodityGet200Response V1FinanceCommoditiesCommodityGet
> (string commodity)

Get Commodity Price

Returns the latest annual average price and up to 10 years of historical data
for the requested commodity slug.

### Parameters

| Name          | Type       | Description                                                         | Notes |
| ------------- | ---------- | ------------------------------------------------------------------- | ----- |
| **commodity** | **string** | Commodity slug (e.g. gold, silver, oil). See supported slugs below. |       |

### Return type

[**V1FinanceCommoditiesCommodityGet200Response**](V1FinanceCommoditiesCommodityGet200Response.md)

### Authorization

[requiems-api-key](../README.md#requiems-api-key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                                                                 | Response headers |
| ----------- | --------------------------------------------------------------------------- | ---------------- |
| **200**     | Successful response                                                         | -                |
| **404**     | No data found for the given commodity slug. Check the supported slugs list. | -                |
| **500**     | Unexpected server error.                                                    | -                |

[[Back to top]](#)
[[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)
