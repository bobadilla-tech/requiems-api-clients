# Org.OpenAPITools.Api.IpAsnApi

All URIs are relative to *https://api.requiems.xyz*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**V1NetworkingIpAsnGet**](IpAsnApi.md#v1networkingipasnget) | **GET** /v1/networking/ip/asn | Lookup ASN (Caller IP) |
| [**V1NetworkingIpAsnIpGet**](IpAsnApi.md#v1networkingipasnipget) | **GET** /v1/networking/ip/asn/{ip} | Lookup ASN for IP |

<a id="v1networkingipasnget"></a>
# **V1NetworkingIpAsnGet**
> V1NetworkingIpAsnGet200Response V1NetworkingIpAsnGet ()

Lookup ASN (Caller IP)

Look up ASN, organization, ISP, and network details for the requesting client's IP address. Useful when you want information about the user making the request without specifying an IP explicitly.


### Parameters
This endpoint does not need any parameter.
### Return type

[**V1NetworkingIpAsnGet200Response**](V1NetworkingIpAsnGet200Response.md)

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

<a id="v1networkingipasnipget"></a>
# **V1NetworkingIpAsnIpGet**
> V1NetworkingIpAsnIpGet200Response V1NetworkingIpAsnIpGet (string ip)

Lookup ASN for IP

Look up ASN, organization, ISP, and network details for a specific IP address.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **ip** | **string** | The IP address to look up (supports IPv4 and IPv6) |  |

### Return type

[**V1NetworkingIpAsnIpGet200Response**](V1NetworkingIpAsnIpGet200Response.md)

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

