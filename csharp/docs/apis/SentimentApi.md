# Org.OpenAPITools.Api.SentimentApi

All URIs are relative to _https://api.requiems.xyz_

| Method                                                         | HTTP request                | Description       |
| -------------------------------------------------------------- | --------------------------- | ----------------- |
| [**V1TextSentimentPost**](SentimentApi.md#v1textsentimentpost) | **POST** /v1/text/sentiment | Analyze Sentiment |

<a id="v1textsentimentpost"></a>

# **V1TextSentimentPost**

> V1TextSentimentPost200Response V1TextSentimentPost (V1TextSentimentPostRequest
> v1TextSentimentPostRequest)

Analyze Sentiment

Analyzes the sentiment of the provided text and returns a classification,
confidence score, and a full breakdown across all three sentiment classes.

### Parameters

| Name                           | Type                                                            | Description | Notes |
| ------------------------------ | --------------------------------------------------------------- | ----------- | ----- |
| **v1TextSentimentPostRequest** | [**V1TextSentimentPostRequest**](V1TextSentimentPostRequest.md) |             |       |

### Return type

[**V1TextSentimentPost200Response**](V1TextSentimentPost200Response.md)

### Authorization

[requiems-api-key](../README.md#requiems-api-key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description          | Response headers |
| ----------- | -------------------- | ---------------- |
| **200**     | Successful response  | -                |
| **422**     | unprocessable_entity | -                |

[[Back to top]](#)
[[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)
