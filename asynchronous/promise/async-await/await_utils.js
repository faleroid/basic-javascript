function promiseExecutor(resolve, reject) {
  setTimeout(() => {
    resolve('You did it!'),

    reject(new Error('duh error'));
  }, 2000);
}

export function doSomething() {
  return new Promise(promiseExecutor);
}