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
//TODO: ADD TESTING DESCRIPTION
const jobly = {
  title: 'Jobly',
  description: `ABOUT: Jobly is a mock app that allows users to view companies and apply to jobs posted by those companies. The app features a full user signup/login process as well as authorization/authentication using JSON web token and bcrypt. The styling is done using ReactStrap and Bootstrap. Animations are used to various places to enhance the user experience as well as give feedback on loading. The backend is built in Node/Express and the frontend is built in React. PostgreSQL is the database that is used. Unit and integrations tests are written using jest. Feel free to check out the github link for all the code as well as the external link to a live hosted site.`,
  screens: [jobly1, jobly2, jobly3, jobly4],
  tech: ['React', 'Node/Express', 'PostgreSQL'],
  nextProject: 'bolt',
  github: 'https://github.com/hineshamin/react-jobly',
  live: 'https://react-jobly.herokuapp.com'
};

const bolt = {
  title: 'Bolt',
  description: `ABOUT: Bolt is a tool for modern software planning. Bolt enables its users to make tasks and assign them to specific individuals. Tasks can have different statuses based on how far along it has been completed. This tool was build for engineers to manage their projects. User signup/login and authorization/authentication is done using JSON web token and bcrypt. The frontend is built using React. The backend is built in Flask. PostgreSQL is the database that is used.`,
  screens: [bolt1, bolt2],
  tech: ['React', 'Flask', 'PostgreSQL'],
  nextProject: 'warbler'
};

const warbler = {
  title: 'Warbler',
  description: `ABOUT: Warbler is a mock twitter clone built completely as a backend application. Users can signup/login, follow other users, be followed by other users, create warbles which are tweets, as well as direct message other users. User authentication/authorization is done with bcrypt for verification and sessions are used to store current user information. The backend is built in Flask and Jinja is used as a templating system for the HTML. PostgreSQL is the database that is used. Tests are written for the views and models using the unittest module. Feel free to check out the github link for all the code as well as the external link to a live hosted site.`,
  screens: [warbler1, warbler2, warbler3, warbler4],
  tech: ['Jinja', 'Flask', 'PostgreSQL'],
  github: 'https://github.com/hineshamin/warbler',
  live: 'https://warbler-vsha2.herokuapp.com/',
  nextProject: 'jobly'
};

export { jobly, bolt, warbler };
