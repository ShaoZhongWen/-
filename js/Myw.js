(function () {
    function Myw() {
        var my$ = function (id) {
            return document.getElementById(id);
        }
        var navSlideshow = document.getElementsByClassName('nav-slideshow')[0];
        var divobj = my$('screen');
        var imgWidth = divobj.offsetWidth;
        var ulobj = divobj.children[0];
        var ulobjs = ulobj.children;
        var olobj = divobj.children[1];
        var arrobj = my$('arr');
        var spanLeft = my$('left');
        var spanRight = my$('right');

        // 为span 标签添加点击事件 实现图片切换
        for (var i = 0; i < ulobjs.length; i++) {

            var newli = document.createElement('li');
            olobj.appendChild(newli);
            newli.setAttribute('index', i);
            var pic = 0;
            newli.onmouseenter = function () {
                for (var j = 0; j < olobj.children.length; j++) {
                    olobj.children[j].className = '';
                }
                this.className = 'current';
                pic = this.getAttribute('index');
                animate(ulobj, -pic * imgWidth);
            }

        }

        // 动画效果
        var timeId = setInterval(clickHandle, 2000);

        // 设置第一个li标签默认样式
        olobj.children[0].className = 'current';
        // 克隆第一个img标签添加到ul里面
        ulobj.appendChild(ulobj.children[0].cloneNode(true));

        // 鼠标移入事件
        navSlideshow.onmouseenter = function () {
            arrobj.style.display = 'block';
            clearInterval(timeId);
        }
        // 右边点击事件
        spanRight.onclick = clickHandle;
        function clickHandle() {
            if (pic == ulobjs.length - 1) {
                pic = 0;
                ulobj.style.left = 0;
            }
            pic++;
            animate(ulobj, -pic * imgWidth);
            if (pic == ulobjs.length - 1) {
                olobj.children[ulobjs.length - 2].className = '';
                olobj.children[0].className = 'current';
            } else {
                for (var i = 0; i < ulobjs.length - 1; i++) {
                    olobj.children[i].className = '';
                }
                olobj.children[pic].className = 'current';
            }
        }

        // 左边点击事件
        spanLeft.onclick = function () {
            if (pic == 0) {
                pic = ulobjs.length - 1;
                ulobj.style.left = -pic * imgWidth + 'px';
            }
            pic--;
            animate(ulobj, -pic * imgWidth);
            for (var i = 0; i < olobj.children.length; i++) {
                olobj.children[i].className = '';
            }
            olobj.children[pic].className = 'current';
        }

        // 鼠标移出事件
        navSlideshow.onmouseleave = function () {
            arrobj.style.display = 'none';
            timeId = setInterval(clickHandle, 2000);
        }

        // 动画函数
        function animate(element, target) {
            clearInterval(element.timeId);
            element.timeId = setInterval(function () {
                var current = element.offsetLeft;
                var setp = 20;
                setp = current < target ? setp : -setp;
                current += setp;
                if (Math.abs(target - current) > Math.abs(setp)) {
                    element.style.left = current + 'px';
                } else {
                    clearInterval(element.timeId);
                    element.style.left = target + 'px';
                }
            }, 20);
        }

        // ----------------------------------------------------------------
        //  右侧导航栏(新闻)
        var rightNews = document.getElementsByClassName('right-news')[0];
        var products = document.getElementsByClassName('products')[0].children;
        var tabobj = rightNews.children[0];
        var tabobjs = tabobj.children;
        console.log(products);
        for (var i = 0; i < tabobjs.length; i++) {
            tabobjs[i].setAttribute('index', i);
            tabobjs[i].onmouseenter = function () {
                for (var j = 0; j < tabobjs.length; j++) {
                    tabobjs[j].className = 'tab-item';
                    products[j].className = 'main';
                }
                this.className = "tab-item active";
                var index = this.getAttribute('index');
                products[index].className = "main selected";
            }
        }

        // 左侧高亮效果

        var gameDownobj = document.getElementsByClassName('gameDown')[0];
        var gameDownobjs = gameDownobj.children[0].children[1];
        var gameDownobjsliobjs = gameDownobjs.children;
        for (var i = 0; i < gameDownobjsliobjs.length; i++) {
            gameDownobjsliobjs[i].onmouseenter = function () {
                for (var j = 0; j < gameDownobjsliobjs.length; j++) {
                    gameDownobjsliobjs[j].style.fontWeight = '400';
                    gameDownobjsliobjs[j].children[0].style.transform = '';
                    gameDownobjsliobjs[j].children[1].style.transform = '';
                }
                this.style.fontWeight = 'bold';
                this.children[0].style.transform = 'scale(1.1,1.1)';
                this.children[1].style.transform = 'scale(1.1,1.1)';
            }

            gameDownobjsliobjs[i].onmouseleave = function () {
                for (var j = 0; j < gameDownobjsliobjs.length; j++) {
                    gameDownobjsliobjs[j].style.fontWeight = '400';
                    gameDownobjsliobjs[j].children[0].style.transform = '';
                    gameDownobjsliobjs[j].children[1].style.transform = '';
                }
            }
        }
    }
    window.Myw = Myw;
}());



