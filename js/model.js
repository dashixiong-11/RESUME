window.Model = function(options){
    let resourceName = options.resourceName
    return {
        fetch:function(){
            var query = new AV.Query(resourceName);
            return query.find()
        },
        save:function(object){
            var TestObject = AV.Object.extend(resourceName)
            // 创建一个 名字为TestObject 新表格
            var testObject = new TestObject()
            return testObject.save(object)
        },
        initAV: function () {
            var APP_ID = 'xgxcsg8iFfjUfLPLmNYmpDiv-gzGzoHsz';
            var APP_KEY = '4UOsLbL4V837AQ1f2mR3FOAa';
            AV.init({
                appId: APP_ID,
                appKey: APP_KEY,
            });
        }
    }
}