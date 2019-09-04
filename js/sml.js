(function (w) {
    $(function () {
        // 菜单栏移入下拉显示，移出隐藏
        $('.top_nav .nav>.li_item').mouseenter(function () {
            // console.log('11111111111');
            // $(this).children('.li_link').css({color:'red',backgroundColor:'yellow',});


            // $(this).children('.info').show();
            $(this).children('.info,i').stop(true, false).slideDown();
            $(this).find('em').stop(true, false).show('');

        });
        $('.top_nav .nav>.li_item').mouseleave(function () {
            // console.log('22222222222');
            // $(this).children('.li_link').css({color:''});

            // $(this).children('.info').hide();
            $(this).children('.info,i').stop(true, false).slideUp();
            $(this).find('em').stop(true, false).hide('');

        });

        // 内容二
        // 第三部分 鼠标移入roleHd小图标中，对应的变换
        $('.part2Cont .sub2Part3 .roleHd li').mouseenter(function () {
            // 获取下标
            var index = $(this).index();
            // 下标加1
            index += 1;
            // 将下标转成字符串
            if (index < 10) {
                var strIndex = '0' + index + 'on';
            } else {
                var strIndex = index + 'on';
            }

            // console.log(index);
            // 设置鼠标移入后下标对应的背景图片
            $(this).css('backgroundImage', 'url(./image/sub2Part3/sub2Part3-Hd-' + strIndex + '\.png)')
            // 将其他的兄弟元素的背景图片恢复成默认
            $(this).siblings().css('backgroundImage', '');
            // console.log($('.part2Cont .sub2Part3 .roleBd li.roleItem').eq($(this).index()));
            // 将对应的roleBd中的图片更换
            $('.part2Cont .sub2Part3 .roleBd li.roleItem').eq($(this).index()).show();
            $('.part2Cont .sub2Part3 .roleBd li.roleItem').eq($(this).index()).siblings().hide();

        });

        setTimeout(function () {
            nextPage();
        }, 1);
        // 轮播图
        var index1 = 0;
        var timeID = setInterval(function () {
            nextPage();
        }, 3000);

        function nextPage() {
            var num;
            index1 <= 11 ? index1++ : index1 = 1;
            if (index1 < 10) {
                var strIndex = '0' + index1 + 'on';
            } else {
                var strIndex = index1 + 'on';
            }
            num = index1 - 1;
            $('.part2Cont .sub2Part3 .roleHd li').eq(num).css('backgroundImage', 'url(./image/sub2Part3/sub2Part3-Hd-' + strIndex + '\.png)')
            // 将其他的兄弟元素的背景图片恢复成默认
            $('.part2Cont .sub2Part3 .roleHd li').eq(num).siblings().css('backgroundImage', '');
            // console.log($('.part2Cont .sub2Part3 .roleBd li.roleItem').eq($(this).index()));
            // 将对应的roleBd中的图片更换
            $('.part2Cont .sub2Part3 .roleBd li.roleItem').eq(num).show();
            $('.part2Cont .sub2Part3 .roleBd li.roleItem').eq(num).siblings().hide();

        }
        $('.part2Cont .sub2Part3 .roleBd,.roleHd').mouseenter(function () {
            clearInterval(timeID);
        });
        $('.part2Cont .sub2Part3 .roleBd').mouseleave(function () {
            // clearInterval(timeID);
            timeID = setInterval(function () {
                nextPage();
            }, 3000);
        });

        //切换性别及图片
        $('.part2Cont .sub2Part3 .roleSex p').click(function () {
            $(this).addClass('active').siblings().removeClass('active');
            var index = $(this).index();
            console.log(index);
            $(this).parents('.roleItem').find('.roleImg img').eq(index).addClass('selected').siblings().removeClass('selected');
            // $('.part2Cont .sub2Part3 .roleImg img').eq(index).css({'z-index':0,'opacity':1}).siblings().css({'z-index':-1,'opacity':0});

        });



        // 新闻
        $('.sub2Part .hotHd .hotHdItem').mouseenter(function () {
            $(this).addClass('choose').siblings().removeClass('choose');
            var index = $(this).index();
            $('.sub2Part .hotBd .news_list').eq(index).addClass('active').siblings().removeClass('active');
        });



        // part 4  PSD
        $('.part4 .left .khfw li').mouseenter(function () {
            var index = $(this).index();
            $('.part4 .khfwBd .khfwItem').eq(index).stop(true, false).show().siblings().hide();
        })

        $('.part4 .videoHd a').mouseenter(function () {
            var index = $(this).index() - 1;
            $('.part4 .temwrap ul').eq(index).stop(true, false).show().siblings().hide();
        })
    });
})(window);