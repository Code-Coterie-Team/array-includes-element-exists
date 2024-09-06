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

function searchNumber() {
    const searchInput = document.getElementById('searchInput');
    const numberToSearch = parseInt(searchInput.value);
    const result = document.getElementById('result');
    
    if (!isNaN(numberToSearch)) {
        if (numbers.includes(numberToSearch)) {
            result.textContent = `${numberToSearch} exists in the array.`;
        } else {
            result.textContent = `${numberToSearch} does not exist in the array.`;
        }
    }
}