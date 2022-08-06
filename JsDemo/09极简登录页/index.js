// window.addEventListener('load', function () {
	// 用户名输入框
	// 获取元素
	let user = document.querySelector('.user-input');
	let userl = document.querySelector('.userl');
	user.addEventListener('focus', function () {
		if (this.value !== '') {
			userl.style.transform = '';
		}
	});
	user.addEventListener('blur', function () {
		if (this.value !== '') {
			userl.style.transform = 'translateY(-20px)';
		}
	});

	// 密码输入框
	let psw = this.document.querySelector('.psw-input');
	let pswl = this.document.querySelector('.pswl');
	psw.addEventListener('focus', function () {
		if (this.value !== '') {
			pswl.style.transform = '';
		}
	});
	psw.addEventListener('blur', function () {
		if (this.value !== '') {
			pswl.style.transform = 'translateY(-20px)';
		}
	});
// });
