module.exports = {
  siteTitle: 'Jonathan Pereira | Developer Community Evangelist',
  siteDescription:
    'Jonathan Pereira is a developer evangelist',
  siteKeywords:
    'Jonathan Pereira, GoanIdle, Jonathan Google, Jonathan Goa, Jonathan Postman',
  siteUrl: 'https://jonathanpereira.dev',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-143014926-2',
  //googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Jonathan Pereira',
  location: 'Bengaluru',
  email: 'hello@jonathanpereira.dev',
  github: 'https://github.com/jonathan366',
  twitterHandle: '@GoanIdle',
  socialMedia: [
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/jonathanp1',
    },
    {
      name: 'Facebook',
      url: 'https://www.fb.me/jonathanpereira',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/jonathan366',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/GoanIdle',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/GoanIdle',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    //{
      //name: 'Work',
      //url: '/#projects',
    //},
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,
  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
