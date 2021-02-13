
jQuery(document).ready(function() {
    /*
        Background slideshow
    */
    $.backstretch([
      "/images/backgrounds/loginbg.png"
    , "/images/backgrounds/2.jpg"
    , "/images/backgrounds/3.jpg"
    ], {duration: 3000, fade: 750});

    /*
        Tooltips
    */
    $('.links a.home').tooltip();
    $('.links a.blog').tooltip();

    /*
        worker Form validation
    */
   $("#worker").click(function(){
        // 工号
        $("#register").find("label[for='job_num']").html('工号');
        // 昵称
        $("#register").find("label[for='nickname']").html('昵称');
        // 真实姓名
        $("#register").find("label[for='realname']").html('姓名');
        // 密码
        $("#register").find("label[for='password']").html('密码');
        // email
        $("#register").find("label[for='email']").html('邮箱');

        // 获取input信息
        var job_num = $("#register").find('input#job_num').val();
        var nickname = $("#register").find('input#nickname').val();
        var realname = $("#register").find('input#realname').val();
        var email = $("#register").find('input#email').val();
        var password = $("#register").find('input#password').val();

        if(job_num == '') {
            $("#register").find("label[for='job_num']").append("<span style='display:none' class='red'> - 请输入你您的工号.</span>");
            $("#register").find("label[for='job_num'] span").fadeIn('medium');
            return false;
        }
        if(nickname == '') {
            $("#register").find("label[for='nickname']").append("<span style='display:none' class='red'> - 请输入您的昵称.</span>");
            $("#register").find("label[for='nickname'] span").fadeIn('medium');
            return false;
        }
        if(realname == '') {
            $("#register").find("label[for='realname']").append("<span style='display:none' class='red'> - 请输入您的姓名.</span>");
            $("#register").find("label[for='realname'] span").fadeIn('medium');
            return false;
        }
        if(password == '') {
            $("#register").find("label[for='password']").append("<span style='display:none' class='red'> - 请输入您的密码.</span>");
            $("#register").find("label[for='password'] span").fadeIn('medium');
            return false;
        }
        if(email == '') {
            $("#register").find("label[for='email']").append("<span style='display:none' class='red'> - 请输入您的邮箱.</span>");
            $("#register").find("label[for='email'] span").fadeIn('medium');
            return false;
        }

        let data = {
            'job_num' : job_num,
            'nickname' : nickname,
            'realname': realname,
            'password' : password,
            'email' : email,
            'source' : 1
        };

        /* 
            用户注册
        */
       $.ajax({
           type: "POST",
           url: sxkBaseUrl + "User/register",
           data: data,
           dataType: "json",
           success: function (response) {
            if (response.success) {
                $(".box").empty();
                $(".box").append('<div class="alert alert-success"><strong>成功!</strong>'+response.msg+'</div>');
                //延迟1秒
                setTimeout(function () {
                    $(".box").empty();
                }, 1500);
                //延迟1秒
                setTimeout(function () {
                    window.location.href = "login.html";
                }, 1000);
                return false;
            } else {
                $(".box").empty();
                $(".box").append('<div class="alert alert-warning"><strong>警告!</strong>'+response.msg+'</div>');
                //延迟1秒
                setTimeout(function () {
                    $(".box").empty();
                }, 1500);
                return false;
            }
           }
       });
    });

    /*
        teacher Form validation
    */
   $("#teacher").click(function(){
    // 工号
    $("#register").find("label[for='job_num']").html('工号');
    // 昵称
    $("#register").find("label[for='nickname']").html('昵称');
    // 真实姓名
    $("#register").find("label[for='realname']").html('姓名');
    // 密码
    $("#register").find("label[for='password']").html('密码');
    // email
    $("#register").find("label[for='email']").html('邮箱');

    // 获取input信息
    var job_num = $("#register").find('input#job_num').val();
    var nickname = $("#register").find('input#nickname').val();
    var realname = $("#register").find('input#realname').val();
    var email = $("#register").find('input#email').val();
    var password = $("#register").find('input#password').val();

    if(job_num == '') {
        $("#register").find("label[for='job_num']").append("<span style='display:none' class='red'> - 请输入你您的工号.</span>");
        $("#register").find("label[for='job_num'] span").fadeIn('medium');
        return false;
    }
    if(nickname == '') {
        $("#register").find("label[for='nickname']").append("<span style='display:none' class='red'> - 请输入您的昵称.</span>");
        $("#register").find("label[for='nickname'] span").fadeIn('medium');
        return false;
    }
    if(realname == '') {
        $("#register").find("label[for='realname']").append("<span style='display:none' class='red'> - 请输入您的姓名.</span>");
        $("#register").find("label[for='realname'] span").fadeIn('medium');
        return false;
    }
    if(password == '') {
        $("#register").find("label[for='password']").append("<span style='display:none' class='red'> - 请输入您的密码.</span>");
        $("#register").find("label[for='password'] span").fadeIn('medium');
        return false;
    }
    if(email == '') {
        $("#register").find("label[for='email']").append("<span style='display:none' class='red'> - 请输入您的邮箱.</span>");
        $("#register").find("label[for='email'] span").fadeIn('medium');
        return false;
    }

    let data = {
        'job_num' : job_num,
        'nickname' : nickname,
        'realname': realname,
        'password' : password,
        'email' : email,
        'source' : 2
    };

    /* 
        用户注册
    */
   $.ajax({
       type: "POST",
       url: sxkBaseUrl + "User/register",
       data: data,
       dataType: "json",
       success: function (response) {
           if (response.success) {
                $(".box").empty();
                $(".box").append('<div class="alert alert-success"><strong>成功!</strong>'+response.msg+'</div>');
                //延迟1秒
                setTimeout(function () {
                    $(".box").empty();
                }, 1500);
                //延迟1秒
                setTimeout(function () {
                    window.location.href = "login.html";
                }, 1000);
                return false;
            } else {
                $(".box").empty();
                $(".box").append('<div class="alert alert-warning"><strong>警告!</strong>'+response.msg+'</div>');
                //延迟1秒
                setTimeout(function () {
                    $(".box").empty();
                }, 1500);
                return false;
            }
       }
   });
});
});


