# Org.OpenAPITools.Api.FitnessExercisesApi

All URIs are relative to *https://api.requiems.xyz*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**V1HealthBodyPartsGet**](FitnessExercisesApi.md#v1healthbodypartsget) | **GET** /v1/health/body-parts | List Body Parts |
| [**V1HealthEquipmentGet**](FitnessExercisesApi.md#v1healthequipmentget) | **GET** /v1/health/equipment | List Equipment |
| [**V1HealthExercisesGet**](FitnessExercisesApi.md#v1healthexercisesget) | **GET** /v1/health/exercises | List Exercises |
| [**V1HealthExercisesIdGet**](FitnessExercisesApi.md#v1healthexercisesidget) | **GET** /v1/health/exercises/{id} | Get Exercise by ID |
| [**V1HealthExercisesRandomGet**](FitnessExercisesApi.md#v1healthexercisesrandomget) | **GET** /v1/health/exercises/random | Random Exercise |
| [**V1HealthMusclesGet**](FitnessExercisesApi.md#v1healthmusclesget) | **GET** /v1/health/muscles | List Muscles |

<a id="v1healthbodypartsget"></a>
# **V1HealthBodyPartsGet**
> V1HealthBodyPartsGet200Response V1HealthBodyPartsGet ()

List Body Parts

Returns a sorted list of all distinct body part values present in the dataset. Use these as valid values for the body_part filter.


### Parameters
This endpoint does not need any parameter.
### Return type

[**V1HealthBodyPartsGet200Response**](V1HealthBodyPartsGet200Response.md)

### Authorization

[requiems-api-key](../README.md#requiems-api-key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="v1healthequipmentget"></a>
# **V1HealthEquipmentGet**
> V1HealthEquipmentGet200Response V1HealthEquipmentGet ()

List Equipment

Returns a sorted list of all distinct equipment types. Use these as valid values for the equipment filter.


### Parameters
This endpoint does not need any parameter.
### Return type

[**V1HealthEquipmentGet200Response**](V1HealthEquipmentGet200Response.md)

### Authorization

[requiems-api-key](../README.md#requiems-api-key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="v1healthexercisesget"></a>
# **V1HealthExercisesGet**
> V1HealthExercisesGet200Response V1HealthExercisesGet (string bodyPart = null, string equipment = null, string muscle = null, string search = null, int page = null, int perPage = null)

List Exercises

Returns a paginated list of exercises. All filter parameters are optional and combinable.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **bodyPart** | **string** | Filter by body part (e.g. chest, back, upper legs). Use /v1/health/body-parts for valid values. | [optional]  |
| **equipment** | **string** | Filter by equipment type (e.g. barbell, dumbbell, body weight). Use /v1/health/equipment for valid values. | [optional]  |
| **muscle** | **string** | Filter by target or secondary muscle (e.g. biceps, glutes). Use /v1/health/muscles for valid values. | [optional]  |
| **search** | **string** | Full-text search on exercise name. | [optional]  |
| **page** | **int** | Page number (default: 1) | [optional]  |
| **perPage** | **int** | Results per page, 1–100 (default: 20) | [optional]  |

### Return type

[**V1HealthExercisesGet200Response**](V1HealthExercisesGet200Response.md)

### Authorization

[requiems-api-key](../README.md#requiems-api-key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |
| **400** | A query parameter has an invalid value (e.g. per_page out of range). |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="v1healthexercisesidget"></a>
# **V1HealthExercisesIdGet**
> V1HealthExercisesIdGet200Response V1HealthExercisesIdGet (int id)

Get Exercise by ID

Returns a single exercise by its numeric ID.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **id** | **int** | Numeric exercise ID |  |

### Return type

[**V1HealthExercisesIdGet200Response**](V1HealthExercisesIdGet200Response.md)

### Authorization

[requiems-api-key](../README.md#requiems-api-key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |
| **400** | The id parameter is not a positive integer. |  -  |
| **404** | No exercise exists with the given ID. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="v1healthexercisesrandomget"></a>
# **V1HealthExercisesRandomGet**
> V1HealthExercisesRandomGet200Response V1HealthExercisesRandomGet (string bodyPart = null, string equipment = null, string muscle = null, string search = null)

Random Exercise

Returns a single randomly selected exercise. Accepts the same filter parameters as the list endpoint, so you can get a random chest exercise, a random bodyweight exercise, etc.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **bodyPart** | **string** | Restrict random selection to this body part. | [optional]  |
| **equipment** | **string** | Restrict random selection to this equipment type. | [optional]  |
| **muscle** | **string** | Restrict random selection to exercises targeting this muscle. | [optional]  |
| **search** | **string** | Restrict random selection to exercises matching this search term. | [optional]  |

### Return type

[**V1HealthExercisesRandomGet200Response**](V1HealthExercisesRandomGet200Response.md)

### Authorization

[requiems-api-key](../README.md#requiems-api-key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |
| **404** | No exercises match the given filters. |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="v1healthmusclesget"></a>
# **V1HealthMusclesGet**
> V1HealthMusclesGet200Response V1HealthMusclesGet ()

List Muscles

Returns a sorted list of all distinct muscle names (combining target and secondary muscles). Use these as valid values for the muscle filter.


### Parameters
This endpoint does not need any parameter.
### Return type

[**V1HealthMusclesGet200Response**](V1HealthMusclesGet200Response.md)

### Authorization

[requiems-api-key](../README.md#requiems-api-key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

