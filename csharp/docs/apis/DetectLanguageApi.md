# Org.OpenAPITools.Api.DetectLanguageApi

All URIs are relative to _https://api.requiems.xyz_

| Method                                                                        | HTTP request                      | Description     |
| ----------------------------------------------------------------------------- | --------------------------------- | --------------- |
| [**V1TextDetectLanguagePost**](DetectLanguageApi.md#v1textdetectlanguagepost) | **POST** /v1/text/detect-language | Detect Language |

<a id="v1textdetectlanguagepost"></a>

# **V1TextDetectLanguagePost**

> V1TextDetectLanguagePost200Response V1TextDetectLanguagePost
> (V1TextDetectLanguagePostRequest v1TextDetectLanguagePostRequest)

Detect Language

Identifies the language of the provided text and returns the language name, ISO
639-1 code, and confidence score.

### Parameters

| Name                                | Type                                                                      | Description | Notes |
| ----------------------------------- | ------------------------------------------------------------------------- | ----------- | ----- |
| **v1TextDetectLanguagePostRequest** | [**V1TextDetectLanguagePostRequest**](V1TextDetectLanguagePostRequest.md) |             |       |

### Return type

[**V1TextDetectLanguagePost200Response**](V1TextDetectLanguagePost200Response.md)

### Authorization

[requiems-api-key](../README.md#requiems-api-key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description                               | Response headers |
| ----------- | ----------------------------------------- | ---------------- |
| **200**     | Successful response                       | -                |
| **400**     | The request body is missing or malformed. | -                |
| **422**     | The text field is missing or empty.       | -                |
| **500**     | Unexpected server error.                  | -                |

[[Back to top]](#)
[[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)
