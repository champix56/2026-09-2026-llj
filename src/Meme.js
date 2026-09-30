class Meme2{
    #privatefield=2
     "id"= 0
      "titre"= "React n'roll";
      "text"= "React n'roll";
      "x"= 100;
      "y"= 20;
      "fontWeight"= "500";
      "fontSize"= 30;
      "underline"= false;
      "italic"= false;
      "imageId"= 0;
      "color"= "#000000";
      "frameSizeX"= 0;
      "frameSizeY"= 0;
      getSVGNode(){
        return this.#privatefield + this.x
      }
}




// function Meme () {
//   let id= 0;
//    let titre= "React n'roll";
//    let text= "React n'roll";
//    let x= 100;
//    let y= 20;
//    let fontWeight= "500";
//    let fontSize= 30;
//    let underline= false;
//    let italic= false;
//    let imageId= 0;
//    let color= "#000000";
//    let frameSizeX= 0;
//    let  frameSizeY= 0;
//   const getSVGNode = () => {
//     return "<svg></svg>";
//   };

//   this.underline=underline
// };
const meme=new Meme2()
console.log(meme)
console.log(meme.#privatefield)