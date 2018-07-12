/* eslint-disable */

export const fetchJSON = (url, options = {}) =>
  new Promise((resolve, reject) =>
    fetch(url, options)
      .then(response => (response.status !== 200 ? reject(response) : response))
      .then(response => response.json())
      .then(response => resolve(response))
      .catch(error => reject(error)));
