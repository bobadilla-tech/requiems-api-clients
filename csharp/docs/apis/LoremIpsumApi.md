# Org.OpenAPITools.Api.LoremIpsumApi

All URIs are relative to _https://api.requiems.xyz_

| Method                                                | HTTP request           | Description          |
| ----------------------------------------------------- | ---------------------- | -------------------- |
| [**V1TextLoremGet**](LoremIpsumApi.md#v1textloremget) | **GET** /v1/text/lorem | Generate Lorem Ipsum |

<a id="v1textloremget"></a>

# **V1TextLoremGet**

> V1TextLoremGet200Response V1TextLoremGet (int paragraphs = null, int sentences
> = null)

Generate Lorem Ipsum

Generate Lorem Ipsum placeholder text with customizable length and format

### Parameters

| Name           | Type    | Description                              | Notes      |
| -------------- | ------- | ---------------------------------------- | ---------- |
| **paragraphs** | **int** | Number of paragraphs to generate (1-20)  | [optional] |
| **sentences**  | **int** | Number of sentences per paragraph (1-20) | [optional] |

### Return type

[**V1TextLoremGet200Response**](V1TextLoremGet200Response.md)

### Authorization

[requiems-api-key](../README.md#requiems-api-key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                                                                                   | Response headers |
| ----------- | --------------------------------------------------------------------------------------------- | ---------------- |
| **200**     | Successful response                                                                           | -                |
| **400**     | The paragraphs parameter is out of valid range; The sentences parameter is out of valid range | -                |

[[Back to top]](#)
[[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)
