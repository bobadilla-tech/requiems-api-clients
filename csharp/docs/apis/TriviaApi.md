# Org.OpenAPITools.Api.TriviaApi

All URIs are relative to _https://api.requiems.xyz_

| Method                                                                | HTTP request                     | Description         |
| --------------------------------------------------------------------- | -------------------------------- | ------------------- |
| [**V1EntertainmentTriviaGet**](TriviaApi.md#v1entertainmenttriviaget) | **GET** /v1/entertainment/trivia | Get Trivia Question |

<a id="v1entertainmenttriviaget"></a>

# **V1EntertainmentTriviaGet**

> V1EntertainmentTriviaGet200Response V1EntertainmentTriviaGet (string category
> = null, string difficulty = null)

Get Trivia Question

Returns a random trivia question with multiple-choice answers. Use the optional
category and difficulty query parameters to filter the question pool.

### Parameters

| Name           | Type       | Description                                                                                                           | Notes      |
| -------------- | ---------- | --------------------------------------------------------------------------------------------------------------------- | ---------- |
| **category**   | **string** | Filter by category. One of: science, history, geography, sports, music, movies, literature, math, technology, nature. | [optional] |
| **difficulty** | **string** | Filter by difficulty. One of: easy, medium, hard.                                                                     | [optional] |

### Return type

[**V1EntertainmentTriviaGet200Response**](V1EntertainmentTriviaGet200Response.md)

### Authorization

[requiems-api-key](../README.md#requiems-api-key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                                                      | Response headers |
| ----------- | ---------------------------------------------------------------- | ---------------- |
| **200**     | Successful response                                              | -                |
| **400**     | An invalid category or difficulty value was provided             | -                |
| **401**     | Missing API key                                                  | -                |
| **403**     | Invalid or revoked API key                                       | -                |
| **404**     | No questions match the given category and difficulty combination | -                |

[[Back to top]](#)
[[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)
