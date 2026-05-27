# Org.OpenAPITools.Api.BarcodeApi

All URIs are relative to _https://api.requiems.xyz_

| Method                                                                         | HTTP request                          | Description                    |
| ------------------------------------------------------------------------------ | ------------------------------------- | ------------------------------ |
| [**V1TechnologyBarcodeBase64Get**](BarcodeApi.md#v1technologybarcodebase64get) | **GET** /v1/technology/barcode/base64 | Generate Barcode (Base64 JSON) |
| [**V1TechnologyBarcodeGet**](BarcodeApi.md#v1technologybarcodeget)             | **GET** /v1/technology/barcode        | Generate Barcode (PNG)         |

<a id="v1technologybarcodebase64get"></a>

# **V1TechnologyBarcodeBase64Get**

> V1TechnologyBarcodeBase64Get200Response V1TechnologyBarcodeBase64Get (string
> data, string type)

Generate Barcode (Base64 JSON)

Returns a JSON envelope containing the barcode as a base64-encoded PNG string,
along with its type and dimensions.

### Parameters

| Name     | Type       | Description                                          | Notes |
| -------- | ---------- | ---------------------------------------------------- | ----- |
| **data** | **string** | The text or numeric string to encode in the barcode  |       |
| **type** | **string** | Barcode format: code128, code93, code39, ean8, ean13 |       |

### Return type

[**V1TechnologyBarcodeBase64Get200Response**](V1TechnologyBarcodeBase64Get200Response.md)

### Authorization

[requiems-api-key](../README.md#requiems-api-key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                                                                                                 | Response headers |
| ----------- | ----------------------------------------------------------------------------------------------------------- | ---------------- |
| **200**     | Successful response                                                                                         | -                |
| **400**     | Missing or invalid parameters (e.g. data not provided, unsupported type)                                    | -                |
| **422**     | Data is invalid for the chosen barcode type (e.g. wrong digit count for EAN-8/EAN-13, non-numeric EAN data) | -                |

[[Back to top]](#)
[[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)

<a id="v1technologybarcodeget"></a>

# **V1TechnologyBarcodeGet**

> void V1TechnologyBarcodeGet (string data, string type)

Generate Barcode (PNG)

Returns a raw PNG image of the barcode. Ideal for direct embedding or file
download.

### Parameters

| Name     | Type       | Description                                          | Notes |
| -------- | ---------- | ---------------------------------------------------- | ----- |
| **data** | **string** | The text or numeric string to encode in the barcode  |       |
| **type** | **string** | Barcode format: code128, code93, code39, ean8, ean13 |       |

### Return type

void (empty response body)

### Authorization

[requiems-api-key](../README.md#requiems-api-key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

### HTTP response details

| Status code | Description                                                                                                 | Response headers |
| ----------- | ----------------------------------------------------------------------------------------------------------- | ---------------- |
| **200**     | Successful response                                                                                         | -                |
| **400**     | Missing or invalid parameters (e.g. data not provided, unsupported type)                                    | -                |
| **422**     | Data is invalid for the chosen barcode type (e.g. wrong digit count for EAN-8/EAN-13, non-numeric EAN data) | -                |

[[Back to top]](#)
[[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)
