!function () {
    var view = document.querySelector('#message')
    var model = Model({resourceName:'Message'})
    var controller = {
        view: null,
        messageList: null,
        myForm: null,
        model:null,
        init: function (view,model) {
            this.view = view
            this.model = model
            this.myForm = view.querySelector('#postMessage')
            this.messageList = view.querySelector('#messageList')
            this.model.initAV()
            this.loadMessages()
            this.bindEvents()
        },
        
        loadMessages: function () {
            this.model.fetch().then((message) => {
                let array = message.map(
                    (item) => item.attributes
                )
                array.forEach((item) => {
                    let li = document.createElement('li')
                    li.innerText = `${item.name} :  ${item.content}`
                    this.messageList.append(li)
                })
            })
        },
        saveMessage:function(){
            var content = this.myForm.querySelector('input[name=content]').value
                var name = this.myForm.querySelector('input[name=name]').value
                
                this.model.save({'name':name,'content':content})
               .then( (object) =>{
                    let li = document.createElement('li')
                    li.innerText = `${name} : ${content}`
                    messageList.append(li)
                    myForm.querySelector('input[name=content]').value = ''
                })
        },
        bindEvents: function () {
            let myForm = this.myForm
            myForm.addEventListener('submit', (e) =>{
                e.preventDefault()
                this.saveMessage()
            })
        }
    }

controller.init(view,model)

}.call()



/*--------------------------------------------------*/



window.Controller = function(options){
    var init = function(view, model){
        this.messageList = view.querySelector('#messageList')
        this.form = view.querySelector('form')
        this.loadMessages()
        // object 上有这三个属性吗
      }
  
    let object = {
      view: null,
      model: null,
      messageList: null,
      form: null,
      init: function(view, model){ // A
        this.view = view
        this.model = model
        this.model.init()
        init.call(this, view, model) // 这是哪个 init
        this.bindEvents.call(this)
      },
      loadMessages: function(){
        this.model.fetch().then(
          (messages) => {
            let array = messages.map((item)=> item.attributes )
            array.forEach((item)=>{
              let li = document.createElement('li')
              li.innerText = `${item.name}: ${item.content}`
              this.messageList.appendChild(li)
            })
          } 
        )
      },
      bindEvents: function(){
        console.log(this.form)
        this.form.addEventListener('submit', (e)=>{
          e.preventDefault()
          this.saveMessage()
        })
      },
      saveMessage: function(){
        let myForm = this.form
        let content = myForm.querySelector('input[name=content]').value
        let name = myForm.querySelector('input[name=name]').value
        this.model.save({
          'name': name, 'content': content
        }).then(function(object) {
          let li = document.createElement('li')
          li.innerText = `${object.attributes.name}: ${object.attributes.content}`
          let messageList = document.querySelector('#messageList')
          messageList.appendChild(li)
          myForm.querySelector('input[name=content]').value = ''
          console.log(object)
        })
      }
    }
    return object
  }












