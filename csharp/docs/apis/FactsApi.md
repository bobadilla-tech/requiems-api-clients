# Org.OpenAPITools.Api.FactsApi

All URIs are relative to *https://api.requiems.xyz*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**V1EntertainmentFactsGet**](FactsApi.md#v1entertainmentfactsget) | **GET** /v1/entertainment/facts | Get Random Fact |

<a id="v1entertainmentfactsget"></a>
# **V1EntertainmentFactsGet**
> V1EntertainmentFactsGet200Response V1EntertainmentFactsGet (string category = null)

Get Random Fact

Returns a randomly selected fact, optionally filtered by category.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **category** | **string** | Filter by category. Valid values: science, history, technology, nature, space, food | [optional]  |

### Return type

[**V1EntertainmentFactsGet200Response**](V1EntertainmentFactsGet200Response.md)

### Authorization

[requiems-api-key](../README.md#requiems-api-key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |
| **400** | bad_request |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

