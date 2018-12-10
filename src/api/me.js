/* eslint-disable */
import {user} from '../config/api';
import {http} from '../http/http'

export const getUser = function () {
  return http.get(user.getUserName)
    .then(response => {
      response = response.data;
      return Promise.resolve(response)
    }).catch(error => {
      return Promise.reject(error)
    })
};

export const logOut = function () {
  window.location.href = user.logout;
};

