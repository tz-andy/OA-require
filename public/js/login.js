/**
 * Created by Administrator on 2017/9/21.
 */
define(['jquery','cookie'],function($){
    $('#loginBtn').on('click',function(){
        $.ajax({
            type:'post',
            url:'/api/login',
            data:$('#loginForm').serialize(),
            dataType:'json',
            success:function(data){
                if(data.code == 200){
                    $.cookie('loginInfo',JSON.stringify(data.result),{path:'/'});
                    location.href = '/main/index';
                }
            }
        });
        return false;
    });
});
