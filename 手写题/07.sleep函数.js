function sleep(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, time);
    });
}

// 测试
const test = async () => {
    console.log('start');
    await sleep(5000);
    console.log('end');
};

test();
