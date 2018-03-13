const DOMAIN = 'localhost:3000';
const API_PREFIX = '/api/v1';
const BASE_URL = `http://${DOMAIN}${API_PREFIX}`;
const JWT = 'eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZmlyc3RfbmFtZSI6IkpvbiIsImxhc3RfbmFtZSI6IlNub3ciLCJmdWxsX25hbWUiOiJKb24gU25vdyIsImV4cCI6MTUyMDk1NzYxOH0.dSoBbHOmK0AJl0me8AY_kPBlh3aBnHWW-QNxd0Vmoac';


// HTTP REQUESTS

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
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(params)
    }).then(res => res.json());
  }
};

const Token = {
  create(params) {
    return fetch(`${BASE_URL}/tokens`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    }).then(res => {
      if (res.status === 200) {
        return res.json();
      } else {
        return { error: 'Username and Password do not match' };
      }
    });
  }
};

export { Product, Token };
