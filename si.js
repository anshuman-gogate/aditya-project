const prin = document.getElementById('pa');
const rate = document.getElementById('interest');
const time = document.getElementById('time');
const siBtn = document.getElementById('si-btn');
const clrBtn = document.getElementById('si-clear-btn');
const siAns = document.getElementById('si-answer');

// Function to calculate the simple interest
function calculateSi() {
    const si = (prin.value * rate.value * time.value) / 100;
    siAns.innerText = "The simple interest is " + si + " rs.";
}

siBtn.addEventListener('click', calculateSi);

clrBtn.addEventListener('click', () => {
    prin.value = 0;
    rate.value = 0;
    time.value = 0;
    siAns.innerText = "";
});