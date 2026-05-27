# Org.OpenAPITools.Api.ProfanityApi

All URIs are relative to *https://api.requiems.xyz*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**V1TextProfanityPost**](ProfanityApi.md#v1textprofanitypost) | **POST** /v1/text/profanity | Check Profanity |

<a id="v1textprofanitypost"></a>
# **V1TextProfanityPost**
> V1TextProfanityPost200Response V1TextProfanityPost (V1TextProfanityPostRequest v1TextProfanityPostRequest)

Check Profanity

Checks text for profanity, returning a censored version and the list of flagged words.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **v1TextProfanityPostRequest** | [**V1TextProfanityPostRequest**](V1TextProfanityPostRequest.md) |  |  |

### Return type

[**V1TextProfanityPost200Response**](V1TextProfanityPost200Response.md)

### Authorization

[requiems-api-key](../README.md#requiems-api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |
| **400** | The request body is missing or malformed. |  -  |
| **422** | The text field is missing or empty. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

