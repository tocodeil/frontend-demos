const svgns = "http://www.w3.org/2000/svg";

const svg = document.querySelector('svg');

for (let i=0; i < 10; i++) {
    const circle = document.createElementNS(svgns, 'circle');
    circle.setAttributeNS(null, 'cx', i * 30);
    circle.setAttributeNS(null, 'cy', i * 30);
    circle.setAttributeNS(null, 'r', 10);
    svg.appendChild(circle);
}