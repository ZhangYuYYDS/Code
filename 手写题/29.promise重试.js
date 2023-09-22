function retry(fn, times) {
    return new Promise((resolve, reject) => {
        function run() {
            fn()
                .then((res) => {
                    console.log('成功了，不用试了');
                })
                .catch((err) => {
                    if (times--) {
                        console.log(`还有${times}次尝试`);
                        run();
                    } else {
                        reject(err);
                    }
                });
        }
        run();
    });
}

// 每隔一秒生成一个随机数，大于0.9才resolve
function retryDemo() {
    return new Promise((resolve, reject) => {
        let r = Math.random();
        setTimeout(() => {
            console.log(r);
            if (r > 0.9) {
                resolve(r);
            } else {
                reject('error:' + r);
            }
        }, 1000);
    });
}
// 使用重试函数
retry(retryDemo, 5)
    .then((res) => {
        console.log('成功：' + res);
    })
    .catch((err) => {
        console.log(err);
    });
