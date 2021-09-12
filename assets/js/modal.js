const modal =  document.getElementById('modal');
const modalBody = modal.children[0].children[1];
const modalCloseIcon = document.getElementById('modal-close-icon');
const modalCloseButton = document.getElementById('modal-close-button');
const contactForm = document.getElementById('contact-form');

const closeModal = (event) => {
    modal.style.display = 'none';
    contactForm.reset();
};

contactForm.addEventListener('submit', event => {
    event.preventDefault();
    modalBody.innerHTML = `<p>Mensaje enviado</p>`;
    modal.style.display = 'block';
});

modalCloseIcon.addEventListener('click', closeModal);
modalCloseButton.addEventListener('click', closeModal);