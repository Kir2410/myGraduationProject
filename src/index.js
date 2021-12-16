import benefitsSlider from './modules/benefitsSlider.js'
import servicesSlider from './modules/servicesSlider.js'
import documents from './modules/documents.js'
import calculater from './modules/calculater.js'
import timer from './modules/timer.js'
import sendForm from './modules/sendForm.js'
import headerModal from './modules/headerModal.js'
import servicesModal from './modules/servicesModal.js'
import scroll from './modules/scroll.js'

benefitsSlider()
servicesSlider()
documents()
calculater(1000)
timer('31 december 2021 23:59')
sendForm({
    formId: 'callback',
    someElem: [{
        type: 'input',
        id: 'calc-total'
    }]
})
scroll()
headerModal()
servicesModal()