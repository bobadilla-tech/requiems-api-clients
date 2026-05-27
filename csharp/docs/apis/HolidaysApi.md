# Org.OpenAPITools.Api.HolidaysApi

All URIs are relative to _https://api.requiems.xyz_

| Method                                                                    | HTTP request                       | Description        |
| ------------------------------------------------------------------------- | ---------------------------------- | ------------------ |
| [**V1PlacesHolidaysBatchPost**](HolidaysApi.md#v1placesholidaysbatchpost) | **POST** /v1/places/holidays/batch | Batch Get Holidays |
| [**V1PlacesHolidaysGet**](HolidaysApi.md#v1placesholidaysget)             | **GET** /v1/places/holidays        | Get Holidays       |

<a id="v1placesholidaysbatchpost"></a>

# **V1PlacesHolidaysBatchPost**

> V1PlacesHolidaysBatchPost200Response V1PlacesHolidaysBatchPost
> (V1PlacesHolidaysBatchPostRequest v1PlacesHolidaysBatchPostRequest)

Batch Get Holidays

Returns holidays for up to 50 (country, year) pairs in a single request. Each
pair is processed independently — if one combination has no data, it returns
found:false without failing the entire batch.

### Parameters

| Name                                 | Type                                                                        | Description | Notes |
| ------------------------------------ | --------------------------------------------------------------------------- | ----------- | ----- |
| **v1PlacesHolidaysBatchPostRequest** | [**V1PlacesHolidaysBatchPostRequest**](V1PlacesHolidaysBatchPostRequest.md) |             |       |

### Return type

[**V1PlacesHolidaysBatchPost200Response**](V1PlacesHolidaysBatchPost200Response.md)

### Authorization

[requiems-api-key](../README.md#requiems-api-key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description                                                                             | Response headers |
| ----------- | --------------------------------------------------------------------------------------- | ---------------- |
| **200**     | Successful response                                                                     | -                |
| **400**     | Malformed request body                                                                  | -                |
| **422**     | queries is missing, empty, exceeds 50 items, or contains invalid country codes or years | -                |

[[Back to top]](#)
[[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)

<a id="v1placesholidaysget"></a>

# **V1PlacesHolidaysGet**

> V1PlacesHolidaysGet200Response V1PlacesHolidaysGet (string country, int year)

Get Holidays

Returns a list of public holidays for the specified country and year

### Parameters

| Name        | Type       | Description                                                                                  | Notes |
| ----------- | ---------- | -------------------------------------------------------------------------------------------- | ----- |
| **country** | **string** | ISO 3166-1 alpha-2 country code (e.g., \&quot;US\&quot;, \&quot;GB\&quot;, \&quot;DE\&quot;) |       |
| **year**    | **int**    | Year for which to retrieve holidays (e.g., 2025)                                             |       |

### Return type

[**V1PlacesHolidaysGet200Response**](V1PlacesHolidaysGet200Response.md)

### Authorization

[requiems-api-key](../README.md#requiems-api-key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                                          | Response headers |
| ----------- | ---------------------------------------------------- | ---------------- |
| **200**     | Successful response                                  | -                |
| **400**     | Missing or invalid country code or year parameter    | -                |
| **404**     | No holidays found for the specified country and year | -                |

[[Back to top]](#)
[[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)
