# Org.OpenAPITools.Api.DisposableEmailApi

All URIs are relative to *https://api.requiems.xyz*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**V1NetworkingDisposableBatchPost**](DisposableEmailApi.md#v1networkingdisposablebatchpost) | **POST** /v1/networking/disposable/batch | Check Batch Emails |
| [**V1NetworkingDisposableCheckPost**](DisposableEmailApi.md#v1networkingdisposablecheckpost) | **POST** /v1/networking/disposable/check | Check Single Email |
| [**V1NetworkingDisposableDomainDomainGet**](DisposableEmailApi.md#v1networkingdisposabledomaindomainget) | **GET** /v1/networking/disposable/domain/{domain} | Check Domain |
| [**V1NetworkingDisposableDomainsGet**](DisposableEmailApi.md#v1networkingdisposabledomainsget) | **GET** /v1/networking/disposable/domains | List Domains (Paginated) |
| [**V1NetworkingDisposableStatsGet**](DisposableEmailApi.md#v1networkingdisposablestatsget) | **GET** /v1/networking/disposable/stats | Get Statistics |

<a id="v1networkingdisposablebatchpost"></a>
# **V1NetworkingDisposableBatchPost**
> V1NetworkingDisposableBatchPost200Response V1NetworkingDisposableBatchPost (V1NetworkingDisposableBatchPostRequest v1NetworkingDisposableBatchPostRequest)

Check Batch Emails

Validate multiple email addresses in a single request (max 100 emails)


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **v1NetworkingDisposableBatchPostRequest** | [**V1NetworkingDisposableBatchPostRequest**](V1NetworkingDisposableBatchPostRequest.md) |  |  |

### Return type

[**V1NetworkingDisposableBatchPost200Response**](V1NetworkingDisposableBatchPost200Response.md)

### Authorization

[requiems-api-key](../README.md#requiems-api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |
| **400** | The request body is missing or malformed; The emails field is missing; Too many emails in the request |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="v1networkingdisposablecheckpost"></a>
# **V1NetworkingDisposableCheckPost**
> V1NetworkingDisposableCheckPost200Response V1NetworkingDisposableCheckPost (V1NetworkingDisposableCheckPostRequest v1NetworkingDisposableCheckPostRequest)

Check Single Email

Validate whether an email address uses a disposable domain


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **v1NetworkingDisposableCheckPostRequest** | [**V1NetworkingDisposableCheckPostRequest**](V1NetworkingDisposableCheckPostRequest.md) |  |  |

### Return type

[**V1NetworkingDisposableCheckPost200Response**](V1NetworkingDisposableCheckPost200Response.md)

### Authorization

[requiems-api-key](../README.md#requiems-api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |
| **400** | The request body is missing or malformed; The email address format is invalid |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="v1networkingdisposabledomaindomainget"></a>
# **V1NetworkingDisposableDomainDomainGet**
> V1NetworkingDisposableDomainDomainGet200Response V1NetworkingDisposableDomainDomainGet (string domain)

Check Domain

Check if a specific domain is in the disposable blocklist


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **domain** | **string** | The domain to check |  |

### Return type

[**V1NetworkingDisposableDomainDomainGet200Response**](V1NetworkingDisposableDomainDomainGet200Response.md)

### Authorization

[requiems-api-key](../README.md#requiems-api-key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |
| **400** | The domain parameter is missing |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="v1networkingdisposabledomainsget"></a>
# **V1NetworkingDisposableDomainsGet**
> V1NetworkingDisposableDomainsGet200Response V1NetworkingDisposableDomainsGet (int page = null, int perPage = null)

List Domains (Paginated)

Get a paginated list of all disposable domains in the blocklist


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **page** | **int** | Page number (default: 1) | [optional]  |
| **perPage** | **int** | Items per page (default: 100, max: 1000) | [optional]  |

### Return type

[**V1NetworkingDisposableDomainsGet200Response**](V1NetworkingDisposableDomainsGet200Response.md)

### Authorization

[requiems-api-key](../README.md#requiems-api-key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="v1networkingdisposablestatsget"></a>
# **V1NetworkingDisposableStatsGet**
> V1NetworkingDisposableStatsGet200Response V1NetworkingDisposableStatsGet ()

Get Statistics

Get statistics about the disposable email blocklist


### Parameters
This endpoint does not need any parameter.
### Return type

[**V1NetworkingDisposableStatsGet200Response**](V1NetworkingDisposableStatsGet200Response.md)

### Authorization

[requiems-api-key](../README.md#requiems-api-key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

