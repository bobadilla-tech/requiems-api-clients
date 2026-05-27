# Org.OpenAPITools.Api.HoroscopeApi

All URIs are relative to _https://api.requiems.xyz_

| Method                                                                                 | HTTP request                               | Description         |
| -------------------------------------------------------------------------------------- | ------------------------------------------ | ------------------- |
| [**V1EntertainmentHoroscopeSignGet**](HoroscopeApi.md#v1entertainmenthoroscopesignget) | **GET** /v1/entertainment/horoscope/{sign} | Get Daily Horoscope |

<a id="v1entertainmenthoroscopesignget"></a>

# **V1EntertainmentHoroscopeSignGet**

> V1EntertainmentHoroscopeSignGet200Response V1EntertainmentHoroscopeSignGet
> (string sign)

Get Daily Horoscope

Returns a daily horoscope reading for the specified zodiac sign.

### Parameters

| Name     | Type       | Description                                                                                                                                           | Notes |
| -------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----- |
| **sign** | **string** | Zodiac sign (case-insensitive). Supported values: aries, taurus, gemini, cancer, leo, virgo, libra, scorpio, sagittarius, capricorn, aquarius, pisces |       |

### Return type

[**V1EntertainmentHoroscopeSignGet200Response**](V1EntertainmentHoroscopeSignGet200Response.md)

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
