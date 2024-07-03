import axios from 'axios';

// Creating backend config
const Api = axios.create({
  baseURL: 'http://localhost:5000',
  withCredentials: true,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

const config = {
  headers: {
    authorization: `Bearer ${localStorage.getItem('token')}`,
  },
};

// Test API
export const testApi = () => Api.get('/test');

// Create API
export const registerUserApi = (data) => Api.post('/api/user/create', data);

// Login API
export const loginUserApi = (data) => Api.post('/api/user/login', data);

// create product API
export const createProductApi = (data) => Api.post('/api/product/create', data);

// get all products API
export const getAllProductsApi = () =>
  Api.get('/api/product/get_all_products', config);

// get single product API
export const getSingleProductApi = (id) =>
  Api.get(`/api/product/get_one_product/${id}`, config);

export const deleteProductAPi = (id) => {
  return Api.delete(`/api/product/delete/${id}`, config);
};

export const updateProductApi = (id, data) => {
  return Api.put(`/api/product/update_product/${id}`, data, config);
};

export const pagination = (id) => {
  return Api.get(`/api/product//get_paginated_products/?page=${id}`, config);
};

export const getProductCount = () => {
  return Api.get('/api/product/get_products_count', config);
};

export const forgotPasswordApi = (data) => {
  return Api.post('/api/user/forgot-password', data);
};

export const resetPasswordApi = (data) => {
  return Api.post('/api/user/reset-password', data);
};
