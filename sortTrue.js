// 由于直接使用array.sort和random排序不够随机 定义一个shuffle来随机打乱数组
// 原理就是把当前循环的元素与之后随机位置的元素交换位置
var times = 100000;
var res = {};

function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
    return a;
}
for (var i = 0; i < times; i++) {
    var arr = shuffle([1, 2, 3, 4, 5]);

    var key = JSON.stringify(arr);
    res[key] ? res[key]++ : res[key] = 1;
}

// 为了方便展示，转换成百分比
for (var key in res) {
    res[key] = res[key] / times * 100 + '%';
}
console.log(res);