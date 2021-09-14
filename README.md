# WNRStore-API

![NPM](https://img.shields.io/npm/l/use-data-api.svg)

Official API Wrapper from WNRStore.com


## Installation

```bash
> npm install wnrstore-api
```

## Usage

```js
// Import method
const {
  getDataAccount,
  getDataProduct,
  getDataOperator,
  checkNumberStatus,
  createOrder,
  resendOrder,
  cancelOrder
} = require('wnrstore-api')

// Initializing a variable
const api_key = '0x12345-67890-xxx'

// Get account information
getDataAccount(api_key)

// Get list product
getDataProduct(api_key)

// Get list operator
getDataOperator(api_key)

// Get virtual number status
checkNumberStatus(api_key, phone_number)

// Make a virtual number request
createOrder(api_key, id_product, id_operator)

// Resend a virtual number order
resendOrder(api_key, id_order)

// Cancel a virtual number
cancelOrder(api_key, id_order)
```