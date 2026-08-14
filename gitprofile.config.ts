// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'JFrusher', // Your GitHub username[cite: 2]
  },
  base: '/',
  projects: {
    github: {
      display: true, 
      header: 'Github Projects',
      mode: 'automatic', 
      automatic: {
      sortBy: 'updated', 
      limit: 50,
      exclude: {
        forks: false, 
        projects: [
          'JFrusher/JFrusher.github.io', 
        ], 
      },
    },
      manual: {
        projects: [], 
      },
    },
    external: {
      header: 'My Projects',
      // Kept empty to hide the External Projects section
      projects: [],
    },
  },
  seo: { 
    title: 'Portfolio of Jacob Frusher', 
    description: 'OSAT Process Engineer & Biomedical Engineering Student', 
    imageURL: '' 
  },
  social: {
    linkedin: 'jacob-frusher-44333124b', //[cite: 2]
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', 
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', 
    discord: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'jacob@frusher.co.uk', //[cite: 2]
  },
  resume: {
    fileUrl: '', // Add direct link to your PDF CV if hosted online
  },
  skills: [
    'Python', //[cite: 2]
    'Gage R&R', //[cite: 2]
    'Measurement System Analysis', //[cite: 2]
    'SQL / Azure SQL', //[cite: 2]
    'Azure Blob Storage', //[cite: 2]
    'ETL Pipelines', //[cite: 2]
    'NumPy / SciPy', //[cite: 2]
    'Signal Analysis', //[cite: 2]
    'MATLAB', //[cite: 2]
    'Git', //[cite: 2]
  ],
  experiences: [
    {
      company: 'Custom Interconnect', //[cite: 2]
      position: 'Industrial Placement OSAT Process Engineer', //[cite: 2]
      from: 'July 2026', //[cite: 2]
      to: 'Present', //[cite: 2]
      companyLink: '',
    },
    {
      company: 'University of Southampton', //[cite: 2]
      position: 'Summer Intern', //[cite: 2]
      from: 'June 2026', //[cite: 2]
      to: 'July 2026', //[cite: 2]
      companyLink: 'https://www.southampton.ac.uk',
    },
    {
      company: 'Lifelight', //[cite: 2]
      position: 'Student Scientist', //[cite: 2]
      from: 'March 2026', //[cite: 2]
      to: 'July 2026', //[cite: 2]
      companyLink: '',
    },
    {
      company: 'Cameroon Catalyst', //[cite: 2]
      position: 'Assistant Design Coordinator', //[cite: 2]
      from: 'September 2024', //[cite: 2]
      to: 'September 2025', //[cite: 2]
      companyLink: '',
    },
  ],
  certifications: [
    {
      name: 'Gage R&R Simplified: Essential Tools for Quality Engineers', //[cite: 2]
      body: '',
      year: '',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'University of Southampton', //[cite: 2]
      degree: "Master's Degree, Mechanical Engineering - Biomedical Engineering", //[cite: 2]
      from: 'September 2023', //[cite: 2]
      to: 'May 2028', //[cite: 2]
    },
    {
      institution: 'MARLING SCHOOL', //[cite: 2]
      degree: 'A Levels in Mathematics, Physics, Chemistry', //[cite: 2]
      from: 'September 2021', //[cite: 2]
      to: 'May 2023', //[cite: 2]
    },
  ],
  publications: [],
  blog: {
    source: '', 
    username: '', 
    limit: 0, 
  },
  googleAnalytics: {
    id: '', 
  },
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'lofi',
    disableSwitch: false,
    respectPrefersColorScheme: true,
    displayAvatarRing: true,
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },
  footer: `Made with ❤️`,
  enablePWA: true,
};

export default CONFIG;
