console.log('coucou')
var wrapper = document.querySelector('#wrapper')
function LoadDate() {
    var footer = document.querySelector('footer')
    setInterval(function () {
        footer.innerHTML = new Date().toLocaleString()
    }, 1000)
}

document.addEventListener('DOMContentLoaded', function () {
    LoadDate();
})

function loadDOMEditor() {
    wrapper.innerHTML = '<h1>Editor</h1>'
}
function loadDOMThumbnail() {
    wrapper.innerHTML = '<h1>Thumbnail</h1>'
}
function loadDOMHome() {
    wrapper.innerHTML = '<h1>Home</h1>'
}