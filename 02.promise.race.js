Promise.myRace = function (proms) {
    return new Promise((resolve, reject) => {
        for (const prom of proms) {
            Promise.resolve(prom)
                .then((res) => resolve(res))
                .catch((err) => reject(err));
        }
    });
};

var promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'one');
});

var promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'two');
});

Promise.myrace([promise1, promise2]).then((value) => {
    console.log(value);
});
