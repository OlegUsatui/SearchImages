export default class LoadMoreBtn {
    constructor({ selector }){
        this.button = this.getBtn(selector);      
    }

    getBtn(selector) {
      this.button = document.querySelector(selector);

        return this.button;
     };

    show() {
        this.button.classList.remove('is-hidden')
    };
    hide() {
        this.button.classList.add('is-hidden')
    };
}