# Org.OpenAPITools.Api.CounterApi

All URIs are relative to *https://api.requiems.xyz*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**V1TechnologyCounterNamespaceGet**](CounterApi.md#v1technologycounternamespaceget) | **GET** /v1/technology/counter/{namespace} | Get Counter Value |
| [**V1TechnologyCounterNamespacePost**](CounterApi.md#v1technologycounternamespacepost) | **POST** /v1/technology/counter/{namespace} | Increment Counter |

<a id="v1technologycounternamespaceget"></a>
# **V1TechnologyCounterNamespaceGet**
> V1TechnologyCounterNamespaceGet200Response V1TechnologyCounterNamespaceGet (string varNamespace)

Get Counter Value

Get the current value of a counter without incrementing it


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **varNamespace** | **string** | Counter namespace (1-64 chars: alphanumeric, hyphen, underscore) |  |

### Return type

[**V1TechnologyCounterNamespaceGet200Response**](V1TechnologyCounterNamespaceGet200Response.md)

### Authorization

[requiems-api-key](../README.md#requiems-api-key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |
| **400** | Invalid namespace: must be 1–64 chars, alphanumeric, hyphen or underscore only |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="v1technologycounternamespacepost"></a>
# **V1TechnologyCounterNamespacePost**
> V1TechnologyCounterNamespacePost200Response V1TechnologyCounterNamespacePost (string varNamespace)

Increment Counter

Atomically increment a counter in the specified namespace and return the new value


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **varNamespace** | **string** | Counter namespace (1-64 chars: alphanumeric, hyphen, underscore) |  |

### Return type

[**V1TechnologyCounterNamespacePost200Response**](V1TechnologyCounterNamespacePost200Response.md)

### Authorization

[requiems-api-key](../README.md#requiems-api-key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |
| **400** | Invalid namespace: must be 1–64 chars, alphanumeric, hyphen or underscore only |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

