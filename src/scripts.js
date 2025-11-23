function calculate(operator) {
    const input1 = document.getElementById('input1').value;
    const input2 = document.getElementById('input2').value;
    const resultElement = document.getElementById('result');
    const errorMessageElement = document.getElementById('error-message');

    resultElement.textContent = 'Результат: ';
    errorMessageElement.textContent = '';

    if (input1 === '' || input2 === '') {
        errorMessageElement.textContent = 'Будь ласка, введіть обидва числа.';
        return;
    }

    const num1 = Number(input1);
    const num2 = Number(input2);

    if (isNaN(num1) || isNaN(num2)) {
        errorMessageElement.textContent = 'Будь ласка, введіть коректні числа.';
        return;
    }

    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case ':':
            
            if (num2 === 0) {
                errorMessageElement.textContent = 'Це не вища математика!';
                return;
            }
            result = num1 / num2;
            break;
        default:
            return;
    }

    if (result % 1 !== 0) {
        result = result.toFixed(2);
    }

    resultElement.textContent = `Результат: ${result}`;
}