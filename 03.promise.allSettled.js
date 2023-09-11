Promise.myAllSettled = function (proms) {
    return new Promise((resolve, reject) => {
        let result = [];
        let count = 0;
        let fulFilledCount = 0;
        for (const prom of proms) {
            let i = count;
            count++;
            Promise.resolve(prom)
                .then((res) => {
                    result[i] = res;
                    fulFilledCount++;
                })
                .catch((err) => {
                    result[i] = err;
                    fulFilledCount++;
                })
                .finally(() => {
                    if (fulFilledCount === count) {
                        resolve(result);
                    }
                });
        }
    });
};

var promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'one');
});

var promise2 = new Promise((resolve, reject) => {
    setTimeout(reject, 100, 'two');
});

Promise.myAllSettled([promise1, promise2]).then((value) => {
    console.log(value);
});
