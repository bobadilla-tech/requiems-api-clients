# Org.OpenAPITools.Api.GeocodeApi

All URIs are relative to *https://api.requiems.xyz*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**V1PlacesGeocodeGet**](GeocodeApi.md#v1placesgeocodeget) | **GET** /v1/places/geocode | Geocode Address |
| [**V1PlacesReverseGeocodeGet**](GeocodeApi.md#v1placesreversegeocodeget) | **GET** /v1/places/reverse-geocode | Reverse Geocode |

<a id="v1placesgeocodeget"></a>
# **V1PlacesGeocodeGet**
> V1PlacesGeocodeGet200Response V1PlacesGeocodeGet (string address)

Geocode Address

Converts a free-text address into latitude and longitude coordinates.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **address** | **string** | The address to geocode (street, city, country, or any combination) |  |

### Return type

[**V1PlacesGeocodeGet200Response**](V1PlacesGeocodeGet200Response.md)

### Authorization

[requiems-api-key](../README.md#requiems-api-key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |
| **400** | The address parameter is missing. |  -  |
| **404** | No results found for the given address. |  -  |
| **503** | The geocoding service is temporarily unavailable. |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="v1placesreversegeocodeget"></a>
# **V1PlacesReverseGeocodeGet**
> V1PlacesReverseGeocodeGet200Response V1PlacesReverseGeocodeGet (decimal lat, decimal lon)

Reverse Geocode

Converts geographic coordinates into a human-readable address.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **lat** | **decimal** | Latitude of the location (-90 to 90) |  |
| **lon** | **decimal** | Longitude of the location (-180 to 180) |  |

### Return type

[**V1PlacesReverseGeocodeGet200Response**](V1PlacesReverseGeocodeGet200Response.md)

### Authorization

[requiems-api-key](../README.md#requiems-api-key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |
| **400** | lat or lon is missing or out of range (lat: -90..90, lon: -180..180). |  -  |
| **404** | No address found for the given coordinates. |  -  |
| **503** | The geocoding service is temporarily unavailable. |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

