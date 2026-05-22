# Org.OpenAPITools.Api.MarkdownApi

All URIs are relative to *https://api.requiems.xyz*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**V1TechnologyMarkdownPost**](MarkdownApi.md#v1technologymarkdownpost) | **POST** /v1/technology/markdown | Convert Markdown to HTML |

<a id="v1technologymarkdownpost"></a>
# **V1TechnologyMarkdownPost**
> V1TechnologyMarkdownPost200Response V1TechnologyMarkdownPost (V1TechnologyMarkdownPostRequest v1TechnologyMarkdownPostRequest)

Convert Markdown to HTML

Converts a Markdown string to HTML. Pass sanitize true to strip potentially unsafe tags like script and iframe from the output.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **v1TechnologyMarkdownPostRequest** | [**V1TechnologyMarkdownPostRequest**](V1TechnologyMarkdownPostRequest.md) |  |  |

### Return type

[**V1TechnologyMarkdownPost200Response**](V1TechnologyMarkdownPost200Response.md)

### Authorization

[requiems-api-key](../README.md#requiems-api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |
| **422** | unprocessable_entity |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

