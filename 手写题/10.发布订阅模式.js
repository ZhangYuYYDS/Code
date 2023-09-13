/**
 * 思路：
 * 1. 创建一个对象，在对象上创建一个调度中心
 * 2. on 方法把函数fn都加到缓存列表中（订阅者注册事件到调度中心）
 * 3. emit 方法取到 arguments 里第一个当做 event，根据 event 值去执行对应缓存列表中的函数（发布者发布事件到调度中心，调度中心处理代码）
 * 4. off 方法可以根据 event 值取消订阅（取消订阅）
 * 5. once 方法只监听一次，调用完毕后删除缓存函数（订阅一次）
 */

// 公众号调度中心
class EventHub {
    constructor() {
        this.map = {};
    }
    on(event, callback) {
        this.map[event] = this.map[event] || [];
        this.map[event].push(callback);
    }
    emit(event, ...args) {
        // 拿到这个事件对应的所有的回调函数
        const fnList = this.map[event] || [];
        fnList.forEach((cb) => cb(...args));
    }
    off(event, callback) {
        if (this.map[event]) {
            if (callback) {
                this.map[event] = this.map[event].filter((item) => item !== callback);
            } else {
                return;
            }
        }
    }
    once(event, callback) {
        const fn = (data) => {
            callback(data);
            this.off(event, fn);
        };
        this.on(event, fn);
    }
}

// 测试
function user1(content) {
    console.log('用户1订阅了:', content);
}

function user2(content) {
    console.log('用户2订阅了:', content);
}

function user3(content) {
    console.log('用户3订阅了:', content);
}

function user4(content) {
    console.log('用户4订阅了:', content);
}
const e = new EventHub();

// e.on('article1', user1);
// e.on('article1', user2);
// e.on('article2', user3);
// e.on('article2', user4);

// 取消user2方法的订阅
// e.off('article1', user2);

e.once('article2', user4);
// e.on('article1', user4);

// 发布
e.emit('article2', 'Javascript 发布-订阅模式');
e.emit('article2', 'Javascript 观察者模式');
