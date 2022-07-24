const doc = document;

// 获取全部 link 里面的自定义属性
const themes = [
    doc.querySelector('link[data-theme="white"]'),
    doc.querySelector('link[data-theme="dark"]'),
    doc.querySelector('link[data-theme="red"]'),
    doc.querySelector('link[data-theme="blue"]')
];

// 获取全部按钮
const btns = doc.querySelectorAll('.btn');

btns.forEach(btn => {
    // 被点击按钮进行事件侦听
    btn.addEventListener('click', (e) => {
        // 获取被点击按钮的自定义属性
        const theme = btn.getAttribute('data-theme');
        this.switchTheme(theme);
    });
});

// 切换主题方法
function switchTheme(theme) {
    // 对每一个按钮循环
    themes.forEach(t => {
        if (t.dataset.theme === theme) {
            t.disabled = false;
        } else {
            t.disabled = true;
        }
    });
}