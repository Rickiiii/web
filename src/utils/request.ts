import axios from 'axios';
// import Qs from 'qs'

const DEFAULT_DOMAIN = 'http://localhost:7001';
// const DEFAULT_DOMAIN = 'http://www.rickiWang.top:7001'

function getData(api: string, params?: Object) {
  return new Promise((resolve, reject) => {
    axios
      .get(`${DEFAULT_DOMAIN}/${api}`, { params })
      .then((response) => {
        resolve(response.data as any);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function postData(api: string, params?: Object) {
  return new Promise((resolve, reject) => {
    axios
      .post(`${DEFAULT_DOMAIN}/${api}`, params)
      .then((response) => {
        resolve(response.data as any);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export { getData, postData };
