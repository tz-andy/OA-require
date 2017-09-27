define(['jquery','template','ckeditor','uploadify','region','datepicker','language','validate','form'],function ($,template,CKEDITOR) {
    //获取数据，渲染页面
    $.ajax({
       type : 'get',
        url : '/api/teacher/profile',
        dataType : 'json',
        success : function (data) {
            // console.log(data);
            var settingsInfoHtml = template('settingsInfoTpl',data.result);
            $('#settingsInfo').html(settingsInfoHtml);
            //头像上传
            $('#upfile').uploadify({
                width : 120,
                height : 120,
               swf : '/public/assets/uploadify/uploadify.swf',
               uploader : '/api/uploader/avatar',
                fileObjName : 'tc_avatar',
                buttonText : '',
                itemTemplate : '<span></span>',
                onUploadSuccess : function (file,data) {
                    var imgObj = JSON.parse(data);
                    // console.log(imgObj);
                    $('.preview img').attr('src',imgObj.result.path);
                }
            });
            //日期插件
            $('#birthday').datepicker({
                'language' : 'zh-CN',
                'format' : 'yyyy-mm-dd',
                'endDate' : '0d'
            });
            $('#joinDate').datepicker({
                'language' : 'zh-CN',
                'format' : 'yyyy-mm-dd',
                'endDate' : '0d'
            });
            //省市县三级联动
            $('#pcd').region({
               url : '/public/assets/jquery-region/region.json'
            });
            //富文本
            CKEDITOR.replace('editor');
            //表单提交
            $('#setInfo').validate({
               sendForm : false,
                description : {
                   roster : {
                       required : '请填写昵称',
                   },
                    birthday : {
                        required : '出生日期不能为空'
                    },
                    cellphone : {
                       required : '手机号码不能为空',
                        pattern : '请填写正确的手机号码'
                    },
                   email : {
                        required : '邮箱不能为空',
                        pattern : '请填写正确的邮箱'
                    },
                    joinDate : {
                        required: '入职日期不能为空'
                    }
                },
                valid : function () {
                   //获取籍贯信息
                    var p = $('#p').find('option:selected').text();
                    var c = $('#c').find('option:selected').text();
                    var d = $('#d').find('option:selected').text();
                   var tcHometown = p + '|' + c + '|' + d;
                   //更新富文本内容
                    for(var instance in CKEDITOR.instances){
                        CKEDITOR.instances[instance].updateElement();
                    }
                    $(this).ajaxSubmit({
                        type : 'post',
                        url : '/api/teacher/modify',
                        data : {
                            tc_hometown : tcHometown
                        },
                        dataType : 'json',
                        success : function (data) {
                            if(data.code==200){
                                location.reload();
                            }
                        }
                    });
                }
            });
        }
    });
});