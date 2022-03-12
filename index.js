let main = document.querySelector('main');

let text = document.createElement('h1');
text.textContent = 'click';
main.appendChild(text);

function randomColorValue() {
  return Math.floor(Math.random() * 256);
}

function randomColor() {
  let r = randomColorValue();
  let g = randomColorValue();
  let b = randomColorValue();
  return `rgb(${r}, ${g}, ${b})`;
}

// let colorValue1 = randomColorValue();
// let colorValue2 = randomColorValue();
// let colorValue3 = randomColorValue();




// let color0 = randomColor();
// let color1 = randomColor();
// let color2 = randomColor();
// let color3 = randomColor();
// let color4 = randomColor();
// let color5 = randomColor();
// let color6 = randomColor();
// let color7 = randomColor();
// let color8 = randomColor();
// let color9 = randomColor();


let colorArray = [];

for (let i = 0; i < 10; i++) {
  colorArray.push(randomColor());
}

let indexCounter = 0;
let opacity = 1;
let borderRadius = 50;
let opacityDirection = 'down';
let borderDirection = 'down';

// color1 = 'black';
// color2 = 'white';
// colorArray = [color1, randomColor(), color1];

function generateDiv() {
  // let color1 = `rgb(${colorValue1}, ${colorValue2}, ${colorValue3})`;
  // let color2 = `rgb(${colorValue2}, ${colorValue3}, ${colorValue1})`;
  // let color3 = `rgb(${colorValue3}, ${colorValue1}, ${colorValue2})`;



  let div = document.createElement('div');
  div.style.backgroundColor = colorArray[indexCounter];
  div.style.opacity = opacity;
  if (opacity > 0 && opacityDirection === 'down') {
    opacity = opacity -.1;  
  } else if (opacity <= 0) {
    opacityDirection = 'up';
    opacity = opacity +.1;
  } else if (opacity < 1 && opacityDirection === 'up') {
    opacity = opacity +.1;
  } else {
    opacityDirection = 'down';
    opacity = opacity - .1;
  }
  
  div.style.borderRadius = `${borderRadius}%`;

    if (borderRadius > 0 && borderDirection === 'down') {
      borderRadius = borderRadius - .1;
    } else if (borderRadius <= 0) {
      borderDirection = 'up'
      borderRadius += .1;
    } else if (borderRadius < 50 && borderDirection === 'up') {
      borderRadius += .1;
    } else {
      borderDirection = 'down';
      borderRadius -= .1;
    }
  // let randomShapeGlitch = Math.random();
  // if (randomShapeGlitch > .5) {
  //   if (borderRadius < 50) {
  //     borderRadius += 1;
  //   } else {
  //     borderRadius = 0
  //   }
  //   }
    
    let randomColorGlitch = Math.random();
    // if (randomColorGlitch > .99) {
    //   return;
    if (randomColorGlitch > .999) {
      colorArray[indexCounter] = randomColor();
    }
  
  if (indexCounter < 2) {
    indexCounter++
  } else indexCounter = 0;

  // if (colorValue1 < 255) {
  //   colorValue1++
  // } else { colorValue1 = 0 }
  // if (colorValue2 < 255) {
  //   colorValue2++
  // } else colorValue2 = 0
  // if (colorValue3 < 255) {
  //   colorValue3++
  // } else colorValue3 = 0

  return div;
};

function generateRow() {
  let section = document.createElement('section');
  for (let i = 0; i < 20; i++) {
    section.appendChild(generateDiv());
  }
  main.appendChild(section);
}

function startAnimation() {
  text.style.display = 'none';
  setInterval(() => {
    generateRow();
    window.scrollTo(0, document.body.scrollHeight);
  },100);
}
// generateSection();
  // generateDiv()


// for (let i = 0; i < 1000; i++) { 
//   let div1 = document.createElement('div');
//   div1.style.backgroundColor = color1;
//   main.appendChild(div1);
//   let div2 = document.createElement('div');
//   div2.style.backgroundColor = color2;
//   main.appendChild(div2);
//   let div3 = document.createElement('div');
//   div3.style.backgroundColor = color3;
//   main.appendChild(div3);
//   // let div4 = document.createElement('div');
//   // div4.style.backgroundColor = color4;
//   // main.appendChild(div4);
// }

document.addEventListener('click', startAnimation);