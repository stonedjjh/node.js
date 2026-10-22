```JavaScript
//Creating a promise method. The promise will get resolved when timer times out after 6 seconds.
let myPromise = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve("Promise resolved");
      secondPromise.then((successMessage) => {
        console.log("From secondPromise Callback " + successMessage)
        })
    },6000)})

const secondPromise = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve("Second Promise resolved")
    },3000)})

//Console log before calling the promise
console.log("Before calling promise");

//Call the promise and wait for it to be resolved and then print a message.
myPromise.then((successMessage) => {
    console.log("From Callback " + successMessage)
  })

//Console log after calling the promise
  console.log("After calling promise");
```

```JavaScript
//Creating a promise method. The promise will get resolved when timer times out after 6 seconds.
let myPromise = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve("Promise resolved");
    },6000)})

const secondPromise = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve("Second Promise resolved")
    },3000)})

//Console log before calling the promise
console.log("Before calling promise");

//Call the promise and wait for it to be resolved and then print a message.
myPromise.then((successMessage) => {
    console.log("From Callback " + successMessage);
     secondPromise.then((successMessage) => {
        console.log("From secondPromise Callback " + successMessage)
        })
  })

//Console log after calling the promise
  console.log("After calling promise");
```
