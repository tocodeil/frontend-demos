const svgns = "http://www.w3.org/2000/svg";

const svg = document.querySelector('svg');

for (let i=1; i < 11; i++) {
    let x = i * 30;
    let y = 50;
    const circle = document.createElementNS(svgns, 'circle');
    circle.setAttributeNS(null, 'cx', x);
    circle.setAttributeNS(null, 'cy', y);
    circle.setAttributeNS(null, 'r', 10);

    circle.addEventListener('click', function(ev) {
        const el = ev.target;
        el.setAttributeNS(null, 'cy', 400);
    });

    svg.appendChild(circle);    
}