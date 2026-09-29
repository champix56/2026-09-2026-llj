let meme;
let svgWrapper;
const initForm = () => {
  svgWrapper = document.querySelector("#viewer");
  meme = new Meme();
  document.forms["meme"]["x"].addEventListener("input", (evt) => {
    meme.x = Number.parseInt(evt.target.value);
    svgWrapper.innerHTML = "";
    svgWrapper.appendChild(meme.getSvgNode());
  });
  document.forms["meme"]["y"].addEventListener("input", (evt) => {
    meme.y = Number.parseInt(evt.target.value);
    svgWrapper.innerHTML = "";
    svgWrapper.appendChild(meme.getSvgNode());
  });

  document.forms["meme"]["text"].addEventListener("input", (evt) => {
    meme.text = evt.target.value;
    svgWrapper.innerHTML = "";
    svgWrapper.appendChild(meme.getSvgNode());
  });
};
