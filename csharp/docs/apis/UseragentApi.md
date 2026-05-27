# Org.OpenAPITools.Api.UseragentApi

All URIs are relative to _https://api.requiems.xyz_

| Method                                                                   | HTTP request                     | Description      |
| ------------------------------------------------------------------------ | -------------------------------- | ---------------- |
| [**V1TechnologyUseragentGet**](UseragentApi.md#v1technologyuseragentget) | **GET** /v1/technology/useragent | Parse User Agent |

<a id="v1technologyuseragentget"></a>

# **V1TechnologyUseragentGet**

> V1TechnologyUseragentGet200Response V1TechnologyUseragentGet (string ua)

Parse User Agent

Parses a user agent string and returns structured information about the browser,
OS, device, and bot status.

### Parameters

| Name   | Type       | Description                     | Notes |
| ------ | ---------- | ------------------------------- | ----- |
| **ua** | **string** | The user agent string to parse. |       |

### Return type

[**V1TechnologyUseragentGet200Response**](V1TechnologyUseragentGet200Response.md)

### Authorization

[requiems-api-key](../README.md#requiems-api-key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                        | Response headers |
| ----------- | ---------------------------------- | ---------------- |
| **200**     | Successful response                | -                |
| **400**     | The ua query parameter is missing. | -                |

[[Back to top]](#)
[[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)
