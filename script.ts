const outcome: HTMLElement = document.getElementById('input');

const pushBtn = (obj: any): void => {
         
    const pushed = obj.innerHTML;
     
    if (pushed == '=') {
        // Calculate
        outcome.innerHTML = eval(outcome.innerHTML);
         
    } else if (pushed == 'C') {
        // All Clear
        outcome.innerHTML = '0';
         
    } else {
        if (outcome.innerHTML == '0') {
            outcome.innerHTML = pushed;
             
        } else {
            outcome.innerHTML += pushed;   
        }
    }
}
