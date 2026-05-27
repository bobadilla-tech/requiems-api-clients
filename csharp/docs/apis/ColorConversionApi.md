# Org.OpenAPITools.Api.ColorConversionApi

All URIs are relative to _https://api.requiems.xyz_

| Method                                                                 | HTTP request                 | Description   |
| ---------------------------------------------------------------------- | ---------------------------- | ------------- |
| [**V1TechnologyColorGet**](ColorConversionApi.md#v1technologycolorget) | **GET** /v1/technology/color | Convert Color |

<a id="v1technologycolorget"></a>

# **V1TechnologyColorGet**

> V1TechnologyColorGet200Response V1TechnologyColorGet (string from, string to,
> string value)

Convert Color

Convert a color value from one format to another. The response always includes
all four formats.

### Parameters

| Name      | Type       | Description                                                                                            | Notes |
| --------- | ---------- | ------------------------------------------------------------------------------------------------------ | ----- |
| **from**  | **string** | Source color format: hex, rgb, hsl, or cmyk                                                            |       |
| **to**    | **string** | Target color format: hex, rgb, hsl, or cmyk                                                            |       |
| **value** | **string** | Color value in the source format (e.g. #ff5733, rgb(255,87,51), hsl(11,100%,60%), cmyk(0%,66%,80%,0%)) |       |

### Return type

[**V1TechnologyColorGet200Response**](V1TechnologyColorGet200Response.md)

### Authorization

[requiems-api-key](../README.md#requiems-api-key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                                                                                                      | Response headers |
| ----------- | ---------------------------------------------------------------------------------------------------------------- | ---------------- |
| **200**     | Successful response                                                                                              | -                |
| **400**     | One or more of from, to, or value parameters is missing or the from/to value is not one of: hex, rgb, hsl, cmyk. | -                |
| **422**     | The value cannot be parsed in the specified from format.                                                         | -                |
| **500**     | Unexpected server error.                                                                                         | -                |

[[Back to top]](#)
[[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)
