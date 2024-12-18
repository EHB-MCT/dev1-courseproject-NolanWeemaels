document.body.style.margin = "0";
document.body.style.overflow = "hidden";
document.body.style.backgroundColor = "#000";

// Space Invader parts
const invaderParts = [
    { left: '25px', top: '25px' }, { left: '75px', top: '75px' },
    { left: '125px', top: '25px' }, { left: '175px', top: '75px' },
    { left: '225px', top: '25px' }, { left: '25px', top: '175px' },
    { left: '225px', top: '175px' }
];

// Create an invader element
function createInvader(x, y) {
    const invader = document.createElement('div');
    invader.style.position = 'absolute';
    invader.style.left = `${x}px`;
    invader.style.top = `${y}px`;
    invader.style.width = '300px';
    invader.style.height = '300px';

    invaderParts.forEach(part => {
        const partElement = document.createElement('div');
        partElement.style.position = 'absolute';
        partElement.style.width = '50px';
        partElement.style.height = '50px';
        partElement.style.backgroundColor = '#B76184'; // Default color
        partElement.style.left = part.left;
        partElement.style.top = part.top;
        invader.appendChild(partElement);
    });

    document.body.appendChild(invader);
    return invader;
}

// Create 50 invaders at random positions
const invaders = Array.from({ length: 50 }, () => createInvader(Math.random() * window.innerWidth, Math.random() * window.innerHeight));

// Change colors of invaders
function changeColors() {
    const newColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    invaders.forEach(invader => {
        Array.from(invader.children).forEach(part => {
            part.style.backgroundColor = newColor;
        });
    });
}


// Animate invaders
function animate() {
    invaders.forEach(invader => {
        const currentTop = parseFloat(invader.style.top);
        invader.style.top = `${currentTop + Math.random() * 2 + 1}px`;

        if (currentTop > window.innerHeight) {
            invader.style.top = `-${Math.random() * 100}px`;
        }
    });

    requestAnimationFrame(animate);
}

animate(); // Start animation