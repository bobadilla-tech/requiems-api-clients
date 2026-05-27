# Org.OpenAPITools.Api.TimezoneApi

All URIs are relative to _https://api.requiems.xyz_

| Method                                                        | HTTP request                | Description  |
| ------------------------------------------------------------- | --------------------------- | ------------ |
| [**V1PlacesTimezoneGet**](TimezoneApi.md#v1placestimezoneget) | **GET** /v1/places/timezone | Get Timezone |

<a id="v1placestimezoneget"></a>

# **V1PlacesTimezoneGet**

> V1PlacesTimezoneGet200Response V1PlacesTimezoneGet (string lat = null, string
> lon = null, string city = null)

Get Timezone

Returns timezone information for the given coordinates or city name. Provide
either `city` or both `lat` and `lon`.

### Parameters

| Name     | Type       | Description                                                                                                    | Notes      |
| -------- | ---------- | -------------------------------------------------------------------------------------------------------------- | ---------- |
| **lat**  | **string** | Latitude of the location (-90 to 90). Required when using coordinate-based lookup.                             | [optional] |
| **lon**  | **string** | Longitude of the location (-180 to 180). Required when using coordinate-based lookup.                          | [optional] |
| **city** | **string** | City name for city-based lookup (e.g. &#39;Tokyo&#39;, &#39;London&#39;). Required when not using coordinates. | [optional] |

### Return type

[**V1PlacesTimezoneGet200Response**](V1PlacesTimezoneGet200Response.md)

### Authorization

[requiems-api-key](../README.md#requiems-api-key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description         | Response headers |
| ----------- | ------------------- | ---------------- |
| **200**     | Successful response | -                |

[[Back to top]](#)
[[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)
