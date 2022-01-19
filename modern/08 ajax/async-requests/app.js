

/*
getXMLHttp('https://jsonplaceholder.typicode.com/posts/1', function(err, posts) {
  if(err) {
    console.log(err);
  } else {
    console.log(posts);
  }
});*/
/*getFetchPromise('https://jsonplaceholder.typicode.com/posts/1').then(resp => {
    if (resp) {
        console.log(resp);
    }
});*/
/*
getFetchAsyncWait('https://jsonplaceholder.typicode.com/posts/1').then(resp => {
    if (resp) {
        console.log(resp);
    }
});*/
/*
async function myDisplay() {
    let myPromise = new Promise(function(resolve) {
        setTimeout(function() {resolve("I love You !!");}, 3000);
    });
    document.getElementById("demo").innerHTML = await myPromise;
}

myDisplay();*/
getPromiseXMLHttp('https://jsonplaceholder.typicode.com/posts/1').then(resp => {
    if (resp) {
        console.log(resp);
    }
});
console.log("post loaded");