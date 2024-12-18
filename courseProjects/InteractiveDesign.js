"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

// Space Invader Object
function createSpaceInvader(color) {
    return {
        x: Math.random() * (context.canvas.width - 300), 
        y: -300, // Start above the screen
        width: 300,
        height: 300,
        fillColor: color,
        parts: [
            {x: 75, y: 75, width: 50, height: 50},
            {x: 125, y: 125, width: 50, height: 50},
            {x: 175, y: 75, width: 50, height: 50},
            {x: 225, y: 125, width: 50, height: 50},
            {x: 275, y: 75, width: 50, height: 50},
            {x: 75, y: 225, width: 50, height: 50},
            {x: 275, y: 225, width: 50, height: 50}
        ],
        size: 300, 
        speed: Math.random() * 2 + 1, 
        opacity: 1, 
        wind: 0, // Wind effect
        move: function () {
            this.y += this.speed; // Falling down
            this.x += Math.random() * 2 - 1 + this.wind; // Horizontal wind movement
        },
        draw: function (context) {
            context.fillStyle = "black"; // Background color (black)
            context.fillRect(this.x + 50, this.y + 25, this.width, this.height);

            context.fillStyle = this.fillColor;
            this.parts.forEach(part => {
                context.fillRect(part.x + this.x, part.y + this.y, part.width, part.height);
            });
        }
    };
}

// Array to hold multiple space invaders
let spaceInvaders = [];
let wind = 0;
let width = context.canvas.width;
let height = context.canvas.height;
let invaderColor =  Utils.hsl(Math.random()*200, 70, 70);

setup();
update();

function setup() {
    window.onmousemove = mouseMove;
    context.textAlign = "center";

    // Create initial space invaders
    for (let i = 0; i < 10; i++) {
        spaceInvaders.push(createSpaceInvader(invaderColor));
    }

    // Button to change invader color
    const changeColorButton = document.getElementById("changeColorButton");
    changeColorButton.addEventListener("click", changeInvaderColor);

     // Add click event to destroy invaders
     context.canvas.addEventListener("click", destroyInvader);


}

function mouseMove(eventData) {
    let xOffset = width / 2 - eventData.pageX;
    wind = xOffset / 100; 
}

function update() {

    
    context.fillStyle = "#000000"; 
    context.fillRect(0, 0, width, height);

    // Update and draw each space invader
    for (let i = spaceInvaders.length - 1; i >= 0; i--) {
        let invader = spaceInvaders[i];
        invader.wind = wind; // Update wind effect for each invader
        invader.move();

        // Remove invader if it goes off the screen
        if (invader.y > height) {
            spaceInvaders.splice(i, 1); // Remove the invader
        }

        invader.draw(context);
    }

    // Add new invaders if needed
    if (spaceInvaders.length < 10) {
        spaceInvaders.push(createSpaceInvader(invaderColor));
    }


    requestAnimationFrame(update);
}

// Function to change the color of the invaders
function changeInvaderColor() {
    // Generate a random color
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

    // Update the color of all space invaders
    invaderColor = randomColor;

    // Create new invaders with the updated color
    spaceInvaders = [];
    for (let i = 0; i < 10; i++) {
        spaceInvaders.push(createSpaceInvader(invaderColor));
    }
}

// Function to destroy invaders on click
function destroyInvader(event) {
    const clickX = event.offsetX;
    const clickY = event.offsetY;

    for (let i = spaceInvaders.length - 1; i >= 0; i--) {
        const invader = spaceInvaders[i];
        if (
            clickX > invader.x &&
            clickX < invader.x + invader.width &&
            clickY > invader.y &&
            clickY < invader.y + invader.height
        ) {
            spaceInvaders.splice(i, 1); // Remove invader
            score++; // Increase score for destroying an invader
            break;
        }
    }
}


drawSmallSpaceInvader()
