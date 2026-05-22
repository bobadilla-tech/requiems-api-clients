# Org.OpenAPITools.Api.WhoisApi

All URIs are relative to *https://api.requiems.xyz*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**V1NetworkingWhoisDomainGet**](WhoisApi.md#v1networkingwhoisdomainget) | **GET** /v1/networking/whois/{domain} | WHOIS Lookup |

<a id="v1networkingwhoisdomainget"></a>
# **V1NetworkingWhoisDomainGet**
> V1NetworkingWhoisDomainGet200Response V1NetworkingWhoisDomainGet (string domain)

WHOIS Lookup

Returns WHOIS registration information for a domain name.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **domain** | **string** | The domain name to look up (e.g. example.com) |  |

### Return type

[**V1NetworkingWhoisDomainGet200Response**](V1NetworkingWhoisDomainGet200Response.md)

### Authorization

[requiems-api-key](../README.md#requiems-api-key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |
| **400** | The domain name format is invalid. |  -  |
| **404** | No WHOIS record was found for the domain. |  -  |
| **500** | Unexpected server error or upstream WHOIS query failure. |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

