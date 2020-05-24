const panelElement = document.createElement('div');
const panel = new Display(panelElement);
document.body.appendChild(panelElement);

for (let i=0; i < 5; i++) {
  const el = document.createElement('div');
  const counter = new Counter(el);
  document.body.appendChild(el);
}
