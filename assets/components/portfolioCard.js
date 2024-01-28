{/* <div class="portfolio-card">
<h3 class="portfolio-title">Project Title</h3>
<div class="portfolio-image">image placeholder</div>
<p class="portfolio-descr">short description</p>
<div class="portfolio-tags">Tech tags</div>
</div> */}
const project = [
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

const createCard = (project) => {
    let card = document.createElement('div');
    card.classList.add(`portfolio-card-${project.id}`);

    let contents = `<div class="portfolio-card">
    <h3 class="portfolio-title">${project.title}</h3>
    <div class="portfolio-image">${project.img}</div>
    <p class="portfolio-descr">${project.description}</p>
    <div class="portfolio-tags">${project.img[0]},${project.img[1]}</div>
    </div> `;
    card.innerHTML = contents;
    cardContainer.append(card);
}
