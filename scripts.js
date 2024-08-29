let numbers = [];

function addNumber() {
    const input = document.getElementById('numberInput');
    const number = parseInt(input.value);
    if (!isNaN(number)) {
        numbers.push(number);
        updateArrayDisplay();
        input.value = '';
    }
}

function updateArrayDisplay() {
    document.getElementById('arrayContent').textContent = `Current Array: [${numbers.join(', ')}]`;
}

function includes(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            console.log(true);
            return true;
        }
    }
    console.log(false);
    return false;
}

function searchNumber() {
    const searchInput = document.getElementById('searchInput');
    const numberToSearch = parseInt(searchInput.value);
    const result = document.getElementById('result');
    
    if (!isNaN(numberToSearch)) {
        if (includes(numbers, numberToSearch)) {
            result.textContent = `${numberToSearch} exists in the array.`;
        } else {
            result.textContent = `${numberToSearch} does not exist in the array.`;
        }
    }
}