const input = document.getElementById('input');
const list = document.getElementById('enteredString');

const debounce = (cb, debounceTime = 500) => {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
            cb(...args);
        }, debounceTime);
    }
};

input.addEventListener('input', debounce(function(event) {
    enteredString.textContent = event.target.value
}));
