define(['jquery','template','util','datepicker','language','validate','form'],function ($,template,util) {
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
    $('#teacherInfo').validate({
       sendForm : false,
        description : {
            tcName : {
               required : '名字不能为空'
            },
             tcPass : {
                 required : '密码不能为空',
                pattern : '以字母开头，长度在6~18之间，只能包含字符、数字和下划线'
             },
             tcJoinDate : {
                 required : '入职日期不能为空'
             }
        },
        valid : function () {
            $(this).ajaxSubmit({
                type : 'post',
                url : url,
                dataType : 'json',
                success : function (data) {
                    if(data.code==200){
                        location.href='/teacher/teacherList';
                    }
                }
            });
        }
    });
}
// function submitForm(url) {
//     $('#submitForm').on('click',function () {
//         $.ajax({
//             type : 'post',
//             url : url,
//             data : $('#teacherInfo').serialize(),
//             dataType : 'json',
//             success : function (data) {
//                 if(data.code==200){
//                     location.href='/teacher/teacherList';
//                 }
//             }
//         });
//     });
// }