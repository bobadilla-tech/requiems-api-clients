# Org.OpenAPITools.Api.PostalCodeApi

All URIs are relative to *https://api.requiems.xyz*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**V1PlacesPostalCodeGet**](PostalCodeApi.md#v1placespostalcodeget) | **GET** /v1/places/postal/{code} | Lookup Postal Code |

<a id="v1placespostalcodeget"></a>
# **V1PlacesPostalCodeGet**
> V1PlacesPostalCodeGet200Response V1PlacesPostalCodeGet (string code, string country = null)

Lookup Postal Code

Returns city, state, country, and coordinates for the given postal code.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **code** | **string** | The postal code to look up (e.g. 10001 for New York, SW1A 1AA for London) |  |
| **country** | **string** | ISO 3166-1 alpha-2 country code (default: US) | [optional]  |

### Return type

[**V1PlacesPostalCodeGet200Response**](V1PlacesPostalCodeGet200Response.md)

### Authorization

[requiems-api-key](../README.md#requiems-api-key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |
| **404** | The postal code was not found for the given country. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

