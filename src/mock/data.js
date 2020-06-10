import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Nathan Saygers', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Nathan',
  subtitle: `I'm a full stack web developer`,
  cta: 'Learn More',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: `I'm a resident of Portland, Oregon continuously committed to self-improvement and learning.  I am currently looking for my first software development position.`,
  paragraphTwo: `My coding journey began with Lambda School's Web Development program.  My work so far has focused on React, and NodeJS.`,
  paragraphThree: `When I'm not coding, I enjoy rock climbing, reading, and playing music.`,
  resume: 'https://drive.google.com/file/d/1T20a4_MnoX4E4Gu3K1XVOdQqJA22cRrG/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'connect_our_kids.png',
    title: 'Connect Our Kids',
    info: `Connect Our Kids is a suite of tools designed to help social workers find family connections and possible homes for children about to enter the foster care system.  I worked on this project for two months adding file and photo upload capabilities to the React-Native mobile app.`,
    info2: `Built with: React Native`,
    url: 'https://apps.apple.com/us/app/connect-our-kids/id1471038972',
    repo: 'https://github.com/connect-our-kids/mobile-app', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'dumbbells.jpeg',
    title: 'Weight Lifting Journal',
    info: `Weight Lifting Journal is a simple React app for tracking workouts.  This project was designed as an exercise in state management.  It makes use of Redux for the sake of practice, despite its small size.`,
    info2: 'Built with: React',
    url: 'https://weight-lifting-journal-fe.netlify.app/',
    repo: 'https://github.com/nathan-saygers/Weight-Lifting-Journal-Front-end', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'family_walking.jpg',
    title: 'DVST3 Database',
    info: `DVST3 Database is my contribution to a project designed to help victims of domestic abuse calculate the costs of relocation.  This basic backend uses Express with a PostgreSQL database.`,
    info2: 'Built with: Express',
    url: 'https://dvst3-be.herokuapp.com/',
    repo: 'https://github.com/DVST3/dvst3-back-end', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'nathan.saygers@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'codepen',
      url: 'https://codepen.io/Nathan_Saygers',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/nathan-saygers/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/nathan-saygers',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
