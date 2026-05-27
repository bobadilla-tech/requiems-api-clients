# Org.OpenAPITools.Api.CitiesApi

All URIs are relative to _https://api.requiems.xyz_

| Method                                                          | HTTP request                     | Description   |
| --------------------------------------------------------------- | -------------------------------- | ------------- |
| [**V1PlacesCitiesCityGet**](CitiesApi.md#v1placescitiescityget) | **GET** /v1/places/cities/{city} | Get City Info |

<a id="v1placescitiescityget"></a>

# **V1PlacesCitiesCityGet**

> V1PlacesCitiesCityGet200Response V1PlacesCitiesCityGet (string city)

Get City Info

Returns metadata for a city by name. Lookup is case-insensitive.

### Parameters

| Name     | Type       | Description                                              | Notes |
| -------- | ---------- | -------------------------------------------------------- | ----- |
| **city** | **string** | City name to look up (e.g. london, tokyo, new york city) |       |

### Return type

[**V1PlacesCitiesCityGet200Response**](V1PlacesCitiesCityGet200Response.md)

### Authorization

[requiems-api-key](../README.md#requiems-api-key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                                      | Response headers |
| ----------- | ------------------------------------------------ | ---------------- |
| **200**     | Successful response                              | -                |
| **404**     | No city with that name was found in the dataset. | -                |
| **500**     | Unexpected server error.                         | -                |

[[Back to top]](#)
[[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)
