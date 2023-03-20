//  let signInBtn=document.querySelector(".btn , .btn-warning")

// let characterspan=document.querySelector("#passwordHelpInline")

let container=document.querySelector(".custom--flex")
let recognizebtn=document.querySelector("#recognize")
 
let changeincolor=document.querySelector("#inputPassword")



function generateColorPalette(numColors) {
    var colors = [];
    for (var i = 0; i < numColors; i++) {
      var color = '#' + Math.floor(Math.random() * 16777215).toString(16); // generates a random hex color
      colors.push(color);
    }
    return colors;
  }
  
  var palette = generateColorPalette(); // generates a palette of 5 colors
  console.log(palette); // prints out an array of 5 random hex colors
  


// generates a palette of 5 colors
 
 
const outputcolor=function(){
    container.style.backgroundColor=`${generateColorPalette(1)}`
}


 recognizebtn.addEventListener("click",outputcolor)
console.log(generateColorPalette(1))

 
