const form = document.getElementById('bmiForm');
const result = document.getElementById('result');

function getClassification(bmi) {
  if (bmi < 16) return { label: 'Severe Thinness', advice: 'Please seek medical guidance and improve nutrition.' };
  if (bmi < 17) return { label: 'Moderate Thinness', advice: 'A balanced diet and medical advice may help.' };
  if (bmi < 18.5) return { label: 'Mild Thinness', advice: 'Increasing nutrient intake may be beneficial.' };
  if (bmi < 25) return { label: 'Normal', advice: 'Great job! Keep a healthy routine.' };
  if (bmi < 30) return { label: 'Overweight', advice: 'Consider light exercise and a balanced diet.' };
  if (bmi < 35) return { label: 'Obese Class I', advice: 'A healthy lifestyle plan can make a difference.' };
  if (bmi < 40) return { label: 'Obese Class II', advice: 'Professional guidance is recommended.' };
  return { label: 'Obese Class III', advice: 'Please consult a healthcare professional.' };
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const age = Number(document.getElementById('age').value);
  const heightCm = Number(document.getElementById('height').value);
  const weightKg = Number(document.getElementById('weight').value);
  const genderInput = document.querySelector('input[name="gender"]:checked');

  if (!age || !heightCm || !weightKg || !genderInput) {
    result.innerHTML = '<h2>Please complete all fields.</h2><p>Age, gender, height, and weight are required.</p>';
    return;
  }

  const heightM = heightCm / 100;
  const bmi = weightKg / (heightM * heightM);
  const classification = getClassification(bmi);

  result.innerHTML = `
    <h2>Your BMI is <strong>${bmi.toFixed(1)}</strong></h2>
    <p>Age: ${age} years</p>
    <p>Gender: ${genderInput.value}</p>
    <p>Height: ${heightCm} cm</p>
    <p>Weight: ${weightKg} kg</p>
    <div class="tag">${classification.label}</div>
    <p>${classification.advice}</p>
  `;
});
