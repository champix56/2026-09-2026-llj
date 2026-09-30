export const images = [];
const loadDatas = () => {
  const promise = fetch("http://localhost:5679/images").then((r) => r.json());
  promise.then((array) => {
    images.push(...array);
    //Object.assign(images,array)
  });
};
loadDatas();