import uuidv1 from 'uuid/v1';
import dvst3img from '../../external_docs/delfi-de-la-rua-KLBvT4BVdVo-unsplash.jpg';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
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
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: dvst3img,
    title: 'DVST3 Database',
    info: `DVST3 Database is my contribution to a project designed to help victims of domestic abuse calculate the costs of relocation.  This basic backend uses Express with a PostgreSQL database.`,
    info2: '',
    url: 'https://dvst3-be.herokuapp.com/',
    repo: 'https://github.com/DVST3/dvst3-back-end', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'twitter',
      url: '',
    },
    {
      id: uuidv1(),
      name: 'codepen',
      url: '',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: '',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
