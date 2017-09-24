/**
 * Created by Administrator on 2017/9/20.
 */
require.config({
    baseUrl : '/public/assets',
    paths : {
        jquery : 'jquery/jquery',
        cookie : 'jquery-cookie/jquery.cookie',
        bootstrap : 'bootstrap/js/bootstrap',
        template : 'artTemplate/template-web',
        common : '../js/common',
        login : '../js/login',
        teacherList : '../js/teacherList',
        teacherAdd : '../js/teacherAdd',
        util : '../js/util'
    },
    shim : {
        bootstrap : {
            deps : ['jquery']
        }
    }
});
