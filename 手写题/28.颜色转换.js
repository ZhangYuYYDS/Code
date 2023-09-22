function rgbToHex1(rgbStr) {
    const [r, g, b] = rgbStr.match(/\d+/g).map(Number);

    const hexR = r.toString(16).padStart(2, '0');
    const hexG = g.toString(16).padStart(2, '0');
    const hexB = b.toString(16).padStart(2, '0');

    return `#${hexR}${hexG}${hexB}`;
}

const res = rgbToHex1('rgb(0,0,0)');
console.log(res);
