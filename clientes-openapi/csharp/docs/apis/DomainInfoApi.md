# Org.OpenAPITools.Api.DomainInfoApi

All URIs are relative to *https://api.requiems.xyz*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**V1NetworkingDomainDomainGet**](DomainInfoApi.md#v1networkingdomaindomainget) | **GET** /v1/networking/domain/{domain} | Get Domain Info |

<a id="v1networkingdomaindomainget"></a>
# **V1NetworkingDomainDomainGet**
> V1NetworkingDomainDomainGet200Response V1NetworkingDomainDomainGet (string domain)

Get Domain Info

Returns DNS records and availability status for the given domain.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **domain** | **string** | The domain to look up (e.g. example.com) |  |

### Return type

[**V1NetworkingDomainDomainGet200Response**](V1NetworkingDomainDomainGet200Response.md)

### Authorization

[requiems-api-key](../README.md#requiems-api-key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |
| **400** | The domain parameter is not a valid hostname (e.g. missing TLD, invalid characters, or leading/trailing hyphens). |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

