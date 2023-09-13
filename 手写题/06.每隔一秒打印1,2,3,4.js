// 方法一：promise
// const task = (color) =>
//     new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(color);
//             resolve();
//         }, 1000);
//     });

// const step = async () => {
//     for (let i = 1; i < 5; i++) {
//         await task('i');
//     }
// };
// step();

// 方法二：立即执行函数
// function task(number) {
//     let t = setTimeout(() => {
//         console.log(number);
//         number++;
//         clearTimeout(t);
//         if (number < 5) {
//             task(number);
//         }
//     }, 1000);
// }
// task(1);

// 方法三：let块级作用域
for (let i = 1; i < 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000 * i);
}
