export const Modal = {
    wrapper: document.querySelector('.modal'),
    closeButton: document.querySelector('.modalButton'),
    message: document.querySelector('.result'),

    open: () => Modal.wrapper.classList.add('open'),
    close: () => Modal.wrapper.classList.remove('open')
}

Modal.closeButton.onclick = () => Modal.close()

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') Modal.close()
})





