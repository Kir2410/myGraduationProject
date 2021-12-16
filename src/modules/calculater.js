const calculater = (price = 1000) => {
    const calcBlock = document.querySelector('#calc');
    const calcType = document.querySelector('#calc-type');
    const calcTypeMaterial = document.querySelector('#calc-type-material');
    const calcInput = document.querySelector('#calc-input');
    const total = document.querySelector('#calc-total');

    const countCalc = () => {
        const calcTypeValue = +calcType.options[calcType.selectedIndex].value
        const calcTypeMaterialValue = +calcTypeMaterial.options[calcTypeMaterial.selectedIndex].value

        let totalValue = 0
        let calcInputValue = 1

        if (calcInput.value > 1) {
            calcInputValue = calcInput.value
        }

        if (calcTypeValue && calcTypeMaterialValue) {
            totalValue = price * calcTypeValue * calcTypeMaterialValue * calcInputValue
        } else {
            totalValue = 0
        }

        total.value = totalValue
    }

    calcBlock.addEventListener('input', (e) => {
        if (e.target === calcType || e.target === calcTypeMaterial || e.target === calcInput) {
            countCalc()
        }
    })
}

export default calculater