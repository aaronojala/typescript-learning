var outcome = document.getElementById('input');
var pushBtn = function (obj) {
    var pushed = obj.innerHTML;
    if (pushed == '=') {
        // Calculate
        outcome.innerHTML = eval(outcome.innerHTML);
    }
    else if (pushed == 'C') {
        // All Clear
        outcome.innerHTML = '0';
    }
    else {
        if (outcome.innerHTML == '0') {
            outcome.innerHTML = pushed;
        }
        else {
            outcome.innerHTML += pushed;
        }
    }
};
