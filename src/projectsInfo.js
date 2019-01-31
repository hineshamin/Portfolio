import jobly1 from './screens/jobly1.png';
import jobly2 from './screens/jobly2.png';
import jobly3 from './screens/jobly3.png';
import jobly4 from './screens/jobly4.png';
import bolt1 from './screens/bolt1.png';
import bolt2 from './screens/bolt2.png';
import warbler1 from './screens/warbler1.png';
import warbler2 from './screens/warbler2.png';
import warbler3 from './screens/warbler3.png';
import warbler4 from './screens/warbler4.png';
import coursereport1 from './screens/coursereport1.png';
import coursereport2 from './screens/coursereport2.png';
import coursereport3 from './screens/coursereport3.png';
import coursereport4 from './screens/coursereport4.png';
import coursereport5 from './screens/coursereport5.png';
import coursereport6 from './screens/coursereport6.png';
import coursereport7 from './screens/coursereport7.png';
import coursereportgif from './screens/coursereport.gif';
import coursereporta1 from './screens/coursereporta1.png';
import coursereporta2 from './screens/coursereporta2.png';
import algorithms1 from './screens/algorithms1.gif';
import algorithms2 from './screens/algorithms2.gif';
import algorithms3 from './screens/algorithms3.gif';
import algorithms4 from './screens/algorithms4.gif';
import microblog1 from './screens/microblog1.png';
import microblog2 from './screens/microblog2.png';
import flyinghouse1 from './screens/flyinghouse1.png';
import flyinghouse2 from './screens/flyinghouse2.png';
import flyinghouse3 from './screens/flyinghouse3.png';

const coursereportm = {
  title: 'Course Report Mobile App',
  screens: [
    coursereport1,
    coursereportgif,
    coursereport2,
    coursereport3,
    coursereport4,
    coursereport5,
    coursereport6,
    coursereport7
  ],
  media: 'iphone',
  nextProject: 'jobly',
  nextProjectTitle: 'Jobly',
  tech: ['React Native', 'Node/Express', 'Rails', 'Redis', 'PostgreSQL'],
  description:
    'ABOUT:  During a month long internship with Course Report, a group of 6 of us made a mobile app from scratch using react native. The current Course Report web app uses rails as their backend without CORS enabled as well as postgreSQL as the database. We created a proxy server with node/express to communicate with the rails backend so we would not have enable CORS on the main rails backend and so data could be cleaned up before being sent to the client. We also used redis with our proxy server in order to cache school and blog data which sped up loading time by 80%. The app features search capabilities and leverages phone location data to find the nearest schools to the user.'
};

const jobly = {
  title: 'Jobly',
  description: `ABOUT: Jobly is a mock app that allows users to view companies and apply to jobs posted by those companies. The app features a full user signup/login process as well as authorization/authentication using JSON web token and bcrypt. The styling is done using ReactStrap and Bootstrap. Animations are used to various places to enhance the user experience as well as give feedback on loading. The backend is built in Node/Express and the frontend is built in React. PostgreSQL is the database that is used. Unit and integrations tests are written using jest. Feel free to check out the github link for all the code as well as the external link to a live hosted site.`,
  screens: [jobly1, jobly2, jobly3, jobly4],
  tech: ['React', 'Node/Express', 'PostgreSQL'],
  nextProject: 'warbler',
  nextProjectTitle: 'Warbler',
  github: 'https://github.com/hineshamin/react-jobly',
  live: 'https://react-jobly.herokuapp.com'
};

const warbler = {
  title: 'Warbler',
  description: `ABOUT: Warbler is a mock twitter clone built completely as a backend application. Users can signup/login, follow other users, be followed by other users, create warbles which are tweets, as well as direct message other users. User authentication/authorization is done with bcrypt for verification and sessions are used to store current user information. The backend is built in Flask and Jinja is used as a templating system for the HTML. PostgreSQL is the database that is used. Tests are written for the views and models using the unittest module. Feel free to check out the github link for all the code as well as the external link to a live hosted site.`,
  screens: [warbler1, warbler2, warbler3, warbler4],
  tech: ['Jinja', 'Flask', 'PostgreSQL'],
  github: 'https://github.com/hineshamin/warbler',
  live: 'https://warbler-vsha2.herokuapp.com/',
  nextProject: 'algorithms',
  nextProjectTitle: 'Algorithms'
};

