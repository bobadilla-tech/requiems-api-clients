# Org.OpenAPITools.Api.NumberBaseConversionApi

All URIs are relative to _https://api.requiems.xyz_

| Method                                                                    | HTTP request                | Description  |
| ------------------------------------------------------------------------- | --------------------------- | ------------ |
| [**V1TechnologyBaseGet**](NumberBaseConversionApi.md#v1technologybaseget) | **GET** /v1/technology/base | Convert Base |

<a id="v1technologybaseget"></a>

# **V1TechnologyBaseGet**

> V1TechnologyBaseGet200Response V1TechnologyBaseGet (int from, int to, string
> value)

Convert Base

Convert an integer from one number base to another.

### Parameters

| Name      | Type       | Description                                                                           | Notes |
| --------- | ---------- | ------------------------------------------------------------------------------------- | ----- |
| **from**  | **int**    | Source base (2, 8, 10, or 16)                                                         |       |
| **to**    | **int**    | Target base (2, 8, 10, or 16)                                                         |       |
| **value** | **string** | The number as a string. Accepts optional prefixes: 0x (hex), 0b (binary), 0o (octal). |       |

### Return type

[**V1TechnologyBaseGet200Response**](V1TechnologyBaseGet200Response.md)

### Authorization

[requiems-api-key](../README.md#requiems-api-key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                                                                                                  | Response headers |
| ----------- | ------------------------------------------------------------------------------------------------------------ | ---------------- |
| **200**     | Successful response                                                                                          | -                |
| **400**     | A required parameter is missing, the base is not one of 2/8/10/16, or value is not valid for the given base. | -                |

[[Back to top]](#)
[[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)
