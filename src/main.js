import moment from "moment/moment";
import { promiseImage } from "./datas";
import { loadImageSelectOptions } from "./pages/editor/editor";
console.log("coucou");
var wrapper;
function LoadDate() {
  var footer = document.querySelector("footer");
  setInterval(function () {
    footer.innerHTML = new Date().toLocaleString();
    moment().format("LLLL");
  }, 1000);
}

document.addEventListener("DOMContentLoaded", function () {
  LoadDate();
  wrapper = document.querySelector("#wrapper");
  initNavbar();
  constructMainRouteContent(location.pathname);
  promiseImage.then(images=>{
      console.log("images", images);
  })

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
  const promiseLoadingPage = loadWrapperContent(
    "/src/pages/editor/editor.html",
  );
  promiseLoadingPage.then((r) => {
    console.log(`fin de chargement`);
  });
  Promise.all([promiseImage,promiseLoadingPage]).then(arrayDesReponses=>{
      console.log('tous les chargements sont effectues',arrayDesReponses )
      loadImageSelectOptions(arrayDesReponses[0])
  })
}
function loadDOMThumbnail() {
  loadWrapperContent("/src/pages/thumbnail/thumbnail.html");
}
function loadDOMHome() {
  loadWrapperContent("/src/pages/home/home.html");
}
/**
 * fonction de chargement du wrapper par une page html prevenant d'un adresse en param
 * @param {string} pageUrl url de la page html a chargé par appel http
 * @param {Function?} callback execution post chargement DOM
 * @returns {Promise<HTMLElement>} aucun retour
 */
const loadWrapperContent = (pageUrl) => {
  const promise = fetch(pageUrl).then((response) => {
    return response.text();
  });
  return promise.then((html) => {
    wrapper.innerHTML = html;
    return wrapper;
  });
};