const algorithms = {
  title: 'Algorithms',
  description: `ABOUT: Other than building apps, I love testing myself solving algorithm problems. I have completed a couple of coursera courses on algorithms using Python. These ranged from sorting and searching algorithms to advanced graph and dynamic programming algorithms like Dijkstra’s algorithm, minimum spanning trees, and weighted independent sets in path graphs. I have done plenty of problems on codewars in JavaScript which is website that has problems ranging from easy (8 kyu) to very hard (1 kyu). I am proud to say that I am in the 98th percentile on codewars and have done problems in the 2kyu - 4kyu range. Please feel free to look at the github repo for my implementations of these algorithms.`,
  tech: ['JavaScript', 'Python'],
  nextProject: 'humbleabode',
  nextProjectTitle: 'Humble Abode',
  screens: [algorithms1, algorithms2, algorithms3, algorithms4],
  media: 'iphone',
  github: 'https://github.com/hineshamin/Algorithms'
};

const humbleabode = {
  title: 'Humble Abode',
  description: `ABOUT: Humble Abode is a whimsical multiplayer house flying simulator for the Oculus Rift inspired by Up! Players work together to keep their home afloat, feeding their fireplace with coal in order to keep the hot air flowing  while simultaneously steering the house towards the the promised land. Hilarity and Hijinks ensue as players dodge fire and other floating obstacles while floating through a huge open world. We utilized a combination of a unique teleport-dash locomotion system, and a grabbing system with a ranged tether to reach for far away objects. Players would steer the ship by literally turning the steering wheel with their hands. Our objective was to create a fun, ambitious, and open-ended experience that challenged traditional notions of what a VR game could be. The mechanics and interactions were designed to be enjoyed in a way that no other medium could provide.`,
  tech: ['C#', 'Unity Game Engine', '3ds Max', 'Gaia'],
  nextProject: 'microblog',
  nextProjectTitle: 'Microblog',
  screens: [flyinghouse1, flyinghouse2, flyinghouse3]
};

const microblog = {
  title: 'Microblog',
  description: `ABOUT: My team and I built the frontend for this app using React (CRA setup), Redux, and Redux Thunk. The goal was to create an app that has a fundamentally sound component heirarchy. Another goal was to intelligently connect components to redux to prop drilling`,
  tech: ['React', 'Redux', 'Node/Express'],
  nextProject: 'coursereportapp',
  nextProjectTitle: 'Course Report Comparison Tool',
  screens: [microblog1, microblog2],
  github: 'https://github.com/hineshamin/microblog',
  live: 'https://microblogly-frontend.herokuapp.com'
};

const coursereportapp = {
  title: 'Course Report Comparison Tool',
  description: `ABOUT: During a month long internship with Course Report, I worked with another developer to completely redesign the comparison tool that Course Report wanted to be a highlight of their website. The current comparison tool didn’t look modern, and the code was jumbled and unclean. We worked to update the UI with a modern feel and made the tool web responsive so that it could be viewed on all platforms. We also object oriented the front end javascript so that the code was more modular and easy to expand in the future. We used jQuery for the frontend to do this.`,
  screens: [coursereporta1, coursereporta2],
  tech: ['jQuery', 'Rails', 'PostgreSQL'],
  nextProject: 'bolt',
  nextProjectTitle: 'Bolt'
};

const bolt = {
  title: 'Bolt',
  description: `ABOUT: Bolt is a tool for modern software planning. Bolt enables its users to make tasks and assign them to specific individuals. Tasks can have different statuses based on how far along it has been completed. This tool was build for engineers to manage their projects. User signup/login and authorization/authentication is done using JSON web token and bcrypt. The frontend is built using React. The backend is built in Flask. PostgreSQL is the database that is used. Feel free to look at the github link for the code.`,
  screens: [bolt1, bolt2],
  tech: ['React', 'Flask', 'PostgreSQL'],
  nextProject: 'lightsout',
  nextProjectTitle: 'Lights Out',
  github: 'https://github.com/viveksainanee/bolt'
};

const lightsout = {
  title: 'Lights Out',
  description: `ABOUT: Just a fun frontend game built out in React. Lights out is a logic/puzzle game, played on a grid of individual lights, which can either be lit or unlit. The puzzle is won when when all of the lights are turned off. You can click on a cell to toggle that light — but it also toggles the light above it, to the left of it, to the right of it, and below it. (Cells on an edge or in the corner won’t flip as many lights, since they are missing some neighbors). You can see the code for the game on github. Look below and give it a whirl!`,
  tech: ['React'],
  nextProject: 'coursereportmobile',
  nextProjectTitle: 'Course Report Mobile',
  screens: [],
  media: 'game',
  github: 'https://github.com/hineshamin/Lights-Out'
};

export {
  jobly,
  bolt,
  warbler,
  coursereportm,
  coursereportapp,
  lightsout,
  algorithms,
  humbleabode,
  microblog
};
