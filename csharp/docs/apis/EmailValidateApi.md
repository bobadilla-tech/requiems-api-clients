# Org.OpenAPITools.Api.EmailValidateApi

All URIs are relative to *https://api.requiems.xyz*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**V1ValidationEmailBatchPost**](EmailValidateApi.md#v1validationemailbatchpost) | **POST** /v1/validation/email/batch | Validate Emails (Batch) |
| [**V1ValidationEmailPost**](EmailValidateApi.md#v1validationemailpost) | **POST** /v1/validation/email | Validate Email |

<a id="v1validationemailbatchpost"></a>
# **V1ValidationEmailBatchPost**
> V1ValidationEmailBatchPost200Response V1ValidationEmailBatchPost (V1ValidationEmailBatchPostRequest v1ValidationEmailBatchPostRequest)

Validate Emails (Batch)

Validates up to 50 email addresses in a single request. Each email is processed independently and returns a full validation breakdown (syntax, MX record, disposable check, normalization, and typo suggestion). Invalid emails do not fail the request. Billing: 1 credit per email.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **v1ValidationEmailBatchPostRequest** | [**V1ValidationEmailBatchPostRequest**](V1ValidationEmailBatchPostRequest.md) |  |  |

### Return type

[**V1ValidationEmailBatchPost200Response**](V1ValidationEmailBatchPost200Response.md)

### Authorization

[requiems-api-key](../README.md#requiems-api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |
| **400** | Invalid JSON, malformed request body, or unexpected field types. |  -  |
| **422** | Valid JSON body that fails field validation (empty array or more than 50 emails). |  -  |
| **500** | Unexpected server error |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="v1validationemailpost"></a>
# **V1ValidationEmailPost**
> V1ValidationEmailPost200Response V1ValidationEmailPost (V1ValidationEmailPostRequest v1ValidationEmailPostRequest)

Validate Email

Validates a single email address and returns a full breakdown of syntax validity, MX record status, disposable domain check, normalized form, and any typo suggestion.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **v1ValidationEmailPostRequest** | [**V1ValidationEmailPostRequest**](V1ValidationEmailPostRequest.md) |  |  |

### Return type

[**V1ValidationEmailPost200Response**](V1ValidationEmailPost200Response.md)

### Authorization

[requiems-api-key](../README.md#requiems-api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |
| **400** | The request body is missing, not valid JSON, or contains unknown fields. |  -  |
| **422** | The email field is missing from the request body. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

