define(['jquery','template','uploadify','region'],function ($,template) {
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
            //省市县三级联动
            $('#pcd').region({
               url : '/public/assets/jquery-region/region.json'
            });
        }
    });
});