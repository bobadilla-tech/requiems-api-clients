# Org.OpenAPITools.Api.UnitConversionApi

All URIs are relative to *https://api.requiems.xyz*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**V1TechnologyConvertGet**](UnitConversionApi.md#v1technologyconvertget) | **GET** /v1/technology/convert | Convert Units |
| [**V1TechnologyConvertUnitsGet**](UnitConversionApi.md#v1technologyconvertunitsget) | **GET** /v1/technology/convert/units | List Available Units |

<a id="v1technologyconvertget"></a>
# **V1TechnologyConvertGet**
> V1TechnologyConvertGet200Response V1TechnologyConvertGet (string from, string to, decimal value)

Convert Units

Convert a value from one unit to another


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **from** | **string** | Source unit key (e.g. miles, kg, c) |  |
| **to** | **string** | Target unit key (e.g. km, lb, f) |  |
| **value** | **decimal** | Numeric value to convert |  |

### Return type

[**V1TechnologyConvertGet200Response**](V1TechnologyConvertGet200Response.md)

### Authorization

[requiems-api-key](../README.md#requiems-api-key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="v1technologyconvertunitsget"></a>
# **V1TechnologyConvertUnitsGet**
> V1TechnologyConvertUnitsGet200Response V1TechnologyConvertUnitsGet ()

List Available Units

Returns all available unit conversion types grouped by measurement category


### Parameters
This endpoint does not need any parameter.
### Return type

[**V1TechnologyConvertUnitsGet200Response**](V1TechnologyConvertUnitsGet200Response.md)

### Authorization

[requiems-api-key](../README.md#requiems-api-key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

