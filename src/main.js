console.log("coucou");
var wrapper;
function LoadDate() {
  var footer = document.querySelector("footer");
  setInterval(function () {
    footer.innerHTML = new Date().toLocaleString();
  }, 1000);
}

document.addEventListener("DOMContentLoaded", function () {
  LoadDate();
  wrapper = document.querySelector("#wrapper");
  initNavbar();
  constructMainRouteContent(location.pathname);
});

function initNavbar() {
  var links = document.querySelectorAll("nav a");
  links.forEach(function (link) {
    link.addEventListener("click", function (evt) {
      evt.preventDefault();
      console.log(evt);
      constructMainRouteContent(evt.target.attributes["href"].value);
      history.pushState(null, "", evt.target.attributes["href"].value);
    });
  });
}

function constructMainRouteContent(path) {
  switch (path) {
    case "/editor":
      loadDOMEditor();
      break;
    case "/thumbnail":
      loadDOMThumbnail();
      break;
    default:
      loadDOMHome();
      break;
  }
}
function loadDOMEditor() {
  wrapper.innerHTML = "<h1>Editor</h1>";
}
function loadDOMThumbnail() {
  wrapper.innerHTML = "<h1>Thumbnail</h1>";
}
function loadDOMHome() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "/src/pages/home/home.html");
  xhr.onreadystatechange = function (evt) {
    if (evt.target.readyState < XMLHttpRequest.DONE) return;
    if (evt.target.status !== 200) return;
    wrapper.innerHTML = evt.target.responseText;
    //console.log(evt.target.readyState, evt.target.status,evt.target.responseText)
  };
  xhr.send();
}
