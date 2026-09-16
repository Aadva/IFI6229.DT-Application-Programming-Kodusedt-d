const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Andmed on valmis");
  }, 1000);
});

console.log(promise);

async function getData() {
  console.log("Ootan andmeid...");

  const result = await promise;

  console.log(result);

  return result;
}

const resultPromise = getData();

console.log(resultPromise);