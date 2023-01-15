const fetch = require('node-fetch')
const baseURL = 'https://api.wnrstore.com'
const apiVersion = 'v2'

/**
 * @description: get account information
 */
const getDataAccount = async (api_key) => {
  try {
    return fetch(`${baseURL}/api/${apiVersion}/user/data?secret_key=${api_key}`)
      .then(res => res.json())
      .then(response => {
        return Promise.resolve(response)
      })
  } catch(err) {
    throw new Error(err.message)
  }
}

/**
 * @description: get list product
 */
const getDataProduct = async (api_key) => {
  try {
    return fetch(`${baseURL}/api/${apiVersion}/product/data?secret_key=${api_key}`)
      .then(res => res.json())
      .then(response => {
        return Promise.resolve(response)
      })
  } catch(err) {
    throw new Error(err.message)
  }
}

/**
 * @description: get list operator
 */
const getDataOperator = async (api_key) => {
  try {
    return fetch(`${baseURL}/api/${apiVersion}/operator/data?secret_key=${api_key}`)
      .then(res => res.json())
      .then(response => {
        return Promise.resolve(response)
      })
  } catch(err) {
    throw new Error(err.message)
  }
}

/**
 * @description: get virtual number status
 */
const checkNumberStatus = async (api_key, phone_number) => {
  try {
    return fetch(`${baseURL}/api/${apiVersion}/order/data?phone_number=${phone_number}&secret_key=${api_key}`)
      .then(res => res.json())
      .then(response => {
        return Promise.resolve(response)
      })
  } catch(err) {
    throw new Error(err.message)
  }
}

/**
 * @description: make a virtual number request
 */
const createOrder = async (api_key, id_product, id_operator) => {
  try {
    return fetch(`${baseURL}/api/${apiVersion}/order/create?secret_key=${api_key}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id_product, id_operator })
    })
    .then(res => res.json())
    .then(response => {
      return Promise.resolve(response)
    })
  } catch(err) {
    throw new Error(err.message)
  }
}

/**
 * @description: resend a virtual number
 */
const resendOrder = async (api_key, id) => {
  try {
    return fetch(`${baseURL}/api/${apiVersion}/order/resend?secret_key=${api_key}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id })
    })
    .then(res => res.json())
    .then(response => {
      return Promise.resolve(response)
    })
  } catch(err) {
    throw new Error(err.message)
  }
}

module.exports = {
  getDataAccount,
  getDataProduct,
  getDataOperator,
  checkNumberStatus,
  createOrder,
  resendOrder
}