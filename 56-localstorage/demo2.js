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

function saveEverythingToLocalStorage() {
    const data = readFormFieldsAsObject();
    localStorage.setItem('formData', JSON.stringify(data));
}

function loadFieldsFromLocalStorage() {
    const data = localStorage.getItem('formData');
    try {
        const parsedData = JSON.parse(data);
        writeDataToForm(parsedData);
    } catch(err) {
        console.log(err);
        console.log('Invalid Data: ' + data);
        localStorage.removeItem('formData');
    }
}

form.addEventListener('input', saveEverythingToLocalStorage);
loadFieldsFromLocalStorage();