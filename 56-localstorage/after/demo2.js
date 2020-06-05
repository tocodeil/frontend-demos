const form = document.querySelector('form');

form.addEventListener('input', function() {
    const formData = readFormFieldsAsObject();
    localStorage.setItem('formData', JSON.stringify(formData));
});

const dataString = localStorage.getItem('formData');
const formData = JSON.parse(dataString);
writeDataToForm(formData);


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

