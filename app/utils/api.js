const apiBase = 'http://localhost:3000';

const toApi = function toApi(url, method, payload, token) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.onload = function xhrOnload() {
      console.log(this.response);
      const res = JSON.parse(this.response);
      if (res.status > 199 && res.status < 300) {
        resolve(res);
      } else {
        reject(res);
      }
    };

    xhr.onerror = function xhrOnerror() {
      reject(this.response);
    };

    const params = JSON.stringify(payload);
    const fullUrl = apiBase + url;

    xhr.open(method, fullUrl);
    xhr.setRequestHeader('Content-Type', 'application/x-www-urlencoded');
    xhr.setRequestHeader('X-Modhash', token);
    xhr.send(params);
  });
};

export const postToApi = function postToApi(url, payload, token) {
  return toApi(url, 'POST', payload, token);
};

export const getToApi = function getToApi(url, payload, token) {
  return toApi(url, 'GET', payload, token).then(r => console.log(r));
};
