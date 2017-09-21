define(['jquery','template','cookie'],function($,template){
	//NProgress.start();
    //
	//NProgress.done();

	$('.navs ul').prev('a').on('click', function () {
		$(this).next().slideToggle();
	});

	//退出登录
	$('#logoutBtn').on('click',function(){
		$.ajax({
			type:'post',
			url:'/api/logout',
			dataType:'json',
			success:function(data){
				if(data.code == 200){
					location.href = '/main/login';
				}
			}
		});
	});
	//验证登录
	var flag = $.cookie('PHPSESSID');
	if(!flag && location.pathname != '/main/login'){
		location.href = '/main/login';
	}
	//获取用户名及头像
	var loginInfo = $.cookie('loginInfo');
	loginInfo = loginInfo && JSON.parse(loginInfo);
	var tpl = '<div class="avatar img-circle"> <img src="{{tc_avatar}}"> </div> <h4>{{tc_name}}</h4>';
	var html = template.render(tpl,loginInfo);
	$('.aside .profile').html(html);
	//$('.aside .profile img').attr('src',loginInfo.tc_avatar);
	//$('.aside .profile h4').html(loginInfo.tc_name);
});
