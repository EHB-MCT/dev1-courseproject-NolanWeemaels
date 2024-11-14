"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";
import * as Noise from "../../scripts/noise.js";

let width = context.canvas.width;
let height = context.canvas.height;

// This are parameters for the small spaceinvaders in the bckground, So they have an influence on the small ones. 
  // Just change the devisionFactor to change the size of all the little spaceinvaders in the background, If the DevisionFactor is high you get a very small size. 
let divisionFactor = 13;
let bigSize = 150/divisionFactor;
let spacing = 157.5/divisionFactor;
let littleSize = 25/divisionFactor;
let sizeFactor = divisionFactor*2;

  // These 2 parameters change the amount of squares drawn on the canvas, Don't make these numbers to high otherwise it will take a long time to refresh.
let amountHorizotalSquares = 300;
let amountVerticalSquares = 300;

// This are parameters for the big spaceinvader, So they have an influence on the big one. 
let colorBigSpaceInvader = Utils.hsla(Math.random()*360, 200, 50,50+Math.random()*100);
let xBigSpaceInvader = width/2 -150
let yBigSpaceInvader = height/2 -150


// This is the code of the multiple spaceinvaders in the background, here you can change the color, amount and size manually. 
drawMutipleSpaceInvaders();

function drawMutipleSpaceInvaders() {
  context.fillStyle = "black";
  context.fillRect(0, 0, width, height);
  context.fillStyle = "black";
  
  for (let i = 0; i < amountHorizotalSquares; i++) {
    for (let j = 0; j < amountVerticalSquares; j++) {
      context.fillStyle = Utils.hsla(Math.random*360, 200, 50,50);
      context.fillRect(10/sizeFactor + i * spacing, 10/sizeFactor + j * spacing, bigSize, bigSize);
    }
  }

  for (let i = 0; i < amountHorizotalSquares; i++) {
    for (let j = 0; j < amountVerticalSquares; j++) {
        context.fillStyle = Utils.hsla(Math.random()*360, 200, 50,50+Math.random()*100);
      context.fillRect(35/sizeFactor + i * spacing, 35/sizeFactor + j * spacing, littleSize, littleSize);
      context.fillRect(85/sizeFactor + i * spacing, 85/sizeFactor + j * spacing, littleSize, littleSize);
      context.fillRect(135/sizeFactor + i * spacing, 35/sizeFactor + j * spacing, littleSize, littleSize);
      context.fillRect(185/sizeFactor + i * spacing, 85/sizeFactor + j * spacing, littleSize, littleSize);
      context.fillRect(235/sizeFactor + i * spacing, 35/sizeFactor + j * spacing, littleSize, littleSize);
      context.fillRect(35/sizeFactor + i * spacing, 185/sizeFactor + j * spacing, littleSize, littleSize);
      context.fillRect(235/sizeFactor + i * spacing, 185/sizeFactor + j * spacing, littleSize, littleSize);
    }
  }
}


// This is the code of the single big spaceinvader, here you can change the lineWidth, color and size manually.
drawBigSpaceInvader();

function drawBigSpaceInvader(){
    context.fillStyle=Utils.hsla(360,0,0,70);
    context.fillRect(xBigSpaceInvader,yBigSpaceInvader,300,300)
    context.strokeStyle = colorBigSpaceInvader
    context.lineWidth = 10;
    context.stroke
    context.strokeRect(xBigSpaceInvader,yBigSpaceInvader,300,300)

    context.fillStyle = colorBigSpaceInvader
    context.fillRect(xBigSpaceInvader + 25,yBigSpaceInvader+25,50,50);
    context.fillRect(xBigSpaceInvader+75,yBigSpaceInvader +75,50,50);
    context.fillRect(xBigSpaceInvader+125,yBigSpaceInvader+25,50,50);
    context.fillRect(xBigSpaceInvader+175,yBigSpaceInvader+75,50,50);
    context.fillRect(xBigSpaceInvader+225,yBigSpaceInvader+25,50,50);
    context.fillRect(xBigSpaceInvader+25,yBigSpaceInvader+175,50,50);
    context.fillRect(xBigSpaceInvader+225,yBigSpaceInvader+175,50,50);
}
