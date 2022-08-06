// 获取元素
// 第一个输入框
var uBox = document.querySelector('.userBox');
var user = uBox.querySelector('.user');
var ulabel = uBox.querySelector('label');
// 第二个输入框
var eBox = document.querySelector('.emailBox');
var email = eBox.querySelector('.email');
var elabel = eBox.querySelector('label');
// 第三个输入框
var pBox = document.querySelector('.pswBox');
var psw = pBox.querySelector('.password');
var plabel = pBox.querySelector('label');

// 第一个输入框
// 注册事件
/* 判断原理：聚焦时如果输入框里面有值，那么 label 就不向上移动(取消动画属性)
失去焦点时，如果输入框里面有值，那么 label 就不向下移动(相当于下去了又起来了，本来是要下去的) */
user.addEventListener('focus', function () {
    if (this.value !== '') {
        ulabel.style.transform = '';
    }
});

user.addEventListener('blur', function () {
    if (this.value !== '') {
        ulabel.style.transform = 'translateY(-20px)';
    }
});

// 第二个输入框
email.addEventListener('focus', function () {
    if (this.value !== '') {
        elabel.style.transform = '';
    }
});

email.addEventListener('blur', function () {
    if (this.value !== '') {
        elabel.style.transform = 'translateY(-20px)';
    }
});

// 第三个输入框
psw.addEventListener('focus', function () {
    if (this.value !== '') {
        plabel.style.transform = '';
    }
});

psw.addEventListener('blur', function () {
    if (this.value !== '') {
        plabel.style.transform = 'translateY(-20px)';
    }
});