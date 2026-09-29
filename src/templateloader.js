function TemplateLoader() {
  this.wrapper = undefined;
  function loadTemplate(url) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onreadystatechange = function (evt) {
      if (evt.target.readyState < XMLHttpRequest.DONE) return;
      if (evt.target.status !== 200) return;
      console.log(this);
      //console.log(evt.target.readyState, evt.target.status,evt.target.responseText)
      putContentInWrapper(evt.target.responseText);
    };
    xhr.send();
  }
  function putContentInWrapper(content) {
    this.wrapper.innerHTML = content;
  }
  this.loadTemplate = loadTemplate;
}
var loader = new TemplateLoader();
