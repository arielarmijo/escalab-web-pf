
const jobsDB = (() => {
    const url = './assets/data/jobs.json';
    const getJobs = async () => {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    };
    const getJob = async (i) => {
        const jobs = await getJobs();
        return jobs[i];
    };
    return { getJobs, getJob };
})();

const jobsContainer = document.querySelector('#trabajos .section-body');

jobsDB.getJobs().then(jobs => {
    jobsContainer.innerHTML = ``;
    jobs.forEach((job, i) => {
        jobsContainer.innerHTML += `
             <div class="job-item" onclick="abrirModal(${i})">
                 <img src="${job.image}" class="job-image">
                 <p class="job-name">${job.name}</p>
             </div>`;
    })
});

