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
  loader.wrapper=wrapper
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
  loader.loadTemplate("/src/pages/home/home.html", wrapper);
}
