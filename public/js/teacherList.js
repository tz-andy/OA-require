/**
 * Created by Administrator on 2017/9/21.
 */
define(['jquery','template','bootstrap'],function($,template){
    //加载讲师列表
    $.ajax({
        type : 'get',
        url : '/api/teacher',
        dataType : 'json',
        success : function(data){
            //console.log(data);
            var teacherListHtml = template('teacherListTpl',data);
           $('#teacherList').html(teacherListHtml);
            //注销和启用
            $('.startEnd').on('click',function(){
                var that =this;
                var tcId = $(this).parent().attr('data-tcId');
                var tcStatus = $(this).parent().attr('data-tcStatus');
                $.ajax({
                    type : 'post',
                    url : '/api/teacher/handle',
                    data : {
                        tc_id : tcId,
                        tc_status : tcStatus
                    },
                    dataType : 'json',
                    success : function(data){
                        if(data.code == 200){
                            $(that).parent().attr('data-tcStatus',data.result.tc_status);
                            if(data.result.tc_status == 0){
                                $(that).text('启用');
                            }else{
                                $(that).text('注销');
                            }
                        }
                    }
                }) ;
            });
            //查看讲师信息
            $('.viewInfo').on('click',function(){
                var tcId = $(this).parent().attr('data-tcId');
                $.ajax({
                   type : 'get',
                    url : '/api/teacher/view',
                    data : {
                        tc_id : tcId
                    },
                    dataType : 'json',
                    success : function(data){
                        // console.log(data);
                        var seeInfoHtml = template('seeInfoTpl',data.result);
                        $('.seeInfo').html(seeInfoHtml);
                        $('#teacherModal').modal();
                    }
                });
            });
        }
    });
});
