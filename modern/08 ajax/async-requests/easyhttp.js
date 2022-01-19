
 function getXMLHttp(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);

  xhr.onload = function() {
    if(xhr.status === 200) {
      callback(null, xhr.responseText);
    } else {
      callback('Error: ' + xhr.status);
    }
  }

   xhr.send();
}
 function  getPromiseXMLHttp(url) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = function () {
      if (this.status >= 200 && this.status < 300) {
        resolve(JSON.parse(xhr.response));
      } else {
        reject({
          status: this.status,
          statusText: xhr.statusText
        });
      }
    };
    xhr.onerror = function () {
      reject({
        status: this.status,
        statusText: xhr.statusText
      });
    };
    xhr.send();
  });
}

function getFetchPromise(url) {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
    }
    })
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
  });
}

 async function getFetchAsyncWait() {

 response =  await  fetch('https://jsonplaceholder.typicode.com/posts/1');

 return response;
}

