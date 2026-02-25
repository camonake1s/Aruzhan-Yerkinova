const distanceInput = document.getElementById('distance');
const hoursInput = document.getElementById('hours');
const minutesInput = document.getElementById('minutes');
const weightInput = document.getElementById('weight');
const paceResult = document.getElementById('paceResult');
const speedResult = document.getElementById('speedResult');
const caloriesResult = document.getElementById('caloriesResult');
const statusImage = document.getElementById('statusImage');
const calculateBtn = document.getElementById('calculateBtn');
const resetBtn = document.getElementById('resetBtn');

calculateBtn.addEventListener('click', function() {
    const distance = parseFloat(distanceInput.value);
    const hours = parseFloat(hoursInput.value) || 0;
    const minutes = parseFloat(minutesInput.value) || 0;
    const weight = parseFloat(weightInput.value);

    const totalMinutes = hours * 60 + minutes;

    if (!distance || totalMinutes === 0 || !weight) {
        alert("Please enter distance, time and weight!");
        return;
    }

    const pace = totalMinutes / distance;
    const speed = distance / (totalMinutes / 60);
    const calories = weight * distance * 1.036;

    paceResult.textContent = `Pace: ${pace.toFixed(2)} min/km`;
    speedResult.textContent = `Speed: ${speed.toFixed(2)} km/h`;
    caloriesResult.textContent = `Calories: ${calories.toFixed(0)} kcal`;

    statusImage.style.display = "block";
    resetBtn.style.display = "block";

    if (pace < 5) {
        statusImage.src = "fast.gif";
        document.body.style.background = "linear-gradient(135deg, #f6d365, #fda085)";
    } else if (pace <= 9) {
        statusImage.src = "normal.png";
        document.body.style.background = "linear-gradient(135deg, #84fab0, #8fd3f4)";
    } else {
        statusImage.src = "slow.jpg";
        document.body.style.background = "linear-gradient(135deg, #a1c4fd, #c2e9fb)";
    }
});

resetBtn.addEventListener('click', function(e) {
    e.preventDefault();

    distanceInput.value = "";
    hoursInput.value = "";
    minutesInput.value = "";
    weightInput.value = "";

    paceResult.textContent = "Pace: --";
    speedResult.textContent = "Speed: --";
    caloriesResult.textContent = "Calories: --";

    statusImage.style.display = "none";
    resetBtn.style.display = "none";

    document.body.style.background = "linear-gradient(135deg, #85f0ed 0%, #e7b0c1 100%)";
});
