// Variable defined
const projects = [
    {
        id: 1,
        title: 'Project-1',
        img: 'image-placeholder',
        description: 'short description of the project',
        projectTags: ['HTML', 'CSS', 'JavaScript']
    },
    {
        id: 2,
        title: 'Project-2',
        img: 'image-placeholder',
        description: 'short description of the project',
        projectTags: ['HTML', 'CSS', 'JavaScript']
    },
    {
        id: 3,
        title: 'Project-3',
        img: 'image-placeholder',
        description: 'short description of the project',
        projectTags: ['HTML', 'CSS', 'JavaScript']
    }
]

let cardContainer = document.getElementsByClassName('portfolio-cards')[0];


// Functions
const createCard = (project) => {
    let card = document.createElement('div');
    card.classList.add(`portfolio-card-${project.id}`);

    let contents = `<div class="portfolio-card">
    <h3 class="portfolio-title">${project.title}</h3>
    <div class="portfolio-image">${project.img}</div>
    <p class="portfolio-descr">${project.description}</p>
    <div class="portfolio-tags">${project.projectTags[0]},${project.projectTags[1]}</div>
    </div> `;
    card.innerHTML = contents;
    cardContainer.append(card);
}

for (i=0; projects.length; i++) {
    createCard(projects[i]);
}

// Functions Called
// const mapProjects = projects.map(project => {
//     createCard(project);
// }
// )

// console.log(mapProjects());
