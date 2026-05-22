# Org.OpenAPITools.Api.Base64Api

All URIs are relative to *https://api.requiems.xyz*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**V1TechnologyBase64DecodePost**](Base64Api.md#v1technologybase64decodepost) | **POST** /v1/technology/base64/decode | Decode |
| [**V1TechnologyBase64EncodePost**](Base64Api.md#v1technologybase64encodepost) | **POST** /v1/technology/base64/encode | Encode |

<a id="v1technologybase64decodepost"></a>
# **V1TechnologyBase64DecodePost**
> V1TechnologyBase64DecodePost200Response V1TechnologyBase64DecodePost (V1TechnologyBase64DecodePostRequest v1TechnologyBase64DecodePostRequest)

Decode

Decode a Base64-encoded string back to plain text


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **v1TechnologyBase64DecodePostRequest** | [**V1TechnologyBase64DecodePostRequest**](V1TechnologyBase64DecodePostRequest.md) |  |  |

### Return type

[**V1TechnologyBase64DecodePost200Response**](V1TechnologyBase64DecodePost200Response.md)

### Authorization

[requiems-api-key](../README.md#requiems-api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |
| **400** | Missing or empty value field |  -  |
| **422** | The value is not valid Base64 and cannot be decoded |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="v1technologybase64encodepost"></a>
# **V1TechnologyBase64EncodePost**
> V1TechnologyBase64EncodePost200Response V1TechnologyBase64EncodePost (V1TechnologyBase64EncodePostRequest v1TechnologyBase64EncodePostRequest)

Encode

Encode a plain-text string to Base64


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **v1TechnologyBase64EncodePostRequest** | [**V1TechnologyBase64EncodePostRequest**](V1TechnologyBase64EncodePostRequest.md) |  |  |

### Return type

[**V1TechnologyBase64EncodePost200Response**](V1TechnologyBase64EncodePost200Response.md)

### Authorization

[requiems-api-key](../README.md#requiems-api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |
| **400** | Missing or empty value field |  -  |
| **422** | Validation constraint on the variant field (must be standard or url) |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

