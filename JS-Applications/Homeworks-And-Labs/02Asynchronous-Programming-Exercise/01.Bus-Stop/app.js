async function getInfo() {
    const stopInfoElement = document.getElementById("stopId");
    const stopId = stopInfoElement.value;

    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;
    const stopNameElement = document.getElementById("stopName");
    const busList = document.getElementById("buses");

    busList.innerHTML = "";
    stopInfoElement.value = "";

    try {
        const response = await fetch(url);
        const data = await response.json(); // receiving an object with two properties 

        stopNameElement.textContent = data.name; // comes from the property name of the data
        Object.entries(data.buses).forEach(([busNumber, timeArrive]) => {
            const li = document.createElement("li");
            li.textContent = `Bus ${busNumber} arrives in ${timeArrive} minutes`;
            busList.appendChild(li);
        });
    } catch (error){
        stopNameElement.textContent = "Error";
    }
}