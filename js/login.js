/**
 * login 登陆界面
 */
layui.use(['form', 'jquery'], function () {
    var $ = layui.jquery,
        form = layui.form,
        layer = layui.layer;
        if (localStorage.getItem("token")) {
            location.href = './index.html';
        }
    // 登录过期的时候，跳出ifram框架
    if (top.location != self.location) top.location = self.location;
    // 显示密码
    $('.bind-password').on('click', function () {
        if ($(this).hasClass('icon-5')) {
            $(this).removeClass('icon-5');
            $("input[name='password']").attr('type', 'password');
        } else {
            $(this).addClass('icon-5');
            $("input[name='password']").attr('type', 'text');
        }
    });

    $('.icon-nocheck').on('click', function () {
        if ($(this).hasClass('icon-check')) {
            $(this).removeClass('icon-check');
        } else {
            $(this).addClass('icon-check');
        }
    });

    // 进行登录操作
    form.on('submit(login)', function (data) {
        data = data.field;
        if (data.username == '') {
            layer.msg('用户名不能为空');
            return false;
        }
        if (data.password == '') {
            layer.msg('密码不能为空');
            return false;
        }
        if (data.identify == '') {
            layer.msg('用户身份不能为空');
            return false;
        }
        // if (data.captcha == '') {
        //     layer.msg('验证码不能为空');
        //     return false;
        // }
        // layer.msg('登录成功', function () {
        //     console.log(data)
        // });
        $.ajax({
            // url: 'http://api.njxzc.edu.cn/Login/login',
            url: sxkBaseUrl+'/Login/login',
            type: 'POST',
            dataType: 'json',
            data: data,
            success: function (data) {
                if (data.success) {
                    layer.msg(data.msg, {
                        icon: 1,
                        time: 1000
                    });
                    // 存储cookie
                    localStorage.setItem('token', data.data.token);
                    localStorage.setItem('identify', data.data.identify);
                    localStorage.setItem('realname', data.data.realname);
                    localStorage.setItem('uid', data.data.id);
                    //延迟1秒
                    setTimeout(function () {
                        window.location.href = "index.html";
                    }, 1000);
                    return false;
                } else {
                    layer.msg(data.msg, {
                        icon: 2,
                        time: 1000
                    });
                    return false;
                }
            }
        });
        return false;
    });
});

