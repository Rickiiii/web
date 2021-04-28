import axios from 'axios'

function getData(api: string, params?: Object) {
    axios.get(api, params)
    .then(function (response) {
        return response
    })
    .catch(function (error) {
        console.log(error);
    });
}

function postData(api: string, params?: Object) {
    axios.post(api, params)
      .then(function (response) {
        return response
      })
      .catch(function (error) {
        console.log(error);
      });
}

export {
    getData,
    postData,
}