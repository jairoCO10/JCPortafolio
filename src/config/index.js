/* eslint-disable max-len */

import featuredProjects from './featured';
import projects from './projects';

module.exports = {
  email: 'mickt681@gmail.com',
  line: '-------------------',
  featuredProjects,
  projects,
  skills: ['Python', 'Docker', 'SQL', 'PHP', 'GraphQL'],
  experiences: [
    { name: 'Sipremcol', description: 'hola mundo' },
    { name: 'Geomastic', description: 'hola mundo' },
  ],
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/jairoCO10',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/jairo-cogollo/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/jairoCO10',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/jairoCO10',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    // {
    //   name: 'Blog',
    //   url: '',
    // },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
    {
      name: 'Experiencie',
      url: '/#experiencie',
    },
    {
      name: 'Resumen',
      url: '/resumen.pdf',
    },
  ],
  colors: {
    green: '#ffffff',
    navy: '#fffff',
    darkNavy: '#fffff',
  },
};
