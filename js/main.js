const form = document.querySelector('form');
const resultVal = document.getElementById('resultVal');
const errorMsg = document.getElementById('error');

form.addEventListener('submit', convertTemp);

function convertTemp(e) {
    // Prevent default functionality
    e.preventDefault();

    // Get form values
    const tempVal = parseInt(document.getElementById('tempValue').value, 10);
    const toConvert = document.getElementById('toConvert').value;
    const convertTo = document.getElementById('convertTo').value;
    const select1 = document.getElementById('toConvert');
    const select2 = document.getElementById('convertTo');

    if(toConvert === 'fahrenheit' && convertTo === 'celsius') {
        let celsius = Math.round((tempVal - 32) * (5 / 9));
        resultVal.innerHTML = `${celsius} &deg;C`;
    } else if(toConvert === 'fahrenheit' && convertTo === 'kelvin') {
        let kelvin = Math.round(tempVal + 273);
        resultVal.innerHTML = `${kelvin} K`;
    } else if(toConvert === 'celsius' && convertTo === 'fahrenheit') {
        let fahrenheit = Math.round(((9 / 5) * tempVal) + 32);
        resultVal.innerHTML = `${fahrenheit} &deg;F`;
    } else if(toConvert === 'celsius' && convertTo === 'kelvin') {
        let kelvin = Math.round((((9 / 5) * tempVal) + 32) + 273);
        resultVal.innerHTML = `${kelvin} K`;
    } else if(toConvert === 'kelvin' && convertTo === 'celsius') {
        let celsius = Math.round(((tempVal - 273) - 32) * (5 / 9));
        resultVal.innerHTML = `${celsius} &deg;C`;
    } else if(toConvert === 'kelvin' && convertTo === 'fahrenheit') {
        let fahrenheit = Math.round(tempVal - 273);
        resultVal.innerHTML = `${fahrenheit} &deg;F`;
    } else if(toConvert === convertTo) {
        errorMsg.style.display = 'block';
        select1.addEventListener('change', () => {
            errorMsg.style.display = 'none';
        });
        select2.addEventListener('change', () => {
            errorMsg.style.display = 'none';
        });
    }
};