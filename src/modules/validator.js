const validator = () => {
    document.querySelectorAll('input[name="fio"]').forEach(item => {
        item.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^А-Яа-яA-Za-z]+/, "");
        })
    });

    document.querySelectorAll('input[name="phone"]').forEach(item => {
        item.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^0-9\+]/, "");
            e.target.value = e.target.value.replace(/[0-9]{17}/, "");
        })
    });
}

export default validator