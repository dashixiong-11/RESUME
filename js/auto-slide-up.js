!function(){
    // 找到 所有 有data-x 的标签  加上offset类  （往上移动一小段距离的class）
let specialTags = document.querySelectorAll('[data-x]')
for (let i = 0; i < specialTags.length; i++) {
    specialTags[i].classList.add('offset')
}
setTimeout(function () {
//找到里浏览器视口顶端 最近的 移除offset类
findAndRemoveOffset()
}, 1000)
// 如果滚动了 找到滚动后最近的元素移除 offset类
window.addEventListener('scroll',function(x){
    findAndRemoveOffset()
})
//移动到相应的版块 nav加上下划线
function findAndRemoveOffset() {
    let specialTags = document.querySelectorAll('[data-x]')
    let minIndex = 0
    for (let i = 1; i < specialTags.length; i++) {
        let a = Math.abs(specialTags[i].offsetTop - window.scrollY)
        let b = Math.abs(specialTags[minIndex].offsetTop - window.scrollY)
        if (a < b) {
            minIndex = i
        }
    }
    for (let i = 0; i < specialTags.length; i++) {
        let id = specialTags[i].id
        let abiaoq = document.querySelector('a[href="#' + id + '"]')
        let li = abiaoq.parentNode
        li.classList.remove('hightlight')
    }
    specialTags[minIndex].classList.remove('offset')
    let id = specialTags[minIndex].id     
    let abiaoq = document.querySelector('a[href="#' + id + '"]')
    let li = abiaoq.parentNode
    li.classList.add('hightlight')
}
}.call()