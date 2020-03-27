var urls = [
    'https://dog.ceo/api/breed/beagle/images/random',
    'https://dog.ceo/api/breed/chow/images/random',
    'https://dog.ceo/api/breed/akita/images/random',
    'https://dog.ceo/api/breed/dingo/images/random',
    'https://dog.ceo/api/breed/eskimo/images/random'
  ]

 // Use $.get() and a chain of .then() calls to fetch these URLs one by one.
// After each .get() is done, console log "data was fetched!"

// $.get(urls[0]).then(function (dogImage) {
//   console.log('data was fetched:', dogImage)
//   return $.get(urls[1])
// }).then(function (dogImage) {
//   console.log('data was fetched:', dogImage)
//   return $.get(urls[2])
// }).then(function (dogImage) {
//   console.log('data was fetched:', dogImage)
//   return $.get(urls[3])
// }).then(function (dogImage) {
//   console.log('data was fetched:', dogImage)
//   return $.get(urls[4])
// }).then(function (dogImage) {
//   console.log('data was fetched:', dogImage)
// }).catch(function (err) {
//   console.error('error fetching a dog image :(')
// })

// // The above --^ fetches each dog image one-by-one. Waiting for the last image
// // to finish loading before requesting the next one.

// // By contrast below, we can fetch all the dog images concurrently by making
// // an array of Promises and throwing them into Promise.all

// function convertURLTojQueryPromise (url) {
//   return $.get(url)
// }

// const dogImagePromises = urls.map(convertURLTojQueryPromise)

// Promise.all(dogImagePromises).then(function (allImages) {
//   console.log('All of the dog images fetched concurrently:')
//   console.log(allImages)
// })

//Part 3 - Resolve Reject

// Write a function called addNumbers(x, y) that returns a new Promise() that adds two numbers and resolves the answer. However, if the two inputs provided are not both numbers reject the promise. The API should work like the following:

let ran1 = (Math.random()*10)
let ran2 = (Math.random()*10)
addNumbers(ran1, ran2)
   .then(function (answer) {
      console.log(answer);
   })
   .catch(function (error) {
      console.log(error);
   })

function addNumbers (x,y){
   return new Promise (function(resolveFn, rejectFn){
      console.log('SUCCESSSSS its a number')
      if(typeof x === "number" && typeof y === "number"){
         resolveFn(x+y)
      } else{ rejectFn('input were not numbers')}
   })
}

//Part 4 - Promisify (Challenge Question)


   
let dropButteredToastOnFloor = new Promise ((resolve, reject) => {
   let drop = Math.random();
   if (drop < 0.5) {
      console.log("Landed butter-side up!");
      resolve("Landed butter-side up!");
   } else {
      console.log("Landed butter-side down...");
      reject("Landed butter-side down...");
   }
})

   dropButteredToastOnFloor.then((message)=>{
      alert('Whew, that was close!');
   })
   dropButteredToastOnFloor.catch((error)=>{
      alert('Well shucks, there goes my toast...');
   });


