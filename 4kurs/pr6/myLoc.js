let map, marker, watchId = null;

function getMyLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(displayLocation, handleError);
    } else {
        alert("Ваш браузер не підтримує геолокацію.");
    }
}

function displayLocation(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const accuracy = position.coords.accuracy;

    document.getElementById("output").innerHTML = `Широта: ${latitude} <br> Довгота: ${longitude} <br> Точність: ${accuracy} метрів`;

    if (!map) {
        map = L.map('map').setView([latitude, longitude], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
    }

    if (marker) {
        map.removeLayer(marker);
    }
    marker = L.marker([latitude, longitude]).addTo(map)
        .bindPopup(`Ви тут! <br> Широта: ${latitude}, Довгота: ${longitude}`).openPopup();

    // Розрахунок відстані до коледжу
    const collegeLat = 48.94321;  // Широта вашого коледжу
    const collegeLon = 24.73380;  // Довгота вашого коледжу
    const distance = computeDistance(latitude, longitude, collegeLat, collegeLon);
    alert(`Відстань до коледжу: ${(distance / 1000).toFixed(2)} км`);
}

function handleError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert("Доступ до геолокації відхилено.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Інформація про місцезнаходження недоступна.");
            break;
        case error.TIMEOUT:
            alert("Час запиту закінчився.");
            break;
        case error.UNKNOWN_ERROR:
            alert("Невідома помилка.");
            break;
    }
}

function computeDistance(lat1, lon1, lat2, lon2) {
    const R = 6371e3; // радіус Землі в метрах
    const φ1 = lat1 * Math.PI / 180;
    const φ2 = lat2 * Math.PI / 180;
    const Δφ = (lat2 - lat1) * Math.PI / 180;
    const Δλ = (lon2 - lon1) * Math.PI / 180;

    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
        Math.cos(φ1) * Math.cos(φ2) *
        Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c; // відстань в метрах
}

function startWatch() {
    if (navigator.geolocation) {
        watchId = navigator.geolocation.watchPosition(displayLocation, handleError);
    } else {
        alert("Ваш браузер не підтримує геолокацію.");
    }
}

function stopWatch() {
    if (watchId !== null) {
        navigator.geolocation.clearWatch(watchId);
        watchId = null;
    }
}

function moveToLocation() {
    const lat = parseFloat(document.getElementById('lat').value);
    const lon = parseFloat(document.getElementById('lon').value);

    if (!isNaN(lat) && !isNaN(lon)) {
        map.setView([lat, lon], 13);
        if (marker) {
            map.removeLayer(marker);
        }
        marker = L.marker([lat, lon]).addTo(map)
            .bindPopup(`Вказана локація: <br> Широта: ${lat}, Довгота: ${lon}`).openPopup();
    } else {
        alert("Будь ласка, введіть правильні координати.");
    }
}
