const DOMAIN = 'localhost:3000';
const API_PREFIX = '/api/v1';
const BASE_URL = `http://${DOMAIN}${API_PREFIX}`;
const JWT = 'eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZmlyc3RfbmFtZSI6IkpvbiIsImxhc3RfbmFtZSI6IlNub3ciLCJmdWxsX25hbWUiOiJKb24gU25vdyIsImV4cCI6MTUyMDk1NzYxOH0.dSoBbHOmK0AJl0me8AY_kPBlh3aBnHWW-QNxd0Vmoac';


const Product = {
  all() {
    return fetch(`${BASE_URL}/products`, {
      headers: {
        Authorization: JWT
      }
    }).then(res => res.json());
  },
  one(id) {
    return fetch(`${BASE_URL}/products/${id}`, {
      headers: {
        Authorization: JWT
      }
    }).then(res => res.json());
  },
  create(params) {
    return fetch(`${BASE_URL}/products`, {
      headers: {
        Authorization: JWT,
        'Content-type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({ product: params })
    }).then(res => res.json());
  }
};

export {Product};
