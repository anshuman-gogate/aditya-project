const sp = document.getElementById('sp');
const cp = document.getElementById('cp');
const calcBtn = document.getElementById('calc-btn');
const plAns = document.getElementById('pl-answer');
const plClrBtn = document.getElementById('pl-clear-btn');

// Function to calculate profit and loss
function calculatePl() {
    const pl = sp.value - cp.value;
    if(pl == 0) {
        // case1 : no profit no loss
        plAns.innerText = "No profit no loss"
    }

    else if(pl > 0) {
        // case2 : profit
        plAns.innerText = "There is a profit of " + pl + " rs.";
    }

    else {
        // case3 : loss
        plAns.innerText = "There is a loss of " + (-pl) + " rs.";
    }
}

calcBtn.addEventListener('click', calculatePl);
plClrBtn.addEventListener('click', () => {
    cp.value = 0;
    sp.value = 0;
    plAns.innerText = "";
});
