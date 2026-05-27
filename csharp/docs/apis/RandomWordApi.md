# Org.OpenAPITools.Api.RandomWordApi

All URIs are relative to _https://api.requiems.xyz_

| Method                                                            | HTTP request                  | Description     |
| ----------------------------------------------------------------- | ----------------------------- | --------------- |
| [**V1TextWordsRandomGet**](RandomWordApi.md#v1textwordsrandomget) | **GET** /v1/text/words/random | Get Random Word |

<a id="v1textwordsrandomget"></a>

# **V1TextWordsRandomGet**

> V1TextWordsRandomGet200Response V1TextWordsRandomGet ()

Get Random Word

Returns a random word with its definition and part of speech

### Parameters

This endpoint does not need any parameter.

### Return type

[**V1TextWordsRandomGet200Response**](V1TextWordsRandomGet200Response.md)

### Authorization

[requiems-api-key](../README.md#requiems-api-key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                        | Response headers |
| ----------- | ---------------------------------- | ---------------- |
| **200**     | Successful response                | -                |
| **503**     | No words available in the database | -                |

[[Back to top]](#)
[[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)
