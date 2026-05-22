# Org.OpenAPITools.Api.EmojiApi

All URIs are relative to *https://api.requiems.xyz*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**V1EntertainmentEmojiNameGet**](EmojiApi.md#v1entertainmentemojinameget) | **GET** /v1/entertainment/emoji/{name} | Get Emoji by Name |
| [**V1EntertainmentEmojiRandomGet**](EmojiApi.md#v1entertainmentemojirandomget) | **GET** /v1/entertainment/emoji/random | Get Random Emoji |
| [**V1EntertainmentEmojiSearchGet**](EmojiApi.md#v1entertainmentemojisearchget) | **GET** /v1/entertainment/emoji/search | Search Emoji |

<a id="v1entertainmentemojinameget"></a>
# **V1EntertainmentEmojiNameGet**
> V1EntertainmentEmojiNameGet200Response V1EntertainmentEmojiNameGet (string name)

Get Emoji by Name

Returns a specific emoji by its CLDR snake_case name. The name is case-insensitive.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **name** | **string** | CLDR snake_case emoji name (e.g. grinning_face, thumbs_up) |  |

### Return type

[**V1EntertainmentEmojiNameGet200Response**](V1EntertainmentEmojiNameGet200Response.md)

### Authorization

[requiems-api-key](../README.md#requiems-api-key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |
| **404** | No emoji found with the given name. |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="v1entertainmentemojirandomget"></a>
# **V1EntertainmentEmojiRandomGet**
> V1EntertainmentEmojiRandomGet200Response V1EntertainmentEmojiRandomGet ()

Get Random Emoji

Returns a randomly selected emoji with its full metadata.


### Parameters
This endpoint does not need any parameter.
### Return type

[**V1EntertainmentEmojiRandomGet200Response**](V1EntertainmentEmojiRandomGet200Response.md)

### Authorization

[requiems-api-key](../README.md#requiems-api-key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="v1entertainmentemojisearchget"></a>
# **V1EntertainmentEmojiSearchGet**
> V1EntertainmentEmojiSearchGet200Response V1EntertainmentEmojiSearchGet (string q)

Search Emoji

Search for emojis whose name or category contains the given query string (case-insensitive). Returns a list of all matches.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **q** | **string** | Search term to match against emoji names and categories (e.g. happy, heart, food) |  |

### Return type

[**V1EntertainmentEmojiSearchGet200Response**](V1EntertainmentEmojiSearchGet200Response.md)

### Authorization

[requiems-api-key](../README.md#requiems-api-key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |
| **400** | The q query parameter is missing or empty. |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

