# Org.OpenAPITools.Api.InflationApi

All URIs are relative to *https://api.requiems.xyz*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**V1FinanceInflationBatchPost**](InflationApi.md#v1financeinflationbatchpost) | **POST** /v1/finance/inflation/batch | Batch Inflation Rates |
| [**V1FinanceInflationGet**](InflationApi.md#v1financeinflationget) | **GET** /v1/finance/inflation | Get Inflation Rate |

<a id="v1financeinflationbatchpost"></a>
# **V1FinanceInflationBatchPost**
> V1FinanceInflationBatchPost200Response V1FinanceInflationBatchPost (V1FinanceInflationBatchPostRequest v1FinanceInflationBatchPostRequest)

Batch Inflation Rates

Returns inflation data for up to 50 countries in a single request. Results are in the same order as the input. Countries with no data return found: false instead of failing the whole request. Billing: 1 credit per country (not per HTTP request).


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **v1FinanceInflationBatchPostRequest** | [**V1FinanceInflationBatchPostRequest**](V1FinanceInflationBatchPostRequest.md) |  |  |

### Return type

[**V1FinanceInflationBatchPost200Response**](V1FinanceInflationBatchPost200Response.md)

### Authorization

[requiems-api-key](../README.md#requiems-api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |
| **422** | Body is invalid: empty array, more than 50 items, or a bad country code. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="v1financeinflationget"></a>
# **V1FinanceInflationGet**
> V1FinanceInflationGet200Response V1FinanceInflationGet (string country)

Get Inflation Rate

Returns the latest annual CPI inflation rate for a country plus the previous 10 years of historical data.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **country** | **string** | ISO 3166-1 alpha-2 country code (e.g. US, GB, DE). Case-insensitive. |  |

### Return type

[**V1FinanceInflationGet200Response**](V1FinanceInflationGet200Response.md)

### Authorization

[requiems-api-key](../README.md#requiems-api-key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |
| **400** | The country parameter is missing or is not a valid ISO 3166-1 alpha-2 code. |  -  |
| **404** | No inflation data found for the given country code. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

