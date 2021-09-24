const modal =  document.getElementById('modal');
console.log(modal.children[0].children[0].children[1]);
const modalBody = modal.children[0].children[0].children[1];
const modalCloseIcon = document.getElementById('modal-close-icon');
const modalCloseButton = document.getElementById('modal-close-button');
const contactForm = document.getElementById('contact-form');

const closeModal = (event) => {
    contactForm.reset();
    modal.style.display = 'none';
};

contactForm.addEventListener('submit', event => {
    event.preventDefault();
    const name = contactForm.name.value;
    modalBody.innerHTML = `<p>${name}, tu mensaje ha sido enviado.</p>`;
    modal.style.display = 'block';
});

modalCloseIcon.addEventListener('click', closeModal);
modalCloseButton.addEventListener('click', closeModal);

window.abrirModal = async (i) => {
    const job = await jobsDB.getJob(i);
    modalBody.innerHTML = `
        <h1>${job.name}</h1>
        <img src="${job.image}" class="modal-job-image">
        <p class="modal-job-description">${job.description}</p>
        <a href="${job.web}" target="_blank" class="modal-link"><i class="fas fa-globe"></i>${job.name}</a>
        <a href="${job.github}" target="_blank" class="modal-link"><i class="fab fa-github"></i>GitHub</a>
    `;
    modal.style.display = 'block';
};