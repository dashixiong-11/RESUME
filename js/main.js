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