window.addEventListener('DOMContentLoaded', main);
let timeOutRef;
function main() {
    //starta program
    addEventListeners();
    timeOutRef = setTimeout(changeBackgroundColor, 4000);
}


function changeBackgroundColor() {
    document.body.style.background = getRandomColor();
;}

function addEventListeners() {
    const cancelTimeOutButton = document.getElementById("cancel");
    cancelTimeOutButton.addEventListener('click', cancelBackgroundChange);

    const startIntervalButton = document.getElementById('start-interval')
    startIntervalButton.addEventListener('click', startBackgroundChangeInveral)
}

function cancelBackgroundChange() {
    clearTimeout(timeOutRef);
}

function startBackgroundChangeInveral() {
    setInterval(changeBackgroundColor, 1000);
}

function getRandomColor() {
    const value= Math.random();

    if (value > 0,2) {
        return 'blue';
    }
    else if (value > 0.4) {
        return'red';
    }
    else if (value > 0.6) {
        return'yellow';
    }
    else if (value > 0.8) {
        return'grey';
    }
    else {
        return'pink';
    }

}
//hej