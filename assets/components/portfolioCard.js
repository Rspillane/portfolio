// Variable defined
const projects = [
    {
        id: 1,
        title: 'MGBb',
        img: 'https://private-user-images.githubusercontent.com/41272270/273391163-67aad3ab-3dff-4b43-81ab-f3b09cd2b394.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDY1NjQ2NzYsIm5iZiI6MTcwNjU2NDM3NiwicGF0aCI6Ii80MTI3MjI3MC8yNzMzOTExNjMtNjdhYWQzYWItM2RmZi00YjQzLTgxYWItZjNiMDljZDJiMzk0LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAxMjklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMTI5VDIxMzkzNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWE4YWE2NWI5NmE1NDk2ZGMyYmRlMTQ5MjAzMTg1MjkwYWNkM2U4MzlhYTdiNzU3MzY5ZDcyNmFkNjhlMDA5NGMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.DFdQRPJYKEtE8_F_dooSRWRRRW_wQJiGEru5k-xlfqA',
        description: 'short description of the project',
        more: 'blah blah blah blah blah blah',
        projectTags: ['React', 'Next.js','HTML', 'CSS', 'JavaScript'],
        liveCode: true,
        githubLink: '',
        liveDemo: true,
        demoLink: '',
    },
    {
        id: 2,
        title: 'Stickr',
        img: 'https://private-user-images.githubusercontent.com/41272270/273391163-67aad3ab-3dff-4b43-81ab-f3b09cd2b394.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDY1NjQ2NzYsIm5iZiI6MTcwNjU2NDM3NiwicGF0aCI6Ii80MTI3MjI3MC8yNzMzOTExNjMtNjdhYWQzYWItM2RmZi00YjQzLTgxYWItZjNiMDljZDJiMzk0LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAxMjklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMTI5VDIxMzkzNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWE4YWE2NWI5NmE1NDk2ZGMyYmRlMTQ5MjAzMTg1MjkwYWNkM2U4MzlhYTdiNzU3MzY5ZDcyNmFkNjhlMDA5NGMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.DFdQRPJYKEtE8_F_dooSRWRRRW_wQJiGEru5k-xlfqA',
        description: 'short description of the project',
        more: '',
        projectTags: ['React', 'Next.js','HTML', 'CSS', 'JavaScript'],
        liveCode: true,
        githubLink: '',
        liveDemo: true,
        demoLink: '',
    },
    {
        id: 3,
        title: 'Forest Brewery Co.',
        img: 'https://private-user-images.githubusercontent.com/41272270/273391163-67aad3ab-3dff-4b43-81ab-f3b09cd2b394.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDY1NjQ2NzYsIm5iZiI6MTcwNjU2NDM3NiwicGF0aCI6Ii80MTI3MjI3MC8yNzMzOTExNjMtNjdhYWQzYWItM2RmZi00YjQzLTgxYWItZjNiMDljZDJiMzk0LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAxMjklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMTI5VDIxMzkzNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWE4YWE2NWI5NmE1NDk2ZGMyYmRlMTQ5MjAzMTg1MjkwYWNkM2U4MzlhYTdiNzU3MzY5ZDcyNmFkNjhlMDA5NGMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.DFdQRPJYKEtE8_F_dooSRWRRRW_wQJiGEru5k-xlfqA',
        description: 'short description of the project',
        more: '',
        projectTags: ['HTML', 'CSS', 'JavaScript'],
        liveCode: true,
        githubLink: '',
        liveDemo: true,
        demoLink: '',
    },
    {
        id: 4,
        title: 'Zen Rally',
        img: 'https://private-user-images.githubusercontent.com/41272270/273391163-67aad3ab-3dff-4b43-81ab-f3b09cd2b394.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDY1NjQ2NzYsIm5iZiI6MTcwNjU2NDM3NiwicGF0aCI6Ii80MTI3MjI3MC8yNzMzOTExNjMtNjdhYWQzYWItM2RmZi00YjQzLTgxYWItZjNiMDljZDJiMzk0LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAxMjklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMTI5VDIxMzkzNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWE4YWE2NWI5NmE1NDk2ZGMyYmRlMTQ5MjAzMTg1MjkwYWNkM2U4MzlhYTdiNzU3MzY5ZDcyNmFkNjhlMDA5NGMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.DFdQRPJYKEtE8_F_dooSRWRRRW_wQJiGEru5k-xlfqA',
        description: 'short description of the project',
        more: '',
        projectTags: ['C#'],
        liveCode: true,
        githubLink: '',
        liveDemo: true,
        demoLink: '',
    },
    {
        id: 5,
        title: 'My Portfolio Website',
        img: 'https://private-user-images.githubusercontent.com/41272270/273391163-67aad3ab-3dff-4b43-81ab-f3b09cd2b394.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDY1NjQ2NzYsIm5iZiI6MTcwNjU2NDM3NiwicGF0aCI6Ii80MTI3MjI3MC8yNzMzOTExNjMtNjdhYWQzYWItM2RmZi00YjQzLTgxYWItZjNiMDljZDJiMzk0LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAxMjklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMTI5VDIxMzkzNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWE4YWE2NWI5NmE1NDk2ZGMyYmRlMTQ5MjAzMTg1MjkwYWNkM2U4MzlhYTdiNzU3MzY5ZDcyNmFkNjhlMDA5NGMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.DFdQRPJYKEtE8_F_dooSRWRRRW_wQJiGEru5k-xlfqA',
        description: 'short description of the project',
        more: '',
        projectTags: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
        liveCode: true,
        githubLink: '',
        liveDemo: true,
        demoLink: '',
    },
    
]

let cardContainer = document.getElementsByClassName('portfolio-cards')[0];


// Functions
const createCard = (project) => {
    let card = document.createElement('div');
    card.classList.add(`portfolio-card-${project.id}`);

    let contents = `
    <div class="portfolio-card">
    <h3 class="portfolio-title">${project.title}</h3>
    <div class="portfolio-image">
        <img src="${project.img}"/>
    </div>
    <p class="portfolio-descr">${project.description}</p>
    <div class="portfolio-tags">${project.projectTags.map(tag => `<div class="portfolio-tag"><span>${tag}</span></div>`)}</div>
    <a href="${project.githubLink}" class="button card-link"><p>Github</p></a>
    <a href="${project.demoLink} class="button card-link"><p>Live Demo</p></a>
    </div> 
    `;
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
