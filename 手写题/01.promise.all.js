Promise.myAll = function (proms) {
    return new Promise((resolve, reject) => {
        let count = 0; //表示promise的数量
        let fulFilledCount = 0; //完成的数量
        let result = [];
        for (const prom of proms) {
            const i = count;
            count++;
            // 使用resolve方法将所有元素都转成promise
            Promise.resolve(prom)
                .then((res) => {
                    // 将成功的数据汇总到result中,因为promise是有时间的，所以不能用push方法
                    result[i] = res;
                    // 判断是不是全部完成
                    fulFilledCount++;
                    if (fulFilledCount === count) {
                        resolve(result);
                    }
                })
                .catch((err) => reject(err));
        }
        // 空数组
        if (count === 0) {
            resolve(result);
        }
    });
};
var promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'one');
});

var promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'two');
});

Promise.myAll([promise1, promise2]).then((value) => {
    console.log(value);
});
