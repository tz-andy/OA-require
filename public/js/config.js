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
        datepicker : 'bootstrap-datepicker/js/bootstrap-datepicker',
        language : 'bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min',
        validate : 'validate/jquery-validate',
        form : 'jquery-form/jquery.form',
        uploadify : 'uploadify/jquery.uploadify',
        region : 'jquery-region/jquery.region',
        common : '../js/common',
        login : '../js/login',
        teacherList : '../js/teacherList',
        teacherAdd : '../js/teacherAdd',
        settings : '../js/settings',
        util : '../js/util'
    },
    shim : {
        bootstrap : {
            deps : ['jquery']
        },
        language : {
            deps : ['jquery','datepicker']
        },
        validate : {
            deps : ['jquery']
        },
        uploadify : {
            deps : ['jquery']
        }
    }
});
