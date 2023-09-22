var thousandSeparator = function (n) {
    //是整数
    if (Number(n) === Math.round(n)) {
        var result = '';
        var str_n = n.toString();
    } else {
        // 不是整数
        var str_n = n.toString().split('.')[0];
        var result = '.' + n.toString().split('.')[1];
    }

    var cs = 0;
    for (var i = str_n.length - 1; i >= 0; i--) {
        cs++;
        result = str_n.charAt(i) + result;
        if (!(cs % 3) && !i) {
            result = ',' + result;
        }
    }
    return result;
};

console.log(thousandSeparator(12345.6978));
