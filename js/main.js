window.onscroll = function(){
    if(window.scrollY>0){
        topNavBar.classList.add('sticky')
    }else{
        topNavBar.classList.remove('sticky')
    }
}
let menuli = document.getElementsByClassName('Menulist')
for(let i=0 ;i<menuli.length; i++){
    menuli[i].onmouseover = function(x){
        let sub = x.currentTarget
        sub.classList.add('active')        
    }
    menuli[i].onmouseout = function(x){
        let sub = x.currentTarget
        sub.classList.remove('active')        
    }
}
let aTage = document.querySelectorAll('nav > ul > li > a')
for(let i = 0; i < aTage.length; i ++){
    aTage[i].onclick = function(x){
        x.preventDefault()
        let aaa = x.currentTarget //获取到所触发事件的节点
        let href = aaa.getAttribute('href') //得到节点里的href
        let element = document.querySelector(href)//通过href （就是div的id）获取到相对的div
        let top = element.offsetTop //获取div到页面顶端的距离
        window.scrollTo(0,top-80)
        
    }
}


