// 等页面加载完后操作
window.addEventListener('load', function () {
    // 1.鼠标移入内容框，左右按钮隐藏与显示
    // 获取元素
    var con = document.querySelector('.container');
    var right = con.querySelector('.right');
    var left = con.querySelector('.left');
    var conWidth = con.offsetWidth;
    // 注册事件 鼠标移入
    con.addEventListener('mouseenter', function () {
        right.style.display = 'block';
        left.style.display = 'block';
        // 清除手动点击事件
        clearInterval(timer);
        // 清除定时器变量
        timer = null;
    });
    // 注册事件 鼠标移出
    con.addEventListener('mouseleave', function () {
        right.style.display = 'none';
        left.style.display = 'none';
        // 鼠标离开开启点击事件
        timer = setInterval(function () {
            right.click();
        }, 3000)
    });

    // 2.动态创建指示点
    // 获取元素
    var ol = con.querySelector('ol');
    var ul = con.querySelector('ul');
    // 循环创建
    for (var i = 0; i < ul.children.length; i++) {
        var li = document.createElement('li');
        // 给创建的 li 元素设置索引号
        li.setAttribute('data-index', i);
        // 将创建的 li  元素传入 ol
        ol.appendChild(li);

        // 3.点击某个 li，让对应的图片显示(图片移动距离 = 指示点对应的索引号 * 每张图片的宽度)
        // 注册事件
        li.addEventListener('click', function () {
            // 将其他指示点的背景类名排除
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            this.className = 'current';
            // 将被点击的指示点的索引号传给 index
            var index = this.getAttribute('data-index');
            // 点击了某个 li 就把 index 传给 num
            num = circle = index;
            // 使用外部 js 动画文件
            animate(ul, -index * conWidth);
        });
    }
    // 为第一个 li 元素添加背景
    ol.children[0].className = 'current';

    // 4.克隆第一个 li 元素(深克隆)
    var first = ul.children[0].cloneNode(true);
    // 将克隆的 li 元素放到 ul 的最后
    ul.appendChild(first);

    // 5.点击右侧按钮滚动图片
    var num = 0;
    // 小圆圈
    var circle = 0;
    // 节流阀
    var flag = true;
    right.addEventListener('click', function () {
        if (flag) {
            // 关闭节流阀
            flag = false;
            // 判断是否到最后一张
            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            }
            num++;
            animate(ul, -num * conWidth, function () {
                // 开启节流阀
                flag = true;
            });

            // 6.指示点跟随图片一起滚动
            circle++;
            // 清除之前的小圆圈
            // 如果 circle == 4，说明走到最后一张了,将 circle 复原
            if (circle == ol.children.length) {
                circle = 0;
            }
            circleChange();
        }
    });

    // 7.左侧按钮
    left.addEventListener('click', function () {
        if (flag) {
            // 关闭节流阀
            flag = false;
            // 判断是否到最后一张
            if (num == 0) {
                num = ul.children.length - 1;
                ul.style.left = -num * conWidth + 'px';
            }
            num--;
            animate(ul, -num * conWidth, function () {
                // 开启节流阀
                flas = true;
            });

            // 6.指示点跟随图片一起滚动
            circle--;
            // 清除之前的小圆圈
            // 如果 circle == 4，说明走到最后一个了,将 circle 复原
            if (circle < 0) {
                circle = ol.children.length - 1;
            }
            circleChange();
        }
    });

    // 8.自动播放
    var timer = this.setInterval(function () {
        // 手动点击
        right.click();
    }, 3000);

    // 9.节流阀

    function circleChange() {
        // 排除小圆圈的背景类名
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = ''
        }
        // 给当前的小圆圈加上背景类名
        ol.children[circle].className = 'current';
    }
});