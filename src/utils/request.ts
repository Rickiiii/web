import axios from 'axios'

function getData(api: string, params?: Object) {
  return new Promise((resolve, reject) => {
    axios.get(api, params)
    .then(response => {
      resolve(response.data as any)
    })
    .catch(error => {
      reject(error)
    });
  })
}

function postData(api: string, params?: Object) {
  return new Promise((resolve, reject) => {
    axios.post(api, params)
    .then(response => {
      resolve(response.data)
    })
    .catch(error => {
      reject(error)
    });
  })
}

export {
    getData,
    postData,
}