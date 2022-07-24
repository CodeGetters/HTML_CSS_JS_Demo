// 立即执行函数
(function(window,document)
{
/*获取全部图片*/
var body = document.querySelector('body');
var lis = document.querySelectorAll('li');

for(var i = 0; i < lis.length; i++)
{
    // 给所有的 li 元素设置索引号
    lis[i].setAttribute('data-color',i);

    // 注册事件
    lis[i].addEventListener('mouseover',function()
    {
        // 去掉所有 li 的样式
        for(var i = 0; i < lis.length; i++)
        {
            lis[i].style.backgroundColor = '';            
        }

        // 将鼠标移动到图片上，该图片的自定义属性的索引号赋值给 color
        var color = this.getAttribute('data-color');
        
        // 根据索引号而修改背景颜色
        if(color == 0)
        {
            body.style.backgroundColor = '#DEDEA4';
        }
        else if(color == 1)
        {
            body.style.backgroundColor = '#8faad7';
        }
        else if(color == 2)
        {
            body.style.backgroundColor = '#f0947d';
        }
        else if(color == 3)
        {
            body.style.backgroundColor = '#4671b5';
        }
        else if(color == 4)
        {
            body.style.backgroundColor = '#0A1F3C';
        }
    });

    // 鼠标移出图片，背景颜色改变
    lis[i].addEventListener('mouseout',function()
    {
        for(var i = 0; i < lis.length; i++)
        {
            lis[i].style.backgroundColor = '';
        }
        body.style.backgroundColor = '#453a94';
    })
}
})(window,document);