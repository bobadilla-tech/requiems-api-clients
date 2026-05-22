# Org.OpenAPITools.Api.MortgageApi

All URIs are relative to *https://api.requiems.xyz*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**V1FinanceMortgageGet**](MortgageApi.md#v1financemortgageget) | **GET** /v1/finance/mortgage | Calculate Mortgage |

<a id="v1financemortgageget"></a>
# **V1FinanceMortgageGet**
> V1FinanceMortgageGet200Response V1FinanceMortgageGet (decimal principal, decimal rate, int years)

Calculate Mortgage

Returns the monthly payment, total cost, and full amortization schedule for a fixed-rate mortgage.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **principal** | **decimal** | Loan amount in your chosen currency (e.g. 300000 for $300,000) |  |
| **rate** | **decimal** | Annual interest rate as a percentage (e.g. 6.5 for 6.5%). Must be greater than 0. |  |
| **years** | **int** | Loan term in years (1–50) |  |

### Return type

[**V1FinanceMortgageGet200Response**](V1FinanceMortgageGet200Response.md)

### Authorization

[requiems-api-key](../README.md#requiems-api-key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |
| **400** | A required parameter is missing, not a valid number, or out of range (e.g. years &gt; 50 or rate &lt;&#x3D; 0). |  -  |
| **500** | Unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

