const sendForm = ({
    forms,
    someElem = []
}) => {
    const formBlocks = document.querySelectorAll(forms)

    const validate = (list) => {
        let success = true

        list.forEach(input => {
            if (input.value == '') {
                success = false
            }
        })

        return success
    }

    const sendData = (data) => {
        return fetch('http://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => response.json())
    }

    const submitForm = (form, someElem) => {
        const formData = new FormData(form)
        const formElements = form.querySelectorAll('input[type="text"]')
        const formBody = {}

        formData.forEach((val, key) => {
            formBody[key] = val
        })

        someElem.forEach((elem) => {
            const element = document.getElementById(elem.id)
            if (element && element.value !== "") {
                formBody[elem.id] = element.value
            }
        })

        if (validate(formElements)) {
            sendData(formBody)
                .then(data => {
                    formElements.forEach(input => {
                        input.value = ''
                    })
                })
                .catch(error => {
                    console.log(error.message)
                })
        } else {
            alert('Заполните пустые поля!')
            validate(formElements)
        }
    }

    formBlocks.forEach((elem) => {
        elem.addEventListener('submit', (e) => {
            e.preventDefault();
            submitForm(elem, someElem)
        })
    })
}

export default sendForm