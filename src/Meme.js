class Meme {
  x = 0;
  y = 20;
  fontSize = 20;
  imageId = -1;
  text = "";
  color = "#000000";

  getSvgNode() {
    const imageData = images.find((image) => image.id === this.imageId);
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    if (imageData) {
      svg.setAttribute("viewBox", "0 0 " + imageData.w + " " + imageData.h);
      const img = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "image",
      );
      img.href = imageData.href;
      img.setAttribute("x", 0);
      img.setAttribute("y", 0);
      svg.appendChild(img);
    } else {
      svg.setAttribute("viewBox", "0 0 500 500");
    }
    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.textContent = this.text;
    text.setAttribute("x", this.x);
    text.setAttribute("y", this.y);
    text.setAttribute("font-size", this.fontSize);
    text.setAttribute("fill", this.color);
    svg.appendChild(text);
    return svg;
  }
}
const images = [];
