function add(a, b) {
    let maxLength = Math.max(a.length, b.length);
    //用 0 去补齐长度
    a = a.padStart(maxLength, 0); //结果 "0009007199254740991"
    b = b.padStart(maxLength, 0); //结果 "1234567899999999999"
    let t = 0;
    let f = 0; //"进位"
    let sum = '';
    for (let i = maxLength - 1; i >= 0; i--) {
        t = parseInt(a[i]) + parseInt(b[i]) + f;
        f = Math.floor(t / 10);
        sum = (t % 10) + sum;
    }
    if (f == 1) {
        sum = '1' + sum;
    }
    return sum;
}

// 测试
let a = '9007199254740991';
let b = '1234567899999999999';
console.log(add(a, b));
