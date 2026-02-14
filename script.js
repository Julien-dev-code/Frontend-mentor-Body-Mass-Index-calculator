document.getElementById("metric-weight").addEventListener("input", () => {
    let height = parseFloat(document.getElementById("metric-height").value); 
    let weight = parseFloat(document.getElementById("metric-weight").value);
    let heightInMeters = height / 100;
    let bmi = weight / (heightInMeters * heightInMeters);

    let scoreContainer = document.querySelector(".score-wrapper p");
    scoreContainer.textContent = "Ton IMC est de : " + bmi.toFixed(1);
})



















