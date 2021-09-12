
const experienceUrl = './assets/data/experiences.json';
const experienceContainer = document.querySelector('#experiencia .section-body');

fetch(experienceUrl)
    .then(response => response.json())
    .then(data => {
        experienceContainer.innerHTML = ``;
        data.forEach(exp => {
            experienceContainer.innerHTML += `
        <div class="experience-item">
            <img src="${exp.logo}" class="experience-logo">
            <p class="experience-place">${exp.place}</p>
            <p class="experience-course">${exp.course}</p>
            <p class="experience-time">${exp.time}</p>
        </div>`;
        });
    });
