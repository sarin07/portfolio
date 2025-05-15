// Open modals
const modalButtons = document.querySelectorAll('.qualification-button');
const modals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('.modal__close');

modalButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        modals[index].style.display = 'flex';
    });
});

closeButtons.forEach(close => {
    close.addEventListener('click', () => {
        close.closest('.modal').style.display = 'none';
    });
});

window.addEventListener('click', (e) => {
    modals.forEach(modal => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});