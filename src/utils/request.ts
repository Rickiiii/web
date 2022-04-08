import axios from 'axios';
// import Qs from 'qs'

const DEFAULT_DOMAIN = 'http://localhost:7001';
// const DEFAULT_DOMAIN = 'http://www.rickiWang.top:7001'

interface IResolve {
  data: any;
  code: number;
  errcode: number;
  message: string;
  [propsName: string]: any;
}

function getData(api: string, params?: Object) {
  return new Promise<IResolve>((resolve, reject) => {
    axios
      .get(`${DEFAULT_DOMAIN}/${api}`, { params })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function postData(api: string, params?: Object) {
  return new Promise<IResolve>((resolve, reject) => {
    axios
      .post(`${DEFAULT_DOMAIN}/${api}`, params)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export { getData, postData };
