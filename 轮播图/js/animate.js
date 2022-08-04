function animate(obj, target, callback) {
    // 清除原有定时器
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        // 计算每隔 15 毫秒所移动的距离
        var step = (target - obj.offsetLeft) / 10;
        // 判断是否大于 0，如果大于 0，则往大了取整，反之往小了取整 
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        // 判断是否到达目标位置，如果到达则停止定时器
        if (target == obj.offsetLeft) {
            clearInterval(obj.timer);
            // 判断是否有回调函数，如果有则调用
            // 利用短路运算
            callback && callback();
        }
        // 将计算的值给该元素
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 15);
}