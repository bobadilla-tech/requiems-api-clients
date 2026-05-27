# Org.OpenAPITools.Api.CryptoApi

All URIs are relative to _https://api.requiems.xyz_

| Method                                                                | HTTP request                        | Description      |
| --------------------------------------------------------------------- | ----------------------------------- | ---------------- |
| [**V1FinanceCryptoSymbolGet**](CryptoApi.md#v1financecryptosymbolget) | **GET** /v1/finance/crypto/{symbol} | Get Crypto Price |

<a id="v1financecryptosymbolget"></a>

# **V1FinanceCryptoSymbolGet**

> V1FinanceCryptoSymbolGet200Response V1FinanceCryptoSymbolGet (string symbol)

Get Crypto Price

Returns current price data for the given cryptocurrency symbol.

### Parameters

| Name       | Type       | Description                                  | Notes |
| ---------- | ---------- | -------------------------------------------- | ----- |
| **symbol** | **string** | Uppercase ticker symbol (e.g. BTC, ETH, SOL) |       |

### Return type

[**V1FinanceCryptoSymbolGet200Response**](V1FinanceCryptoSymbolGet200Response.md)

### Authorization

[requiems-api-key](../README.md#requiems-api-key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                                                  | Response headers |
| ----------- | ------------------------------------------------------------ | ---------------- |
| **200**     | Successful response                                          | -                |
| **422**     | The symbol is not in the supported coin list.                | -                |
| **503**     | CoinGecko is unavailable or returned an unexpected response. | -                |

[[Back to top]](#)
[[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)
