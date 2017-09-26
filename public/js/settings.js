define(['jquery','template'],function ($,template) {
    //获取数据，渲染页面
    $.ajax({
       type : 'get',
        url : '/api/teacher/profile',
        dataType : 'json',
        success : function (data) {
            console.log(data);
            var settingsInfoHtml = template('settingsInfoTpl',data.result);
            $('#settingsInfo').html(settingsInfoHtml);
        }
    });
});