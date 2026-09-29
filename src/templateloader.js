function loadTemplate(url, wrapper) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.onreadystatechange = function (evt) {
    if (evt.target.readyState < XMLHttpRequest.DONE) return;
    if (evt.target.status !== 200) return;
    wrapper.innerHTML = evt.target.responseText;
    //console.log(evt.target.readyState, evt.target.status,evt.target.responseText)
  };
  xhr.send();
}
