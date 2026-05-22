# Org.OpenAPITools.Api.IpInfoApi

All URIs are relative to *https://api.requiems.xyz*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**V1NetworkingIpGet**](IpInfoApi.md#v1networkingipget) | **GET** /v1/networking/ip | Get IP Info (Caller IP) |
| [**V1NetworkingIpIpGet**](IpInfoApi.md#v1networkingipipget) | **GET** /v1/networking/ip/{ip} | Get IP Info for IP |

<a id="v1networkingipget"></a>
# **V1NetworkingIpGet**
> V1NetworkingIpGet200Response V1NetworkingIpGet ()

Get IP Info (Caller IP)

Get geolocation and network information for the requesting client's IP address. Useful when you want information about the user making the request without specifying an IP explicitly.


### Parameters
This endpoint does not need any parameter.
### Return type

[**V1NetworkingIpGet200Response**](V1NetworkingIpGet200Response.md)

### Authorization

[requiems-api-key](../README.md#requiems-api-key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |
| **500** | Unexpected server error |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="v1networkingipipget"></a>
# **V1NetworkingIpIpGet**
> V1NetworkingIpIpGet200Response V1NetworkingIpIpGet (string ip)

Get IP Info for IP

Get geolocation and network information for a specific IP address.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **ip** | **string** | The IP address to look up (supports IPv4 and IPv6) |  |

### Return type

[**V1NetworkingIpIpGet200Response**](V1NetworkingIpIpGet200Response.md)

### Authorization

[requiems-api-key](../README.md#requiems-api-key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |
| **400** | The IP address is invalid |  -  |
| **500** | Unexpected server error |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

