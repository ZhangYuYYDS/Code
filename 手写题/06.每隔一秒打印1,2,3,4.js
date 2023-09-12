// 方法一：promise
// function light(color) {
//     console.log(color);
// }
// const task = (timer, color) =>
//     new Promise((resolve, reject) => {
//         setTimeout(() => {
//             light(color);
//             resolve();
//         }, timer);
//     });
// const step = async () => {
//     await task(1000, '1');
//     await task(1000, '2');
//     await task(1000, '3');
//     await task(1000, '4');
// };
// step();

// 方法二：立即执行函数
function task(number) {
    let t = setTimeout(() => {
        console.log(number);
        number++;
        clearTimeout(t);
        if (number < 5) {
            task(number);
        }
    }, 1000);
}
task(1);
