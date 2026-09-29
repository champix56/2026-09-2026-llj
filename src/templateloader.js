function TemplateLoader() {
  this.wrapper = undefined;
  const loadTemplate=(url)=> {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onreadystatechange =  (evt)=> {
      if (evt.target.readyState < XMLHttpRequest.DONE) return;
      if (evt.target.status !== 200) return;
      console.log(this);
      //console.log(evt.target.readyState, evt.target.status,evt.target.responseText)
      putContentInWrapper(evt.target.responseText);
    };
    xhr.send();
  }
  const putContentInWrapper=(content)=> {
    this.wrapper.innerHTML = content;
  }
  this.loadTemplate = loadTemplate;
}
const loader = new TemplateLoader();
