// 防抖是指在一定时间内，只有在最后一次触发事件后才执行函数
function debonuce(func, delay) {
    let timer = setTimeout(() => {
        func();
    }, delay);

    return function () {
        if (timer) {
            clearTimeout(timer);
        }
    };
}

// 节流是指在一定时间内，只执行一次函数
function throttle(func, delay) {
    let date = Date.now();
    return function () {
        const now = Date.now();
        if (now - data >= delay) {
            func();
            date = Date.now();
        }
    };
}
