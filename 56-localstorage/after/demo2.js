const form = document.querySelector('form');

function writeDataToForm(data) {    
    let inp;
    const names = Object.keys(data);
    for (let name of names) {
        inp = form.querySelector(`[name="${name}"]`);
        inp.value = data[name];
    }
}

function readFormFieldsAsObject() {
    const data = {};
    const inputs = form.querySelectorAll('input,select');
    for (let inp of inputs) {
        data[inp.name] = inp.value;
    }
    return data;
}

const formData = localStorage.getItem('form');
if (formData != null) {
    const data = JSON.parse(formData);
    writeDataToForm(data);
}

form.addEventListener('input', function() {
    const data = readFormFieldsAsObject();
    localStorage.setItem('form', JSON.stringify(data));
});