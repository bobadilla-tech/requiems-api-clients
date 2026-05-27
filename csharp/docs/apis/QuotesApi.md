# Org.OpenAPITools.Api.QuotesApi

All URIs are relative to _https://api.requiems.xyz_

| Method                                                          | HTTP request                   | Description      |
| --------------------------------------------------------------- | ------------------------------ | ---------------- |
| [**V1TextQuotesRandomGet**](QuotesApi.md#v1textquotesrandomget) | **GET** /v1/text/quotes/random | Get Random Quote |

<a id="v1textquotesrandomget"></a>

# **V1TextQuotesRandomGet**

> V1TextQuotesRandomGet200Response V1TextQuotesRandomGet ()

Get Random Quote

Returns a random inspirational quote with author attribution

### Parameters

This endpoint does not need any parameter.

### Return type

[**V1TextQuotesRandomGet200Response**](V1TextQuotesRandomGet200Response.md)

### Authorization

[requiems-api-key](../README.md#requiems-api-key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                         | Response headers |
| ----------- | ----------------------------------- | ---------------- |
| **200**     | Successful response                 | -                |
| **503**     | No quotes available in the database | -                |

[[Back to top]](#)
[[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)
