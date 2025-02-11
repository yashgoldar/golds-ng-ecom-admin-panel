export const API_ENDPOINTS = {
    AUTH: {
      LOGIN: '/auth/login',
      REGISTER: '/auth/register',
      LOGOUT: '/auth/logout'
    },
    USERS: {
      GET_ALL: '/users',
      GET_BY_ID: (id: number) => `/users/${id}`,
      CREATE: '/users/create',
    },
    PRODUCTS: {
      GET_ALL: '/products',
      GET_BY_ID: (id: number) => `/products/${id}`,
    }
  };
  