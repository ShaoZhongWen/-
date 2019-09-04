
$(function () {

    // 导航栏实现字体颜色改变
    $('div.headerFixed>.w>ul.tab>li').mouseenter(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
    $('div.bottom-news>ul.tab>li').mouseenter(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });


    // 导航部分实现定位效果
    $(window).scroll(function () {
        if ($(window).scrollTop() > (98 + $('nav').height())) {
            $('.headerFixed').css('display', 'block');
        } else {
            $('.headerFixed').css('display', 'none');
        }

        if ($(window).scrollTop() > (98 + $('nav').height())) {
            $('div.backGrimg>ul').css('display', 'block');
        } else {
            $('div.backGrimg>ul').css('display', 'none');
        }
    });


    // 购物区图片3D效果
    $('div.showShopp>.w>ul li img').on({
        mouseenter: function () {
            $(this).css('transform', 'translateZ(10px)').parents('li').siblings().children('img').css('transform', 'translateZ(0)');

        }
    })

    // 页脚鼠标移入时字体颜色改变
    $('div.footer>.w>p>span').on({
        mouseenter: function () {
            $(this).css('color', '#fff').siblings().css('color', '#999');
        }
    })

    // 广告展示部分点击变色
    $('div.backGrimg>ul>li').on({
        click: function () {
            $(this).addClass('current').siblings().removeClass('current');
            $(this).children().css('color', '#fff').parents('li').siblings().children().css('color', 'black');
        },
    })


    // 评论区
    // 获取对象
    var ulobj = $('div.messageBoard>.w>ul').get(0);
    var buttonobj = $('div.messageBoard>.w>div.commentData>button')[0];
    var inputobj = $('div.messageBoard>.w>div.commentData>input')[0];


    // 创建评论对象构造函数
    function CommentData() {
        this.commentUser = inputobj.value;
    }
    // 给构造函数添加创建评论方法
    CommentData.prototype.makeData = function (content) {
        var textNode = document.createTextNode(content);
        var pobj = document.createElement('p');
        pobj.appendChild(textNode);
        var spanobj = document.createElement('span');
        var liobj = document.createElement('li');
        liobj.appendChild(spanobj);
        liobj.appendChild(pobj);
        ulobj.appendChild(liobj);
    }
    // 给构造函数添加本地保存评论方法
    CommentData.prototype.saveData = function (content) {
        var string = localStorage.getItem('commentData');
        if (string == null) {
            var arrobj = [];
        } else {
            arrobj = JSON.parse(string);
        }
        arrobj.push(content);
        string = JSON.stringify(arrobj);
        localStorage.setItem('commentData', string);
    }
    // 读取本地保存数据
    CommentData.prototype.readData = function () {
        var string = localStorage.getItem('commentData');
        if (string != null) {
            var arrobj = JSON.parse(string);
            for (var i = 0; i < arrobj.length; i++) {
                var content = arrobj[i];
                userComment.makeData(content);
            }
        }
    }
    // 给浏览器实例化对象
    var userComment = new CommentData();
    // 调用读取评论方法
    userComment.readData();
    // 用户点击实例化对象并初始化
    buttonobj.onclick = function () {
        var userComment = new CommentData();
        if (userComment.commentUser != '') {
            userComment.makeData(userComment.commentUser);
            userComment.saveData(userComment.commentUser);
            inputobj.value = '';
        } else {
            alert('你的留言为空!')
        }

    }
});
