const task = (timer, color) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(color);
            resolve();
        }, timer);
    });
const step = async () => {
    await task(1000, 'red');
    await task(2000, 'green');
    await task(3000, 'yellow');
    step(); //循环
};
step();
