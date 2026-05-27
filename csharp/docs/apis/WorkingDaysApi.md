# Org.OpenAPITools.Api.WorkingDaysApi

All URIs are relative to _https://api.requiems.xyz_

| Method                                                                 | HTTP request                    | Description            |
| ---------------------------------------------------------------------- | ------------------------------- | ---------------------- |
| [**V1PlacesWorkingDaysGet**](WorkingDaysApi.md#v1placesworkingdaysget) | **GET** /v1/places/working-days | Calculate Working Days |

<a id="v1placesworkingdaysget"></a>

# **V1PlacesWorkingDaysGet**

> V1PlacesWorkingDaysGet200Response V1PlacesWorkingDaysGet (string from, string
> to, string country = null, string subdivision = null)

Calculate Working Days

Calculate the number of working days between two dates, optionally accounting
for country-specific holidays

### Parameters

| Name            | Type       | Description                                                                                                                                                                  | Notes      |
| --------------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **from**        | **string** | Start date in YYYY-MM-DD format (ISO 8601)                                                                                                                                   |            |
| **to**          | **string** | End date in YYYY-MM-DD format (ISO 8601). Must be &gt;&#x3D; from date.                                                                                                      |            |
| **country**     | **string** | ISO 3166-1 alpha-2 country code (e.g., \&quot;US\&quot;, \&quot;GB\&quot;, \&quot;FR\&quot;). When provided, country-specific holidays are excluded from working days count. | [optional] |
| **subdivision** | **string** | ISO 3166-2 subdivision code for state/region within the country (e.g., \&quot;NY\&quot; for New York, \&quot;CA\&quot; for California). Only used when country is provided.  | [optional] |

### Return type

[**V1PlacesWorkingDaysGet200Response**](V1PlacesWorkingDaysGet200Response.md)

### Authorization

[requiems-api-key](../README.md#requiems-api-key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                                                                                     | Response headers |
| ----------- | ----------------------------------------------------------------------------------------------- | ---------------- |
| **200**     | Successful response                                                                             | -                |
| **400**     | The from and to parameters are required, or to date is before from date, or invalid date format | -                |

[[Back to top]](#)
[[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)
