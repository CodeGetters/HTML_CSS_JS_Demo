window.addEventListener('load', () => {
	const body = document.querySelector('body');
	const sidebar = body.querySelector('nav');
	const toggle = body.querySelector('.toggle');
	const searchBtn = body.querySelector('.search-box');
	const modeSwitch = body.querySelector('.toggle-switch');
	const modeText = body.querySelector('.mode-text');

	// classList 属性返回元素的类名，作为 DOMTokenList 对象，该属性用于在元素中添加，移除及切换 CSS 类。
	// classList 属性是只读的，但你可以使用 add() 和 remove() 方法修改它
	// 点击侧边栏箭头图标，给 sidebar 添加 close 类
	toggle.addEventListener('click', () => {
		sidebar.classList.toggle('close');
	});

    // 再次点击去除 close 类
	searchBtn.addEventListener('click', () => {
		sidebar.classList.remove('close');
	});
    
    // 点击模式切换开关按钮
	modeSwitch.addEventListener('click', () => {
        // 给 body 添加 dark 类
		body.classList.toggle('dark');
        // 如果 body 包含 dark 模式，那么文字显示 '明亮模式'
        // 否则显示护眼模式
		if (body.classList.contains('dark')) {
			modeText.innerText = '明亮模式';
		} else {
			modeText.innerText = '护眼模式';
		}
	});
});
