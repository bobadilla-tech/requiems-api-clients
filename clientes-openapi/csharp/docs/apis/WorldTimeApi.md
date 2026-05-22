# Org.OpenAPITools.Api.WorldTimeApi

All URIs are relative to *https://api.requiems.xyz*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**V1PlacesTimeTimezoneGet**](WorldTimeApi.md#v1placestimetimezoneget) | **GET** /v1/places/time/{timezone} | Get Current Time by Timezone |

<a id="v1placestimetimezoneget"></a>
# **V1PlacesTimeTimezoneGet**
> V1PlacesTimeTimezoneGet200Response V1PlacesTimeTimezoneGet (string timezone)

Get Current Time by Timezone

Returns the current time for the given IANA timezone identifier. The timezone is supplied as a path parameter (e.g. `America/New_York`, `Europe/London`, `UTC`).


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **timezone** | **string** | IANA timezone identifier (e.g. &#39;America/New_York&#39;, &#39;Europe/London&#39;, &#39;Asia/Kolkata&#39;) |  |

### Return type

[**V1PlacesTimeTimezoneGet200Response**](V1PlacesTimeTimezoneGet200Response.md)

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

