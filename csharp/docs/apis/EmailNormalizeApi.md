# Org.OpenAPITools.Api.EmailNormalizeApi

All URIs are relative to _https://api.requiems.xyz_

| Method                                                                        | HTTP request                      | Description           |
| ----------------------------------------------------------------------------- | --------------------------------- | --------------------- |
| [**V1TextNormalizeBatchPost**](EmailNormalizeApi.md#v1textnormalizebatchpost) | **POST** /v1/text/normalize/batch | Normalize Email Batch |
| [**V1TextNormalizePost**](EmailNormalizeApi.md#v1textnormalizepost)           | **POST** /v1/text/normalize       | Normalize Email       |

<a id="v1textnormalizebatchpost"></a>

# **V1TextNormalizeBatchPost**

> V1TextNormalizeBatchPost200Response V1TextNormalizeBatchPost
> (V1TextNormalizeBatchPostRequest v1TextNormalizeBatchPostRequest)

Normalize Email Batch

Normalizes up to 100 email addresses in one request. Results are in the same
order as the input. Each item includes valid (boolean); when false, only
original and message are set. Usage is billed per email processed (see gateway
usage headers).

### Parameters

| Name                                | Type                                                                      | Description | Notes |
| ----------------------------------- | ------------------------------------------------------------------------- | ----------- | ----- |
| **v1TextNormalizeBatchPostRequest** | [**V1TextNormalizeBatchPostRequest**](V1TextNormalizeBatchPostRequest.md) |             |       |

### Return type

[**V1TextNormalizeBatchPost200Response**](V1TextNormalizeBatchPost200Response.md)

### Authorization

[requiems-api-key](../README.md#requiems-api-key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description                                                               | Response headers |
| ----------- | ------------------------------------------------------------------------- | ---------------- |
| **200**     | Successful response                                                       | -                |
| **400**     | Invalid JSON or unknown fields in the body                                | -                |
| **422**     | Missing emails, empty array, too many items, or empty string in the array | -                |

[[Back to top]](#)
[[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)

<a id="v1textnormalizepost"></a>

# **V1TextNormalizePost**

> V1TextNormalizePost200Response V1TextNormalizePost (V1TextNormalizePostRequest
> v1TextNormalizePostRequest)

Normalize Email

Normalizes a single email address and returns the canonical form together with a
breakdown of all transformations applied.

### Parameters

| Name                           | Type                                                            | Description | Notes |
| ------------------------------ | --------------------------------------------------------------- | ----------- | ----- |
| **v1TextNormalizePostRequest** | [**V1TextNormalizePostRequest**](V1TextNormalizePostRequest.md) |             |       |

### Return type

[**V1TextNormalizePost200Response**](V1TextNormalizePost200Response.md)

### Authorization

[requiems-api-key](../README.md#requiems-api-key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description                                                              | Response headers |
| ----------- | ------------------------------------------------------------------------ | ---------------- |
| **200**     | Successful response                                                      | -                |
| **400**     | The request body is missing, not valid JSON, or contains unknown fields. | -                |
| **422**     | The email field is missing or not a valid email address format.          | -                |
| **500**     | Unexpected server error.                                                 | -                |

[[Back to top]](#)
[[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)
