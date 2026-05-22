# Org.OpenAPITools.Api.SpellCheckApi

All URIs are relative to *https://api.requiems.xyz*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**V1TextSpellcheckPost**](SpellCheckApi.md#v1textspellcheckpost) | **POST** /v1/text/spellcheck | Check Spelling |

<a id="v1textspellcheckpost"></a>
# **V1TextSpellcheckPost**
> V1TextSpellcheckPost200Response V1TextSpellcheckPost (V1TextSpellcheckPostRequest v1TextSpellcheckPostRequest)

Check Spelling

Checks the input text for spelling mistakes and returns a corrected version along with per-word corrections.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **v1TextSpellcheckPostRequest** | [**V1TextSpellcheckPostRequest**](V1TextSpellcheckPostRequest.md) |  |  |

### Return type

[**V1TextSpellcheckPost200Response**](V1TextSpellcheckPost200Response.md)

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

