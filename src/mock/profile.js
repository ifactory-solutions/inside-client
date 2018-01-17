export const PROFILE = {
  user: {
    nickname: 'John Doe',
    fullName: 'Johannes Laurent Doe',
    role: 'web developer',
    level: 'level junior',
    birthdate: 'Nov. 05, 1991',
    location: 'NashVille, USA',
    email: 'john.doe@ifactory.com',
    imgSrc: 'https://robohash.org/suntestnemo.png?size=200x200&set=set1',
  },

  facets: [
    {
      id: 1,
      type: 'text-only',
      data: {
        title: 'Professional Profile',
        content: `I have over 15 years of
          experience working in data science.
          Currently, I work as Asana’s Senior Data Manager,
          improving products and services for our customers
          by using advanced analytics,
          standing up big-data analytical tools, creating
          and maintaining models,
          and onboarding compelling new data sets.`,
      },
    },

    {
      id: 2,
      type: 'image-icons',
      data: {
        title: 'Professional Specialities',
        content: [
          {
            id: '1',
            text: 'Data Science',
          },
          {
            id: '2',
            text: 'Hadoop',
          },
          {
            id: '3',
            text: 'Machine Learning',
          },
        ],
      },
    },

    {
      id: 3,
      type: 'steps',
      data: {
        title: 'Education',
        content: [
          {
            id: 1,
            title: 'Springfield Data School',
            content: 'Data Science MBA [2015 - 2016]',
          },
          {
            id: 2,
            title: 'Springfield High Tech College',
            content: 'Computing Science Degree [2012 - 2015]',
          },
          {
            id: 3,
            title: 'Udemy',
            content: 'Mastering Angular JS [2013]',
          },
        ],
      },
    },

    {
      id: 4,
      type: 'steps',
      data: {
        title: 'Work Experience',
        content: [
          {
            id: 1,
            title: 'Springfield Industries',
            content: 'Software Developer [2017 - 2018]',
          },
          {
            id: 2,
            title: 'Springfield Labs',
            content: 'Programmer [2015 - 2016]',
          },
          {
            id: 3,
            title: 'Odin Enterprise',
            content: 'Intern [2015]',
          },
          {
            id: 4,
            title: 'Springfield Tech College',
            content: 'Junior Researcher [2013 - 2015]',
          },
        ],
      },
    },
    {
      id: 5,
      type: 'charts',
      data: {
        title: 'Technical Skills',
        type: 'bar',
        content: [
          {
            name: 'Angular JS',
            value: 10,
          },
          {
            name: 'React + Redux',
            value: 8,
          },
          {
            name: 'Java EE',
            value: 5,
          },
          {
            name: '.NET',
            value: 5,
          },
          {
            name: 'Vue JS',
            value: 8,
          },
        ],
      },
    },
  ],
};
