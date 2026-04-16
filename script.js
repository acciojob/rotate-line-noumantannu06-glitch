//your JS code here. If required.
// script.js - Continuous Line Rotation

// Global rotation angle variable
let rotationAngle = 0;

// Select the line element
const line = document.getElementById('line');

// Use setInterval to update rotation every 20ms
setInterval(() => {
    // Increment angle by 2 degrees
    rotationAngle += 2;
    
    // Apply CSS transform rotation
    line.style.transform = `rotate(${rotationAngle}deg)`;
}, 20);