# Org.OpenAPITools.Api.SudokuApi

All URIs are relative to _https://api.requiems.xyz_

| Method                                                                            | HTTP request                            | Description                   |
| --------------------------------------------------------------------------------- | --------------------------------------- | ----------------------------- |
| [**V1EntertainmentSudokuBatchPost**](SudokuApi.md#v1entertainmentsudokubatchpost) | **POST** /v1/entertainment/sudoku/batch | Batch Generate Sudoku Puzzles |
| [**V1EntertainmentSudokuGet**](SudokuApi.md#v1entertainmentsudokuget)             | **GET** /v1/entertainment/sudoku        | Get Sudoku Puzzle             |

<a id="v1entertainmentsudokubatchpost"></a>

# **V1EntertainmentSudokuBatchPost**

> V1EntertainmentSudokuBatchPost200Response V1EntertainmentSudokuBatchPost
> (V1EntertainmentSudokuBatchPostRequest v1EntertainmentSudokuBatchPostRequest)

Batch Generate Sudoku Puzzles

Generate up to 20 Sudoku puzzles in a single request. Results are returned in
the same order as the input array. Each puzzle in the batch counts as one unit
of API usage.

### Parameters

| Name                                      | Type                                                                                  | Description | Notes |
| ----------------------------------------- | ------------------------------------------------------------------------------------- | ----------- | ----- |
| **v1EntertainmentSudokuBatchPostRequest** | [**V1EntertainmentSudokuBatchPostRequest**](V1EntertainmentSudokuBatchPostRequest.md) |             |       |

### Return type

[**V1EntertainmentSudokuBatchPost200Response**](V1EntertainmentSudokuBatchPost200Response.md)

### Authorization

[requiems-api-key](../README.md#requiems-api-key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description                                                                                                  | Response headers |
| ----------- | ------------------------------------------------------------------------------------------------------------ | ---------------- |
| **200**     | Successful response                                                                                          | -                |
| **400**     | The request body is missing or contains malformed JSON.                                                      | -                |
| **401**     | Missing API key                                                                                              | -                |
| **403**     | Invalid or revoked API key                                                                                   | -                |
| **422**     | The puzzles array is missing, empty, exceeds 20 items, or contains a value other than easy, medium, or hard. | -                |

[[Back to top]](#)
[[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)

<a id="v1entertainmentsudokuget"></a>

# **V1EntertainmentSudokuGet**

> V1EntertainmentSudokuGet200Response V1EntertainmentSudokuGet (string
> difficulty = null)

Get Sudoku Puzzle

Returns a randomly generated Sudoku puzzle and its solution. Difficulty defaults
to medium when not specified.

### Parameters

| Name           | Type       | Description                                                              | Notes      |
| -------------- | ---------- | ------------------------------------------------------------------------ | ---------- |
| **difficulty** | **string** | Puzzle difficulty level. One of: easy, medium, hard. Defaults to medium. | [optional] |

### Return type

[**V1EntertainmentSudokuGet200Response**](V1EntertainmentSudokuGet200Response.md)

### Authorization

[requiems-api-key](../README.md#requiems-api-key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                                                  | Response headers |
| ----------- | ------------------------------------------------------------ | ---------------- |
| **200**     | Successful response                                          | -                |
| **400**     | The difficulty parameter is not one of easy, medium, or hard | -                |
| **401**     | Missing API key                                              | -                |
| **403**     | Invalid or revoked API key                                   | -                |

[[Back to top]](#)
[[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)
