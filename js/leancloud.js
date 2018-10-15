!function () {
    var view = document.querySelector('#message')
    var controller = {
        view: null,
        messageList: null,
        myForm: null,
        init: function (view) {
            this.view = view
            this.myForm = view.querySelector('#postMessage')
            this.messageList = view.querySelector('#messageList')
            this.initAV()
            this.loadMessages()
            this.bindEvents()
        },
        initAV: function () {
            var APP_ID = 'xgxcsg8iFfjUfLPLmNYmpDiv-gzGzoHsz';
            var APP_KEY = '4UOsLbL4V837AQ1f2mR3FOAa';
            AV.init({
                appId: APP_ID,
                appKey: APP_KEY,
            });
        },
        loadMessages: function () {
            var query = new AV.Query('Message');
            query.find().then((message) => {
                let array = message.map(
                    (item) => item.attributes
                )
                array.forEach((item) => {
                    let li = document.createElement('li')
                    li.innerText = `${item.name} :  ${item.content}`
                    this.messageList.append(li)
                })
            }, function (error) {
                // 异常处理
            })
        },
        bindEvents: function () {
            let myForm = this.myForm
            myForm.addEventListener('submit', function (e) {
                e.preventDefault()
                var content = myForm.querySelector('input[name=content]').value
                var name = myForm.querySelector('input[name=name]').value
                var TestObject = AV.Object.extend('Message')
                // 创建一个 名字为TestObject 新表格
                var testObject = new TestObject()
                testObject.save({
                    //储存数据组的名字 words     内容 hello world
                    content: content,
                    name: name
                }).then(function (object) {
                    let li = document.createElement('li')
                    li.innerText = `${content} : ${name}`
                    messageList.append(li)
                    myForm.querySelector('input[name=content]').value = ''
                })
            })
        }
    }

controller.init(view)

}.call()