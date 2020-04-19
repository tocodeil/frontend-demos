const svgns = "http://www.w3.org/2000/svg";

class Canvas {
    constructor(width, height) {
        this.root = document.createElementNS(svgns, 'svg');
        this.root.setAttributeNS(null, 'width', width);
        this.root.setAttributeNS(null, 'height', height);
    }

    addShape(shape, draggable=false) {
        this.root.appendChild(shape);
        if (draggable) {
            shape.addEventListener('mousedown', this.startDrag);
            shape.addEventListener('mouseleave', this.endDrag);
        }
    }

    startDrag = (evt) => {
        console.log('drag start');
        const shape = evt.target;
        shape.addEventListener('mousemove', this.drag);
        shape.addEventListener('mouseup', this.endDrag);
    }

    drag = (evt) => {
        console.log('drag');
        evt.preventDefault();
        const selectedElement = evt.target;
        const dragX = evt.clientX - 200;
        const dragY = evt.clientY;
        selectedElement.moveTo(dragX, dragY);
    }

    endDrag = (evt) => {
        console.log('drag end');
        const shape = evt.target;
        shape.removeEventListener('mousemove', this.drag);
        shape.removeEventListener('mouseup', this.endDrag);
    }
}

const Shape = {
    circle(cx, cy, r) {
        const el = document.createElementNS(svgns, 'circle');
        el.setAttributeNS(null, 'cx', cx);
        el.setAttributeNS(null, 'cy', cy);
        el.setAttributeNS(null, 'r', r);
        el.moveTo = function(x, y) {
            el.setAttributeNS(null, 'cx', x);
            el.setAttributeNS(null, 'cy', y);
        }
        return el;
    },
    square(x, y, width, height) {
        const el = document.createElementNS(svgns, 'rect');
        el.setAttributeNS(null, 'width', width);
        el.setAttributeNS(null, 'height', height);
        el.setAttributeNS(null, 'x', x);
        el.setAttributeNS(null, 'y', y);
        el.moveTo = function(x, y) {
            const w = el.getAttributeNS(null, 'width');
            const h = el.getAttributeNS(null, 'height');
            el.setAttributeNS(null, 'x', x - w/2);
            el.setAttributeNS(null, 'y', y - h/2);
        }
        return el;
    },
    line(x1, y1, x2, y2, color='black') {
        const el = document.createElementNS(svgns, 'path');
        el.setAttributeNS(null, 'd', `M ${x1} ${y1} L ${x2} ${y2} Z`);
        el.setAttributeNS(null, 'stroke', color);
        return el;
    }
}

const circle = new Canvas(100, 100);
circle.addShape(Shape.circle(50, 50, 30));
const sidebar = document.querySelector('.sidebar');
sidebar.appendChild(circle.root);

const sqr = new Canvas(100, 100);
sqr.addShape(Shape.square(20, 20, 50, 50));
sidebar.appendChild(sqr.root);

const line = new Canvas(100, 100);
line.addShape(Shape.line(20, 80, 80, 20));
sidebar.appendChild(line.root);

const canvas = new Canvas('100%', '100%');
const main = document.querySelector('.paint-area');
main.appendChild(canvas.root);

line.root.addEventListener('click', function() {
    canvas.addShape(Shape.line(250, 250, 400, 400), true);
});

circle.root.addEventListener('click', function() {
    canvas.addShape(Shape.circle(250, 250, 50), true);
});

sqr.root.addEventListener('click', function() {
    canvas.addShape(Shape.square(100, 100, 50, 50), true);
});