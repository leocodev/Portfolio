import React from 'react'
import GridContainer from '../components/grid-container'
import SectionContainer from '../components/section-container'
import SectionTitle from '../components/section-title'
import SkillCard from '../components/Skills/skill-card'

const skills = [
  {
    title: 'Mobile App Development',
    years: 4,
    experience: [
      'React Native & Expo for Web, Android & iOS',
      'Tamagui components for both Web | Native versions',
      'Tamagui Takeout monorepo as a starter kit, Bento as UI library',
      'Expo Application Servicies(EAS) for app build and distribution',
      'Solito for Cross-Platform Navigation',
      'Ionic React/Vue for Web, Android & iOS, Electron and PWA',
    ],
    tools: {
      'React Native': 'bg-[url(../public/assets/images/logos/react-native.png)]',
      Expo: 'bg-[url(../public/assets/images/logos/expo.svg)]',
      Tamagui: 'bg-[url(../public/assets/images/logos/tamagui.svg)]',
      Ionic: 'bg-[url(../public/assets/images/logos/ionic.svg)]',
    },
  },
  {
    title: 'React | Next.js',
    years: 5,
    experience: [
      'Next.js App Router & Page Router',
      'Next.js SSR & SSG',
      'Next.js SEO Optimization',
      'Redux Toolkit, Redux Saga, Redux Thunk',
      'JSX & TSX',
      'React Hooks, Styled Components',
      'TailwindCSS, WindiCSS, SASS',
      'MUI, Ant Design, Semantic UI, Chakra UI, Next UI',
      'Currently learning Remix',
    ],
    tools: {
      'Next.js': 'bg-[url(../public/assets/images/logos/nextjs.png)]',
      React: 'bg-[url(../public/assets/images/logos/react.svg)]',
      Remix: 'bg-[url(../public/assets/images/logos/remix.svg)]',
      Redux: 'bg-[url(../public/assets/images/logos/redux.svg)]',
      TailwindCSS: 'bg-[url(../public/assets/images/logos/tailwindcss.svg)]',
      SASS: 'bg-[url(../public/assets/images/logos/sass.svg)]',
    },
  },
  {
    title: 'Vue | Nuxt',
    years: 4,
    experience: [
      'Vue.js v2, v3, Vue Composition API',
      'State management with VueX',
      'Vue CLI(webpack), Vite, Quasar CLI and Parcel',
      'VitePress, VuePress and Vue Storefront',
      'SSR and SSG with Nuxt.js, Vite-SSG and SEO optimization',
    ],
    tools: {
      Vue: 'bg-[url(../public/assets/images/logos/vue.svg)]',
      Vuetify: 'bg-[url(../public/assets/images/logos/vuetify.svg)]',
      'Nuxt.js': 'bg-[url(../public/assets/images/logos/nuxt.svg)]',
      'Quasar Framework': 'bg-[url(../public/assets/images/logos/quasar.svg)]',
      TailwindCSS: 'bg-[url(../public/assets/images/logos/tailwindcss.svg)]',
      // 'Laravel Blade': 'bg-[url(../public/assets/images/logos/laravel-blade.svg)]',
    },
  },
  {
    title: 'Backend Techs',
    years: 4,
    experience: [
      'Node.js, Nest.js, Express',
      'MySQL, MongoDB, PostgreSQL',
      'Firebase | Supabase',
      'GraphQL, Apollo',
      'WebSocket/Socket.io',
      'Prisma, TypeORM, tRPC',
    ],
    tools: {
      'Node.js': 'bg-[url(../public/assets/images/logos/node.svg)]',
      'Nest.js': 'bg-[url(../public/assets/images/logos/nest.svg)]',
      // MySQL: 'bg-[url(../public/assets/images/logos/mysql.svg)]',
      // MongoDB: 'bg-[url(../public/assets/images/logos/mongodb.svg)]',
      GraphQL: 'bg-[url(../public/assets/images/logos/graphql.svg)]',
      Prisma: 'bg-[url(../public/assets/images/logos/prisma.svg)]',
      tRPC: 'bg-[url(../public/assets/images/logos/trpc.svg)]',
      PostgreSQL: 'bg-[url(../public/assets/images/logos/postgresql.svg)]',
      // Firebase: 'bg-[url(../public/assets/images/logos/firebase.svg)]',
      Supabase: 'bg-[url(../public/assets/images/logos/supabase.svg)]',
    },
  },
  {
    title: 'Other JavaScript techniques',
    years: 6,
    experience: [
      'JavaScript, ES6+, TypeScript',
      'Webpack, Vite, Babel, Grunt, Gulp',
      'D3.js, Phaser.js, Three.js, Rechart',
      'GSAP Animation',
      'Unit test using Jest | Vitest, e2e test using Playwright',
    ],
    tools: {
      JavaScript: 'bg-[url(../public/assets/images/logos/javascript.svg)]',
      TypeScript: 'bg-[url(../public/assets/images/logos/typescript.svg)]',
      WebPack: 'bg-[url(../public/assets/images/logos/webpack.svg)]',
      Vite: 'bg-[url(../public/assets/images/logos/vite.svg)]',
      // Grunt: 'bg-[url(../public/assets/images/logos/grunt.svg)]',
      'D3.js': 'bg-[url(../public/assets/images/logos/d3.svg)]',
      Jest: 'bg-[url(../public/assets/images/logos/jest.svg)]',
      Playwright: 'bg-[url(../public/assets/images/logos/playwright.svg)]',
    },
  },
  {
    title: 'Team collaboration and CI/CD',
    years: 6,
    experience: [
      'CI/CD with Docker, Jenkins',
      'Vercel, Netlify, AWS EC2, Amplify Hosting & Deployment',
      'Asana, Trello and Jira',
      'Agile/Scrum methodologies',
      'Slack, Skype, Telegram, Discord',
      'Communicative & Collaborative',
    ],
    tools: {
      Docker: 'bg-[url(../public/assets/images/logos/docker.svg)]',
      Jira: 'bg-[url(../public/assets/images/logos/jira.svg)]',
      Trello: 'bg-[url(../public/assets/images/logos/trello.svg)]',
      Slack: 'bg-[url(../public/assets/images/logos/slack.svg)]',
      Discord: 'bg-[url(../public/assets/images/logos/discord.png)]',
      Telegram: 'bg-[url(../public/assets/images/logos/telegram.svg)]',
      Skype: 'bg-[url(../public/assets/images/logos/skype.svg)]',
    },
  },
  // {
  //   title: 'Git and SVN',
  //   years: 6,
  //   experience: [
  //     'GitHub, GitLab and BitBucket',
  //     'Git Bash, Git GUI',
  //     'Source Tree, GitKraken',
  //     'Tortoise SVN',
  //   ],
  //   tools: {
  //     GitHub: 'bg-[url(../public/assets/images/logos/github.svg)]',
  //     GitLab: 'bg-[url(../public/assets/images/logos/gitlab.svg)]',
  //     BitBucket: 'bg-[url(../public/assets/images/logos/bitbucket.svg)]',
  //     'Source Tree': 'bg-[url(../public/assets/images/logos/sourcetree.svg)]',
  //     GitKraken: 'bg-[url(../public/assets/images/logos/gitkraken.svg)]',
  //   },
  // },
]

const SkillsSection = () => {
  return (
    <SectionContainer
      addClass="bg-[linear-gradient(#000,rgba(0,0,0,0.93),rgba(0,0,0,0.66))]"
      id="skills"
    >
      <SectionTitle>Skills</SectionTitle>
      <GridContainer>
        {skills.map((skill) => (
          <SkillCard key={skill.title} {...skill} />
        ))}
      </GridContainer>
    </SectionContainer>
  )
}

export default SkillsSection
