define(['jquery'],function ($) {
   return {
       queryString : function (key) {
           var param = location.search.substr(1);
           var tcId = null;
           if(param){
               var paramList = param.split('&');
               $.each(paramList,function (i,item) {
                   var items = item.split('=');
                   if(items[0] == key){
                       tcId=items[1];
                       return false;
                   }
               });
           }
           return tcId;
       }
   }
});