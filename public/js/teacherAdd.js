define(['jquery','template','util'],function ($,template,util) {
    var tcId = util.queryString('tcId');
    if(tcId) {
        //编辑讲师
        $.ajax({
           type : 'get',
            url : '/api/teacher/edit',
            data : {
               tc_id : tcId
            },
            dataType : 'json',
            success : function (data) {
                   var teacherAddHtml = template('teacherAddTpl',data.result);
                   $('#teacherAdd').html(teacherAddHtml);
                submitForm('/api/teacher/update');
            }
        });
    }else{
        //添加讲师
        var teacherAddHtml = template('teacherAddTpl',{});
        $('#teacherAdd').html(teacherAddHtml);
        submitForm('/api/teacher/add');
    }
});
//提交表单
function submitForm(url) {
    $('#submitForm').on('click',function () {
        $.ajax({
            type : 'post',
            url : url,
            data : $('#teacherInfo').serialize(),
            dataType : 'json',
            success : function (data) {
                if(data.code==200){
                    location.href='/teacher/teacherList';
                }
            }
        });
    });
}