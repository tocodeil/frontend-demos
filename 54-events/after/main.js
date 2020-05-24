const bus = new EventBus();

const panelElement = document.createElement('div');
const panel = new Display(panelElement, bus);
document.body.appendChild(panelElement);

for (let i=0; i < 5; i++) {
  const el = document.createElement('div');
  const counter = new Counter(el, bus);
  document.body.appendChild(el);
}
