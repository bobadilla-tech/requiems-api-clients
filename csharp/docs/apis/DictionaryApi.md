# Org.OpenAPITools.Api.DictionaryApi

All URIs are relative to *https://api.requiems.xyz*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**V1TextDictionaryWordGet**](DictionaryApi.md#v1textdictionarywordget) | **GET** /v1/text/dictionary/{word} | Dictionary Lookup |

<a id="v1textdictionarywordget"></a>
# **V1TextDictionaryWordGet**
> V1TextDictionaryWordGet200Response V1TextDictionaryWordGet (string word)

Dictionary Lookup

Returns the definition, phonetics, examples, and synonyms for the given word.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **word** | **string** | The word to look up in the dictionary |  |

### Return type

[**V1TextDictionaryWordGet200Response**](V1TextDictionaryWordGet200Response.md)

### Authorization

[requiems-api-key](../README.md#requiems-api-key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |
| **400** | The word path parameter is missing. |  -  |
| **404** | The word was not found in the dictionary dataset. |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

