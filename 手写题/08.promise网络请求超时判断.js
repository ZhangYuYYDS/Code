const timeout = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('timeout');
    }, 3000);
});

const request = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('data');
    }, 5000);
});

Promise.race([timeout, request])
    .then((v) => console.log('res', v))
    .catch((err) => console.log('err', r));
