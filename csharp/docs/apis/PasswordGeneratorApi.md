# Org.OpenAPITools.Api.PasswordGeneratorApi

All URIs are relative to _https://api.requiems.xyz_

| Method                                                                         | HTTP request                    | Description       |
| ------------------------------------------------------------------------------ | ------------------------------- | ----------------- |
| [**V1TechnologyPasswordGet**](PasswordGeneratorApi.md#v1technologypasswordget) | **GET** /v1/technology/password | Generate Password |

<a id="v1technologypasswordget"></a>

# **V1TechnologyPasswordGet**

> V1TechnologyPasswordGet200Response V1TechnologyPasswordGet (int length = null,
> bool uppercase = null, bool numbers = null, bool symbols = null)

Generate Password

Generate a cryptographically secure random password with customizable character
sets and length

### Parameters

| Name          | Type     | Description                                             | Notes          |
| ------------- | -------- | ------------------------------------------------------- | -------------- |
| **length**    | **int**  | Password length (8-128 characters)                      | [optional]     |
| **uppercase** | **bool** | Include uppercase letters (A-Z)                         | [optional]     |
| **numbers**   | **bool** | Include numbers (0-9)                                   | [optional]     |
| **symbols**   | **bool** | Include special characters (!@#$%^&amp;*()-_&#x3D;+[]{} | ;:,.&lt;&gt;?) |

### Return type

[**V1TechnologyPasswordGet200Response**](V1TechnologyPasswordGet200Response.md)

### Authorization

[requiems-api-key](../README.md#requiems-api-key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                                              | Response headers |
| ----------- | -------------------------------------------------------- | ---------------- |
| **200**     | Successful response                                      | -                |
| **400**     | The length parameter is out of valid range (8-128)       | -                |
| **500**     | Failed to generate password (rare cryptographic failure) | -                |

[[Back to top]](#)
[[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)
