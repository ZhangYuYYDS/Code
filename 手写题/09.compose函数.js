function compose(...fns) {
    return (curr) =>
        // 两个参数：上次计算值，数组当前值
        fns.reduceRight((pre, currfn) => {
            return currfn(pre);
        }, curr);
}
