document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('bmiForm');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        calculateAllMetrics();
    });
});

function calculateAllMetrics() {
    // Get input values
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const age = parseInt(document.getElementById('age').value) || 30;
    const gender = document.getElementById('gender').value;

    // Validate inputs
    if (!height || !weight || isNaN(height) || isNaN(weight)) {
        alert("Please enter valid numbers");
        return;
    }

    // Core calculations
    const bmi = (weight / ((height/100) ** 2)).toFixed(1);
    const bodyFat = calculateBodyFat(bmi, age, gender);
    const bmr = calculateBMR(weight, height, age, gender);
    const idealWeight = calculateIdealWeight(height);

    // Update UI
    updateResults(bmi, bodyFat, bmr, idealWeight, gender);
    animateCards();
}

function calculateBodyFat(bmi, age, gender) {
    // Deurenberg formula
    return gender === 'male' 
        ? (1.20 * bmi + 0.23 * age - 16.2).toFixed(1)
        : (1.20 * bmi + 0.23 * age - 5.4).toFixed(1);
}

function calculateBMR(weight, height, age, gender) {
    // Harris-Benedict equation
    return gender === 'male'
        ? Math.round(88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age))
        : Math.round(447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age));
}

function calculateIdealWeight(height) {
    const heightM = height / 100;
    return {
        min: Math.round(18.5 * heightM * heightM),
        max: Math.round(24.9 * heightM * heightM)
    };
}

function updateResults(bmi, bodyFat, bmr, idealWeight, gender) {
    // BMI Category
    let category, categoryColor;
    if (bmi < 18.5) {
        category = "Underweight";
        categoryColor = "#3B82F6"; // Blue
    } else if (bmi < 25) {
        category = "Healthy";
        categoryColor = "#10B981"; // Green 
    } else if (bmi < 30) {
        category = "Overweight";
        categoryColor = "#F59E0B"; // Orange
    } else {
        category = "Obese";
        categoryColor = "#EF4444"; // Red
    }

    // Update gauge
    const gauge = document.getElementById('bmiGauge');
    gauge.style.setProperty('--color', categoryColor);
    gauge.style.setProperty('--percentage', Math.min(100, (bmi / 40) * 100));

    // Update displayed values
    document.getElementById('bmiValue').textContent = bmi;
    document.getElementById('bmiCategory').textContent = category;
    document.getElementById('bmiStatus').textContent = category;
    document.getElementById('bodyFatValue').textContent = `${bodyFat}%`;
    document.getElementById('idealWeight').textContent = `${idealWeight.min}-${idealWeight.max} kg`;
    document.getElementById('bmrValue').textContent = `${bmr} kcal`;

    // Show results
    document.getElementById('results').classList.remove('hidden');
}

function animateCards() {
    document.querySelectorAll('.result-card').forEach((card, i) => {
        setTimeout(() => card.classList.add('show'), 100 * i);
    });
}
