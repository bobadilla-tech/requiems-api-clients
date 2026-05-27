# Org.OpenAPITools.Api.PhoneValidationApi

All URIs are relative to _https://api.requiems.xyz_

| Method                                                                             | HTTP request                        | Description                  |
| ---------------------------------------------------------------------------------- | ----------------------------------- | ---------------------------- |
| [**V1ValidationPhoneBatchPost**](PhoneValidationApi.md#v1validationphonebatchpost) | **POST** /v1/validation/phone/batch | Batch Validate Phone Numbers |
| [**V1ValidationPhoneGet**](PhoneValidationApi.md#v1validationphoneget)             | **GET** /v1/validation/phone        | Validate Phone Number        |

<a id="v1validationphonebatchpost"></a>

# **V1ValidationPhoneBatchPost**

> V1FinanceIbanBatchPost200Response V1ValidationPhoneBatchPost
> (V1ValidationPhoneBatchPostRequest v1ValidationPhoneBatchPostRequest)

Batch Validate Phone Numbers

Validates up to 50 phone numbers in a single request. Results are returned in
the same order as the input.

### Parameters

| Name                                  | Type                                                                          | Description | Notes |
| ------------------------------------- | ----------------------------------------------------------------------------- | ----------- | ----- |
| **v1ValidationPhoneBatchPostRequest** | [**V1ValidationPhoneBatchPostRequest**](V1ValidationPhoneBatchPostRequest.md) |             |       |

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

<a id="v1validationphoneget"></a>

# **V1ValidationPhoneGet**

> V1ValidationPhoneGet200Response V1ValidationPhoneGet (string number)

Validate Phone Number

Validates a single phone number and returns its country, type, formatted
representation, carrier, and VOIP/virtual risk flags.

### Parameters

| Name       | Type       | Description                                                                              | Notes |
| ---------- | ---------- | ---------------------------------------------------------------------------------------- | ----- |
| **number** | **string** | The phone number to validate. Must include the country calling code (e.g. +12015551234). |       |

### Return type

[**V1ValidationPhoneGet200Response**](V1ValidationPhoneGet200Response.md)

### Authorization

[requiems-api-key](../README.md#requiems-api-key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                            | Response headers |
| ----------- | -------------------------------------- | ---------------- |
| **200**     | Successful response                    | -                |
| **400**     | The number query parameter is missing. | -                |

[[Back to top]](#)
[[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)
