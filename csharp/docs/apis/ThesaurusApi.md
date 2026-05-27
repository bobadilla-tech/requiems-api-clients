# Org.OpenAPITools.Api.ThesaurusApi

All URIs are relative to _https://api.requiems.xyz_

| Method                                                               | HTTP request                      | Description      |
| -------------------------------------------------------------------- | --------------------------------- | ---------------- |
| [**V1TextThesaurusWordGet**](ThesaurusApi.md#v1textthesauruswordget) | **GET** /v1/text/thesaurus/{word} | Thesaurus Lookup |

<a id="v1textthesauruswordget"></a>

# **V1TextThesaurusWordGet**

> V1TextThesaurusWordGet200Response V1TextThesaurusWordGet (string word)

Thesaurus Lookup

Returns synonyms and antonyms for the given word.

### Parameters

| Name     | Type       | Description                          | Notes |
| -------- | ---------- | ------------------------------------ | ----- |
| **word** | **string** | The word to look up in the thesaurus |       |

### Return type

[**V1TextThesaurusWordGet200Response**](V1TextThesaurusWordGet200Response.md)

### Authorization

[requiems-api-key](../README.md#requiems-api-key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                                      | Response headers |
| ----------- | ------------------------------------------------ | ---------------- |
| **200**     | Successful response                              | -                |
| **400**     | The word path parameter is missing.              | -                |
| **404**     | The word was not found in the thesaurus dataset. | -                |

[[Back to top]](#)
[[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)
