export const loadImageSelectOptions = (images) => {
  const select = document.forms["meme-form"]["imageId"];
  select.innerHTML = "";
  images.forEach(img => {
    const opt = document.createElement("option");
    opt.value = img.id;
    opt.textContent = img.name;
    select.appendChild(opt)
  });
};
