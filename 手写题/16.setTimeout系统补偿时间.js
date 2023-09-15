function setMyTimeout(fn, time) {
    let start = Data.now();
    let count = 0;

    // 系统补偿函数
    function task() {
        let ideal = count * time;
        let real = Data.now() - start;
        let diff = real - ideal;

        fn();
        count++;

        setTimeout(() => {
            task();
        }, time - diff);
    }

    setTimeout(() => {
        task();
    }, time);
}

setMyTimeout(() => {
    console.log(111);
}, 1000);
