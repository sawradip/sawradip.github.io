export const config = {
  email: 'sawradip0@gmail.com',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/sawradip',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/sawradip',
    },
    {
      name: 'Facebook',
      url: 'https://facebook.com/sawradip',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/sawradip',
    },
    {
      name: 'StackOverflow',
      url: 'https://stackoverflow.com/users/13945920/sawradip-saha',
    },
    {
      name: 'Kaggle',
      url: 'https://www.kaggle.com/sawradipsaha',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Education',
      url: '/#education',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Competitions',
      url: '/#competitions',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
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
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};

