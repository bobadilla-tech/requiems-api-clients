# Org.OpenAPITools.Api.BinLookupApi

All URIs are relative to _https://api.requiems.xyz_

| Method                                                       | HTTP request                  | Description |
| ------------------------------------------------------------ | ----------------------------- | ----------- |
| [**V1FinanceBinBinGet**](BinLookupApi.md#v1financebinbinget) | **GET** /v1/finance/bin/{bin} | BIN Lookup  |

<a id="v1financebinbinget"></a>

# **V1FinanceBinBinGet**

> V1FinanceBinBinGet200Response V1FinanceBinBinGet (string bin)

BIN Lookup

Returns card metadata for the given 6–8 digit BIN prefix.

### Parameters

| Name    | Type       | Description                                                                         | Notes |
| ------- | ---------- | ----------------------------------------------------------------------------------- | ----- |
| **bin** | **string** | 6–8 digit Bank Identification Number. Dashes and spaces are stripped automatically. |       |

### Return type

[**V1FinanceBinBinGet200Response**](V1FinanceBinBinGet200Response.md)

### Authorization

[requiems-api-key](../README.md#requiems-api-key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                                             | Response headers |
| ----------- | ------------------------------------------------------- | ---------------- |
| **200**     | Successful response                                     | -                |
| **400**     | BIN is not 6–8 digits or contains non-digit characters. | -                |
| **404**     | BIN prefix not found in the database.                   | -                |
| **500**     | Unexpected server error.                                | -                |

[[Back to top]](#)
[[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)
