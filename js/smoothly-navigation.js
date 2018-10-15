!function(){   
    var view = document.querySelector('nav')
    var controller = {
        view : null,
        aTage : null,
        init : function(view){
            this.view = view
            this.aTage = this.view.querySelectorAll('nav > ul > li > a')
            this.initAnimate()
            this.bindEvents()
        },
        initAnimate:function(){
            function animate(time) {
                requestAnimationFrame(animate);
                TWEEN.update(time);
            }                                   //tween.js 内置
            requestAnimationFrame(animate);
        },
        scrollToElement:function(element){
            let top = element.offsetTop //获取div到页面顶端的距离
            
            let currentTop = window.scrollY // 当前页面滚动条距离顶部的像素
            let targetTop = top - 80  //目标div 距离页面顶部的像素
            let s = targetTop - currentTop
    
            var coords = { y: currentTop }; //起始位置
            let t = Math.abs((s / 100) * 300)
            if (t > 500) {
                t = 650
            }
            var tween = new TWEEN.Tween(coords) //放入起始位置参数
                .to({ y: targetTop }, t) // 放入终止位置  时间 参数
                .easing(TWEEN.Easing.Quadratic.InOut)  //选择运动轨迹函数自己机选好运动距离和时间间隔 我们知道规定总距离和时间
                .onUpdate(function () {
                    window.scrollTo(0, coords.y)
                })
                .start();
        },
        bindEvents:function(){
             let aTage = this.view.querySelectorAll('nav > ul > li > a')
            for (let i = 0; i < aTage.length; i++) {
                aTage[i].onclick =  (x) => {
                    x.preventDefault()
                    let aaa = x.currentTarget //获取到所触发事件的节点
                    let href = aaa.getAttribute('href') //得到节点里的href
                    let element = document.querySelector(href)//通过href （就是div的id）获取到相对的div
                    this.scrollToElement(element)
                }
            }
        },
    }
    controller.init(view)
}.call()
