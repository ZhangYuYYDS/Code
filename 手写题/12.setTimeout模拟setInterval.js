function mySetInterval(callback, duration) {
    let timeId;
    function fn() {
        callback();
        timeId = setTimeout(fn, duration);
    }
    timeId = setTimeout(fn, duration);
    return timeId;
}

function myTimeout(fn, time) {
    let timer = setInterval(() => {
        clearInterval(timer);
        fn();
    }, time);
}
