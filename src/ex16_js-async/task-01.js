function myFetch() {
  let xhr = new XMLHttpRequest();
  
  if (method === 'Get') {
    xhr.open('GET', url);

    xhr.responseType = 'document';

    xhr.send();

    xhr.onload = function () {
      if (xhr.status !== 200) {
        console.log(`error ${xhr.status}: ${xhr.statusText}`);
      } else {
        console.log(xhr.response);
      }
    };
  }
  if (method === 'POST') {
    let formData = new FormData();
    formData.append();
    
    xhr.open('POST', url);
    
    xhr.send(formData);

    xhr.onload = function () {
      if (xhr.status === 200) {
        console.log('success');
      } else {
        console.log(`error ${this.status}`);
      }
    };
  }
};
