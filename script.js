// Get the buttons
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');

// Function to explode the button
function explodeButton(button) {
    // Create a larger explosion with more particles
    for (let i = 0; i < 1000; i++) { // Increased the number of particles
        let particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = '20px'; // Larger particle size
        particle.style.height = '20px'; // Larger particle size
        particle.style.backgroundColor = '#ff0';
        particle.style.borderRadius = '50%';
        particle.style.animation = `explode 1s forwards`; // Faster explosion
        particle.style.left = `${button.offsetLeft + button.offsetWidth / 2}px`;
        particle.style.top = `${button.offsetTop + button.offsetHeight / 2}px`;

        // Randomly move particles in all directions
        particle.style.animationDelay = `${Math.random() * 0.5}s`;
        document.body.appendChild(particle);

        // Randomize particle movement
        let angle = Math.random() * 2 * Math.PI;
        let distance = Math.random() * 400; // Increased distance for larger explosion

        particle.style.transform = `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`;
    }

    // Hide the original button after explosion
    button.style.display = 'none';
}

// Button click events to navigate and trigger explosion
button1.addEventListener('click', () => {
    explodeButton(button1);
    setTimeout(() => {
        window.location.href = 'page1.html'; // Redirect to page1
    }, 1000); // Faster explosion
});

button2.addEventListener('click', () => {
    explodeButton(button2);
    setTimeout(() => {
        window.location.href = 'page2.html'; // Redirect to page2
    }, 1000); // Faster explosion
});

// Function to create balls around the border
function createBalls() {
    const ballCount = 24; // Number of balls around the border
    const container = document.getElementById('balls-container');
    const ballSize = 15;
    const radius = Math.min(window.innerWidth, window.innerHeight) / 2 - ballSize;

    for (let i = 0; i < ballCount; i++) {
        const ball = document.createElement('div');
        ball.classList.add('ball');

        // Position the balls around the border
        const angle = (i / ballCount) * 2 * Math.PI;
        const x = Math.cos(angle) * radius + window.innerWidth / 2 - ballSize / 2;
        const y = Math.sin(angle) * radius + window.innerHeight / 2 - ballSize / 2;

        ball.style.left = `${x}px`;
        ball.style.top = `${y}px`;

        container.appendChild(ball);
    }
}

// Initialize the balls on page load
window.onload = createBalls;