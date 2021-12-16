const validator = () => {
    const calcInput = document.querySelector('#calc-input');

    calcInput.forEach(item => {
        item.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^0-9]+/, "");
        })
    });
}

export default validator;