const fahrenheitInput = document.getElementById('fahrenheit');
const celsiusInput = document.getElementById('celsius');

function fahrenheitToCelsius(f) {
    return (5 / 9) * (f - 32);
}

function celsiusToFahrenheit(c) {
    return (c * 9 / 5) + 32;
}

fahrenheitInput.addEventListener('input', function() {
    const fahrenheit = parseFloat(fahrenheitInput.value);
    if (!isNaN(fahrenheit)) {
        celsiusInput.value = fahrenheitToCelsius(fahrenheit).toFixed(2);
    } else {
        celsiusInput.value = '';
    }
});

celsiusInput.addEventListener('input', function() {
    const celsius = parseFloat(celsiusInput.value);
    if (!isNaN(celsius)) {
        fahrenheitInput.value = celsiusToFahrenheit(celsius).toFixed(2);
    } else {
        fahrenheitInput.value = '';
    }
});
