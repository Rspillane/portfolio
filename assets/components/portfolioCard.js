// Variable defined
const projects = [
    {
        id: 1,
        title: 'MGDb',
        img: 'https://private-user-images.githubusercontent.com/41272270/273391163-67aad3ab-3dff-4b43-81ab-f3b09cd2b394.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDY1NjQ2NzYsIm5iZiI6MTcwNjU2NDM3NiwicGF0aCI6Ii80MTI3MjI3MC8yNzMzOTExNjMtNjdhYWQzYWItM2RmZi00YjQzLTgxYWItZjNiMDljZDJiMzk0LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAxMjklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMTI5VDIxMzkzNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWE4YWE2NWI5NmE1NDk2ZGMyYmRlMTQ5MjAzMTg1MjkwYWNkM2U4MzlhYTdiNzU3MzY5ZDcyNmFkNjhlMDA5NGMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.DFdQRPJYKEtE8_F_dooSRWRRRW_wQJiGEru5k-xlfqA',
        description: `This was my first foray into React/ Next.js and also into utilising APIs. My Video Game Database (MGDb), is a IMDb"-esque" web-app but specifically for video games.`,
        more: `The apps includes features such as, search, filter and sort games from the API's lists as well as the ability to select games to view more details, for example: release date, platform(s), a short description and cover images. The app currently gets data from REST API supported by Twitch. The data sorting and filtering is done on the client side / front end. I want to move the data onto my own database and make the client GET this data from my own database, depending on the user's form input selection.
        I am still developing MGDb. Future features will include account creation, the ability to create lists and add games to lists (e.g. favourites, wish lists etc.) and a more expansive variety of game data.
        The demo has been deployed using Amazon Web Services (AWS) Amplify.`,
        projectTags: ['React', 'Next.js','HTML', 'CSS', 'JavaScript'],
        liveCode: true,
        githubLink: 'https://github.com/Rspillane/MGDB',
        liveDemo: true,
        demoLink: 'https://mgdb-jade.vercel.app/',
    },
    {
        id: 2,
        title: 'Forest Brewery Co.',
        img: 'https://private-user-images.githubusercontent.com/41272270/273391163-67aad3ab-3dff-4b43-81ab-f3b09cd2b394.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDY1NjQ2NzYsIm5iZiI6MTcwNjU2NDM3NiwicGF0aCI6Ii80MTI3MjI3MC8yNzMzOTExNjMtNjdhYWQzYWItM2RmZi00YjQzLTgxYWItZjNiMDljZDJiMzk0LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAxMjklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMTI5VDIxMzkzNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWE4YWE2NWI5NmE1NDk2ZGMyYmRlMTQ5MjAzMTg1MjkwYWNkM2U4MzlhYTdiNzU3MzY5ZDcyNmFkNjhlMDA5NGMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.DFdQRPJYKEtE8_F_dooSRWRRRW_wQJiGEru5k-xlfqA',
        description: `Forest Brewing Company is a fictional craft brewery based in Warwickshire. This ecommerce site was an early attempt at a simpler website built without a front end framework. Therefore this project was built with only HTML, CSS and Javascript.`,
        more: `My main takeaway for this project was how to build a site with mobile first design in mind. I learnt about media queries in css and other methods to reformat page components in order for them to be easily understood by the user on both mobile and desktop version of the website.
        Other takeaways included using the appropriate semantic HTML in order for the page to be accessible to as many different types of user as possible.
        I have deployed the single page website using Github pages.`,
        projectTags: ['HTML', 'CSS', 'JavaScript'],
        liveCode: true,
        githubLink: 'https://github.com/Rspillane/forest-brewing-company',
        liveDemo: true,
        demoLink: 'https://rspillane.github.io/forest-brewing-company/',
    },
    {
        id: 3,
        title: 'Zen Rally',
        img: 'https://private-user-images.githubusercontent.com/41272270/273391163-67aad3ab-3dff-4b43-81ab-f3b09cd2b394.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDY1NjQ2NzYsIm5iZiI6MTcwNjU2NDM3NiwicGF0aCI6Ii80MTI3MjI3MC8yNzMzOTExNjMtNjdhYWQzYWItM2RmZi00YjQzLTgxYWItZjNiMDljZDJiMzk0LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAxMjklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMTI5VDIxMzkzNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWE4YWE2NWI5NmE1NDk2ZGMyYmRlMTQ5MjAzMTg1MjkwYWNkM2U4MzlhYTdiNzU3MzY5ZDcyNmFkNjhlMDA5NGMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.DFdQRPJYKEtE8_F_dooSRWRRRW_wQJiGEru5k-xlfqA',
        description: `Zen Rally is a driving mini-game built using the Unity Game Engine and C#. Realistic vehicle physics and calming snowy environment, encourage the player to to get into the flow state of rally driving. `,
        more: `My educational background is in Mechanical and Automotive Engineering, so I decided to build a vehicle controller from scratch in Unity using C# to create the vehicle physics equations and apply these forces to the car model. This mini project has helped expose me to the syntax and structure of another language, in this case C#. It has also provided an opportunity to develop software outside of web development.
        The visuals of the projects are still a work in progress, however most of the vehicle physics have been created. `,
        projectTags: ['C#'],
        liveCode: false,
        githubLink: '',
        liveDemo: false,
        demoLink: '',
    },
    {
        id: 4,
        title: 'Stickr',
        img: 'https://private-user-images.githubusercontent.com/41272270/273391163-67aad3ab-3dff-4b43-81ab-f3b09cd2b394.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDY1NjQ2NzYsIm5iZiI6MTcwNjU2NDM3NiwicGF0aCI6Ii80MTI3MjI3MC8yNzMzOTExNjMtNjdhYWQzYWItM2RmZi00YjQzLTgxYWItZjNiMDljZDJiMzk0LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAxMjklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMTI5VDIxMzkzNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWE4YWE2NWI5NmE1NDk2ZGMyYmRlMTQ5MjAzMTg1MjkwYWNkM2U4MzlhYTdiNzU3MzY5ZDcyNmFkNjhlMDA5NGMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.DFdQRPJYKEtE8_F_dooSRWRRRW_wQJiGEru5k-xlfqA',
        description: 'Stickr is a small scale ecommerce website, created for a fictional sticker company to advertise and sell their range of stickers of popular classic cars in a cellshaded cartoony art style.',
        more: `This project, again utilises React through Next.js. During the project I have tried to build as many reusable components as possible and modular style sheets.

        I was also able to develop my understanding of Hooks to build a dynamic shopping basket, tracking the basket contents and save user data in the broswer.
        
        The sticker art was created with a mixture of Bing AI images and midjourney. I am not a graphic designer, so I have leveraged AI where possible to speed up the production of website content.
        
        This current is still a work in progress, so no demo is currently available but feel free to see the progress via the github link below.`,
        projectTags: ['React', 'Next.js','HTML', 'CSS', 'JavaScript'],
        liveCode: true,
        githubLink: 'https://github.com/Rspillane/stickr',
        liveDemo: false,
        demoLink: '',
    },
    {
        id: 5,
        title: 'My Portfolio Website',
        img: 'https://private-user-images.githubusercontent.com/41272270/273391163-67aad3ab-3dff-4b43-81ab-f3b09cd2b394.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDY1NjQ2NzYsIm5iZiI6MTcwNjU2NDM3NiwicGF0aCI6Ii80MTI3MjI3MC8yNzMzOTExNjMtNjdhYWQzYWItM2RmZi00YjQzLTgxYWItZjNiMDljZDJiMzk0LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAxMjklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMTI5VDIxMzkzNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWE4YWE2NWI5NmE1NDk2ZGMyYmRlMTQ5MjAzMTg1MjkwYWNkM2U4MzlhYTdiNzU3MzY5ZDcyNmFkNjhlMDA5NGMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.DFdQRPJYKEtE8_F_dooSRWRRRW_wQJiGEru5k-xlfqA',
        description: `This is the website you are currently viewing. I plan to continuely update this website as I develop more complex projects. `,
        more: `As it is only currently a single page directing users to my other relevant sites, I have tried to keep it simple, so the page is created with Javascript, HTML, CSS and a bit of jQuery.

        I have tried to style the website in a way where the frontend features are subtle and clean. Hopefully meaning they do not distract from the main information the website is built to show. i.e. My portfolio of projects, a bit about me and my technical background.
        
        I personally like the minimalist style of the site and it will also mean it is much easier to add future content or additional pages.`,
        projectTags: ['HTML', 'CSS', 'JavaScript'],
        liveCode: true,
        githubLink: 'https://github.com/Rspillane/portfolio',
        liveDemo: true,
        demoLink: 'https://rspillane.github.io/portfolio/',
    },
    
]

let cardsContainer = document.getElementsByClassName('portfolio-cards')[0];

const displayMore = () => {
    let expandButton = document.getElementsByClassName('portfolio-expand')[0];

}

// Functions
const createCard = (project) => {
    let card = document.createElement('div');
    card.classList.add(`portfolio-card-${project.id}`);

    let contents = `
    <article class="portfolio-card">
    <p class="portfolio-title">${project.title}</p>
    <p class="portfolio-descr">${project.description}</p>
    <p class="portfolio-more">${project.more}</p>` +
    // <button class="portfolio-expand">more</button>
    `<div class="portfolio-gap"></div>
    <div class="portfolio-tags">${project.projectTags.map(tag => `<div class="portfolio-tag"><span>${tag}</span></div>`).join('')}</div>
    <a href="${project.githubLink}" class="button card-link"><p>Github</p></a>
    <a href="${project.demoLink}" class="button empty-button card-link"><p>${project.liveDemo ? 'Demo' : 'Demo Unavailable'}</p></a>
    </article> 
    `;
    card.innerHTML = contents;
    cardsContainer.append(card);
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
