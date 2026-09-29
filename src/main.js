console.log('coucou')
var wrapper;
function LoadDate() {
    var footer = document.querySelector('footer')
    setInterval(function () {
        footer.innerHTML = new Date().toLocaleString()
    }, 1000)
}

document.addEventListener('DOMContentLoaded', function () {
    LoadDate();
    wrapper= document.querySelector('#wrapper');
    initNavbar()
 })

function initNavbar(){
    var links=document.querySelectorAll('nav a')
    links.forEach(function(link){
        link.addEventListener('click',function(evt){
            evt.preventDefault();
            console.log(evt)
        })
    })
}

function loadDOMEditor() {
    wrapper.innerHTML = '<h1>Editor</h1>'
}
function loadDOMThumbnail() {
    wrapper.innerHTML = '<h1>Thumbnail</h1>'
}
function loadDOMHome() {
    wrapper.innerHTML = '<h1>Home</h1>'
}