let template = '我是{{name}}，年龄{{age}}，性别{{sex}}';
let data = {
    name: '姓名',
    age: 18,
};

function render(template, data) {
    let regex = /{{(\w+)}}/g;
    let computed = template.replace(regex, (match, key) => {
        return data[key];
    });
    return computed;
}

let res = render(template, data); // 我是姓名，年龄18，性别undefined
console.log(res);
