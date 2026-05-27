# Org.OpenAPITools.Api.QrCodeApi

All URIs are relative to _https://api.requiems.xyz_

| Method                                                              | HTTP request                     | Description                    |
| ------------------------------------------------------------------- | -------------------------------- | ------------------------------ |
| [**V1TechnologyQrBase64Get**](QrCodeApi.md#v1technologyqrbase64get) | **GET** /v1/technology/qr/base64 | Generate QR Code (Base64 JSON) |
| [**V1TechnologyQrGet**](QrCodeApi.md#v1technologyqrget)             | **GET** /v1/technology/qr        | Generate QR Code (PNG)         |

<a id="v1technologyqrbase64get"></a>

# **V1TechnologyQrBase64Get**

> V1TechnologyQrBase64Get200Response V1TechnologyQrBase64Get (string data, int
> size = null, string recovery = null)

Generate QR Code (Base64 JSON)

Returns a JSON envelope containing the QR code as a base64-encoded PNG string,
along with its dimensions.

### Parameters

| Name         | Type       | Description                                                                                | Notes      |
| ------------ | ---------- | ------------------------------------------------------------------------------------------ | ---------- |
| **data**     | **string** | The text or URL to encode in the QR code                                                   |            |
| **size**     | **int**    | Image size in pixels (default: 256, min: 50, max: 1000)                                    | [optional] |
| **recovery** | **string** | Error-correction level: low (7%), medium (15%), high (25%), highest (30%). Default: medium | [optional] |

### Return type

[**V1TechnologyQrBase64Get200Response**](V1TechnologyQrBase64Get200Response.md)

### Authorization

[requiems-api-key](../README.md#requiems-api-key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                                                                                       | Response headers |
| ----------- | ------------------------------------------------------------------------------------------------- | ---------------- |
| **200**     | Successful response                                                                               | -                |
| **400**     | Missing or invalid parameters (e.g. data not provided, size out of range, unknown recovery level) | -                |
| **500**     | Failed to generate QR code                                                                        | -                |

[[Back to top]](#)
[[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)

<a id="v1technologyqrget"></a>

# **V1TechnologyQrGet**

> void V1TechnologyQrGet (string data, int size = null, string recovery = null)

Generate QR Code (PNG)

Returns a raw PNG image of the QR code. Ideal for direct embedding or file
download.

### Parameters

| Name         | Type       | Description                                                                                                                                                            | Notes      |
| ------------ | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **data**     | **string** | The text or URL to encode in the QR code                                                                                                                               |            |
| **size**     | **int**    | Image size in pixels (default: 256, min: 50, max: 1000)                                                                                                                | [optional] |
| **recovery** | **string** | Error-correction level: low (7%), medium (15%), high (25%), highest (30%). Higher levels are more robust to physical damage but produce larger images. Default: medium | [optional] |

### Return type

void (empty response body)

### Authorization

[requiems-api-key](../README.md#requiems-api-key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

### HTTP response details

| Status code | Description                                                                                       | Response headers |
| ----------- | ------------------------------------------------------------------------------------------------- | ---------------- |
| **200**     | Successful response                                                                               | -                |
| **400**     | Missing or invalid parameters (e.g. data not provided, size out of range, unknown recovery level) | -                |
| **500**     | Failed to generate QR code                                                                        | -                |

[[Back to top]](#)
[[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)
