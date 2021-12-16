const calculater = (price = 1000) => {
    const calcBlock = document.querySelector('#calc');
    const calcType = document.querySelector('#calc-type');
    const calcTypeMaterial = document.querySelector('#calc-type-material');
    const calcInput = document.querySelector('#calc-input');
    const total = document.querySelector('#calc-total');

    const validate = () => {
        calcInput.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^0-9]+/, "");
        });
    }

    const countCalc = () => {
        validate()
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

    try {
        if (calcBlock) {
            calcBlock.addEventListener('input', (e) => {
                if (e.target === calcType || e.target === calcTypeMaterial || e.target === calcInput) {
                    countCalc()
                }
            })
        }
    } catch (error) {
        console.log(error.message)
    }
}

export default calculater