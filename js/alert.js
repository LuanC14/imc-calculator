
export const AlertError = {
    open: () => document.querySelector('.alertError').classList.add('open'),
    close: () => document.querySelector('.alertError').classList.remove('open'),
}

document.querySelector('#weightInput').addEventListener('input', () => { AlertError.close() })
document.querySelector('#heightInput').addEventListener('input', () => { AlertError.close() })

