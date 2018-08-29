/* eslint-disable */

export const fetchJSON = (url, options = {}) =>
  new Promise((resolve, reject) =>
    fetch(url, options)
      .then(response => (response.status !== 200 ? reject(response) : response))
      .then(response => response.json())
      .then(response => resolve(response))
      .catch(error => reject(error)));

export const postJSON = (url, body) =>
  new Promise((resolve, reject) => {
    let init = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Prefer': 'return=representation'
      },
      body: JSON.stringify(body)

    };
    let request = new Request(url, init);
    fetch(request)
      .then(response => (response.status !== 200 ? reject(response) : response))
      .then(response => resolve(response))
      .catch(error => reject(error));
  });

