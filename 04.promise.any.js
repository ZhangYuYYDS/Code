Promise.myAny = function (proms) {
    return new Promise((resolve, reject) => {
        let count = 0;
        let promiseCount = 0;
        for (const prom of proms) {
            promiseCount++;
            Promise.resolve(prom)
                .then((res) => resolve(res))
                .catch((err) => {
                    count++;
                    if (count === promiseCount) reject(err);
                });
        }
    });
};

var promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'one');
});

var promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'two');
});

Promise.myAny([promise1, promise2]).then((value) => {
    console.log(value);
});
