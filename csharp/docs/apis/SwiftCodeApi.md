# Org.OpenAPITools.Api.SwiftCodeApi

All URIs are relative to _https://api.requiems.xyz_

| Method                                                             | HTTP request                     | Description      |
| ------------------------------------------------------------------ | -------------------------------- | ---------------- |
| [**V1FinanceSwiftCodeGet**](SwiftCodeApi.md#v1financeswiftcodeget) | **GET** /v1/finance/swift/{code} | Get SWIFT Code   |
| [**V1FinanceSwiftGet**](SwiftCodeApi.md#v1financeswiftget)         | **GET** /v1/finance/swift        | List SWIFT Codes |

<a id="v1financeswiftcodeget"></a>

# **V1FinanceSwiftCodeGet**

> V1FinanceSwiftCodeGet200Response V1FinanceSwiftCodeGet (string code)

Get SWIFT Code

Look up bank metadata for a SWIFT/BIC code.

### Parameters

| Name     | Type       | Description                                      | Notes |
| -------- | ---------- | ------------------------------------------------ | ----- |
| **code** | **string** | SWIFT/BIC code (8 or 11 alphanumeric characters) |       |

### Return type

[**V1FinanceSwiftCodeGet200Response**](V1FinanceSwiftCodeGet200Response.md)

### Authorization

[requiems-api-key](../README.md#requiems-api-key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                                                  | Response headers |
| ----------- | ------------------------------------------------------------ | ---------------- |
| **200**     | Successful response                                          | -                |
| **400**     | Invalid SWIFT/BIC format (must be 8 or 11 valid characters). | -                |
| **404**     | SWIFT/BIC code not found in the dataset.                     | -                |
| **500**     | Unexpected server error.                                     | -                |

[[Back to top]](#)
[[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)

<a id="v1financeswiftget"></a>

# **V1FinanceSwiftGet**

> V1HealthExercisesRandomGet200Response V1FinanceSwiftGet (string countryCode =
> null, string bankCode = null, string q = null, int limit = null, int offset =
> null)

List SWIFT Codes

List SWIFT records with optional filters and pagination.

### Parameters

| Name            | Type       | Description                                                 | Notes      |
| --------------- | ---------- | ----------------------------------------------------------- | ---------- |
| **countryCode** | **string** | Optional 2-letter country code filter (e.g. DE, US)         | [optional] |
| **bankCode**    | **string** | Optional 4-letter bank code filter (e.g. DEUT)              | [optional] |
| **q**           | **string** | Optional text search across swift_code, bank_name, and city | [optional] |
| **limit**       | **int**    | Max rows to return (default 50, max 200)                    | [optional] |
| **offset**      | **int**    | Number of rows to skip (default 0)                          | [optional] |

### Return type

[**V1HealthExercisesRandomGet200Response**](V1HealthExercisesRandomGet200Response.md)

### Authorization

[requiems-api-key](../README.md#requiems-api-key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                             | Response headers |
| ----------- | --------------------------------------- | ---------------- |
| **200**     | Successful response                     | -                |
| **400**     | Invalid filter or pagination parameter. | -                |
| **500**     | Unexpected server error.                | -                |

[[Back to top]](#)
[[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)
