class CalController {

    constructor() {
        this._locale = 'pt-BR';
        this._displayCalc = document.querySelector('#display');
        this._displayDate = document.querySelector('#data');
        this._diplayTime = document.querySelector('#hora');
        this._currentDate;
        this.initialize();
        this.initButtonsEvents();
    }

    get displayCal() {
        return this._displayCalc.innerHTML;
    }

    set displayCal(value) {
        this._displayCalc.innerHTML = value;
    }


    get displayDate() {
        return this._displayDate.innerHTML;
    }

    set displayDate(value) {
        this._displayDate.innerHTML = value;
    }

    get diplayTime() {
        return this._diplayTime.innerHTML;
    }

    set diplayTime(value) {
        this._diplayTime.innerHTML = value;
    }

    get currentDate() {
        return new Date();
    }

    set currentDate(value) {
        this._currentDate = value;
    }

    initialize() {
            this.setDisplayDateTime();
        setInterval(()=>{
            this.setDisplayDateTime();
        }, 1000);
    }

    setDisplayDateTime() {
        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        });
        this.diplayTime = this.currentDate.toLocaleTimeString(this._locale);
    }

    initButtonsEvents(){
        let buttons = document.querySelectorAll('#buttons > g, #parts > g')

        buttons.forEach((btn, index) =>{
            this.addEventListenerAll(btn, 'click drag',e => {
                console.log(btn.className.baseVal.replace('btn-', ''));
            });
            this.addEventListenerAll(btn, 'mouseover mouseup mousedown', e => {
                btn.style.cursor = 'pointer';
            });
        });
    }

    addEventListenerAll(element, events, fn){
        events.split(' ').forEach(event => {
            element.addEventListener(event, fn, false);
        });
    }
}
