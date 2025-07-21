class Modal {
    constructor(modalId){
        this.modalId = modalId;
    }

    open(){
        const modal = document.querySelector(`#${this.modalId}`);
        modal.classList.add("show");
    }

    close(){
        const modal = document.querySelector(`#${this.modalId}`);
        modal.classList.remove("show");
    }
}