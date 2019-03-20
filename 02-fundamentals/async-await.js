/**
 * Async Await
 */

// let getName = async () => {
//   throw new Error("Wrong");

//   return "Christian";
// };

let getName = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Christian");
    }, 3000);
  });
};

let greet = async () => {
    let name = await getName();

    return `Hello ${name}`;
}

greet()
  .then(message => {
    console.log(message);
  })
  .catch(error => console.log("ASYNC error", error));
