# Org.OpenAPITools.Api.ExchangeRateApi

All URIs are relative to *https://api.requiems.xyz*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**V1FinanceConvertGet**](ExchangeRateApi.md#v1financeconvertget) | **GET** /v1/finance/convert | Convert Currency |
| [**V1FinanceExchangeRateGet**](ExchangeRateApi.md#v1financeexchangerateget) | **GET** /v1/finance/exchange-rate | Get Exchange Rate |

<a id="v1financeconvertget"></a>
# **V1FinanceConvertGet**
> V1FinanceConvertGet200Response V1FinanceConvertGet (string from, string to, decimal amount)

Convert Currency

Converts an amount from one currency to another and returns the rate alongside the converted value.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **from** | **string** | ISO 4217 source currency code (3 letters, e.g. USD) |  |
| **to** | **string** | ISO 4217 target currency code (3 letters, e.g. EUR) |  |
| **amount** | **decimal** | Amount to convert. Must be greater than 0. |  |

### Return type

[**V1FinanceConvertGet200Response**](V1FinanceConvertGet200Response.md)

### Authorization

[requiems-api-key](../README.md#requiems-api-key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |
| **400** | A required parameter is missing, the currency code is not 3 alphabetic characters, or the amount is 0 or negative. |  -  |
| **422** | One or both currency codes are not recognised by the upstream data source. |  -  |
| **503** | The exchange rate data source is temporarily unavailable. |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="v1financeexchangerateget"></a>
# **V1FinanceExchangeRateGet**
> V1FinanceExchangeRateGet200Response V1FinanceExchangeRateGet (string from, string to)

Get Exchange Rate

Returns the current exchange rate between two currencies.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **from** | **string** | ISO 4217 source currency code (3 letters, e.g. USD) |  |
| **to** | **string** | ISO 4217 target currency code (3 letters, e.g. EUR) |  |

### Return type

[**V1FinanceExchangeRateGet200Response**](V1FinanceExchangeRateGet200Response.md)

### Authorization

[requiems-api-key](../README.md#requiems-api-key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |
| **400** | A required parameter is missing or the currency code is not exactly 3 alphabetic characters. |  -  |
| **422** | One or both currency codes are not recognised by the upstream data source. |  -  |
| **503** | The exchange rate data source is temporarily unavailable. |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

