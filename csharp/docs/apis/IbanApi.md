# Org.OpenAPITools.Api.IbanApi

All URIs are relative to _https://api.requiems.xyz_

| Method                                                          | HTTP request                    | Description          |
| --------------------------------------------------------------- | ------------------------------- | -------------------- |
| [**V1FinanceIbanBatchPost**](IbanApi.md#v1financeibanbatchpost) | **POST** /v1/finance/iban/batch | Batch Validate IBANs |
| [**V1FinanceIbanIbanGet**](IbanApi.md#v1financeibanibanget)     | **GET** /v1/finance/iban/{iban} | Validate IBAN        |

<a id="v1financeibanbatchpost"></a>

# **V1FinanceIbanBatchPost**

> V1FinanceIbanBatchPost200Response V1FinanceIbanBatchPost
> (V1FinanceIbanBatchPostRequest v1FinanceIbanBatchPostRequest)

Batch Validate IBANs

Validates up to 50 iban numbers in a single request. Results are returned in the
same order as the input.

### Parameters

| Name                              | Type                                                                  | Description | Notes |
| --------------------------------- | --------------------------------------------------------------------- | ----------- | ----- |
| **v1FinanceIbanBatchPostRequest** | [**V1FinanceIbanBatchPostRequest**](V1FinanceIbanBatchPostRequest.md) |             |       |

### Return type

[**V1FinanceIbanBatchPost200Response**](V1FinanceIbanBatchPost200Response.md)

### Authorization

[requiems-api-key](../README.md#requiems-api-key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description                                                          | Response headers |
| ----------- | -------------------------------------------------------------------- | ---------------- |
| **200**     | Successful response                                                  | -                |
| **422**     | The numbers array is missing, empty, or contains more than 50 items. | -                |

[[Back to top]](#)
[[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)

<a id="v1financeibanibanget"></a>

# **V1FinanceIbanIbanGet**

> V1FinanceIbanIbanGet200Response V1FinanceIbanIbanGet (string iban)

Validate IBAN

Validates an IBAN and returns the country, bank code, and account number. Spaces
in the input are stripped automatically. Always returns HTTP 200 — check the
valid field to determine whether the IBAN is valid.

### Parameters

| Name     | Type       | Description                                                  | Notes |
| -------- | ---------- | ------------------------------------------------------------ | ----- |
| **iban** | **string** | The IBAN to validate. Spaces are stripped. Case-insensitive. |       |

### Return type

[**V1FinanceIbanIbanGet200Response**](V1FinanceIbanIbanGet200Response.md)

### Authorization

[requiems-api-key](../README.md#requiems-api-key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                                          | Response headers |
| ----------- | ---------------------------------------------------- | ---------------- |
| **200**     | Successful response                                  | -                |
| **500**     | Unexpected server error (e.g. database unreachable). | -                |

[[Back to top]](#)
[[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)
