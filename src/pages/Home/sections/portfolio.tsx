import React from 'react'
import SectionTitle from '../components/section-title'
import GridContainer from '../components/grid-container'
import SectionContainer from '../components/section-container'
import PortfolioCard from '../components/Portfolio/portfolio-card'

const projects = [
  {
    title: 'Sendapp',
    image: '/assets/images/portfolio/sendapp.jpg',
    tools: {
      'Next.js': 'bg-[url(../public/assets/images/logos/nextjs.png)]',
      Expo: 'bg-[url(../public/assets/images/logos/expo.svg)]',
      Tamagui: 'bg-[url(../public/assets/images/logos/tamagui.svg)]',
      Supabase: 'bg-[url(../public/assets/images/logos/supabase.svg)]',
      TypeScript: 'bg-[url(../public/assets/images/logos/typescript.svg)]',
      Jest: 'bg-[url(../public/assets/images/logos/jest.svg)]',
      Playwright: 'bg-[url(../public/assets/images/logos/playwright.svg)]',
    },
    description:
      'A simple app to send ETH and ERC20 tokens - Next.js for web, Expo for native version, Tamagui for components and screens compatible with both web & native',
    link: 'https://send.app',
    github: 'https://github.com/0xsend/sendapp',
  },
  {
    title: 'Fursion app',
    image: '/assets/images/portfolio/fursion.jpg',
    tools: {
      'Next.js': 'bg-[url(../public/assets/images/logos/nextjs.png)]',
      Expo: 'bg-[url(../public/assets/images/logos/expo.svg)]',
      Tamagui: 'bg-[url(../public/assets/images/logos/tamagui.svg)]',
      Supabase: 'bg-[url(../public/assets/images/logos/supabase.svg)]',
      TypeScript: 'bg-[url(../public/assets/images/logos/typescript.svg)]',
    },
    description:
      'An art marketplace where artists can buy/sell their creations - Next.js for web, Expo for native version, Tamagui for components and screens compatible with both web & native',
    link: '#',
    github: '',
  },
  {
    title: 'Cyberlionz',
    image: '/assets/images/portfolio/cyberlionz.png',
    tools: {
      Vue: 'bg-[url(../public/assets/images/logos/vue.svg)]',
      Nuxt: 'bg-[url(../public/assets/images/logos/nuxt.svg)]',
      'AWS Lambda': 'bg-[url(../public/assets/images/logos/aws-lambda.svg)]',
      TailwindCSS: 'bg-[url(../public/assets/images/logos/tailwindcss.svg)]',
      Solidity: 'bg-[url(../public/assets/images/logos/solidity.svg)]',
      Ethereum: 'bg-[url(../public/assets/images/logos/ethereum.svg)]',
    },
    description:
      'NFT game site with features like minting, staking, evolving and Unity integration',
    link: 'https://cyberlionz.io/',
    github: 'https://github.com/OxLeOx/cyberlionz/',
  },
  {
    title: 'Antonym Redeemer',
    image: '/assets/images/portfolio/antonym.jpg',
    tools: {
      Vue: 'bg-[url(../public/assets/images/logos/vue.svg)]',
      'AWS Lambda': 'bg-[url(../public/assets/images/logos/aws-lambda.svg)]',
      TypeScript: 'bg-[url(../public/assets/images/logos/typescript.svg)]',
      Shopify: 'bg-[url(../public/assets/images/logos/shopify.svg)]',
      Solidity: 'bg-[url(../public/assets/images/logos/solidity.svg)]',
      Ethereum: 'bg-[url(../public/assets/images/logos/ethereum.svg)]',
    },
    description: 'Collectors of Antonym Genesis NFTs are eligible to redeem for physical editions',
    link: 'https://redemption.antonymnft.com/',
    github: 'https://github.com/OxLeOx/antonym-nft/',
  },
  {
    title: 'ProtoCalls',
    image: '/assets/images/portfolio/protocalls.jpg',
    tools: {
      React: 'bg-[url(../public/assets/images/logos/react.svg)]',
      'Redux-Toolkit': 'bg-[url(../public/assets/images/logos/redux.svg)]',
      TypeScript: 'bg-[url(../public/assets/images/logos/typescript.svg)]',
      TailwindCSS: 'bg-[url(../public/assets/images/logos/tailwindcss.svg)]',
    },
    description: 'A Simple version of coinmarketcap',
    link: 'https://protocalls.vercel.app',
    github: 'https://github.com/OxLeOx/protocalls/',
  },
  {
    title: 'Eat The Odds',
    image: '/assets/images/portfolio/eattheodds.jpg',
    tools: {
      'Next.js': 'bg-[url(../public/assets/images/logos/nextjs.png)]',
      TypeScript: 'bg-[url(../public/assets/images/logos/typescript.svg)]',
      TailwindCSS: 'bg-[url(../public/assets/images/logos/tailwindcss.svg)]',
      Solidity: 'bg-[url(../public/assets/images/logos/solidity.svg)]',
      Ethereum: 'bg-[url(../public/assets/images/logos/ethereum.svg)]',
    },
    description: 'Eat the odds NFT minting site',
    link: 'https://eattheodds.vercel.app',
    github: 'https://github.com/OxLeOx/eattheodds',
  },
  // {
  //   title: 'I4Vision',
  //   image: '/assets/images/portfolio/i4vision.jpg',
  //   tools: {
  //     Laravel: 'bg-[url(../public/assets/images/logos/laravel.svg)]',
  //     PHP: 'bg-[url(../public/assets/images/logos/php.svg)]',
  //     Bootstrap: 'bg-[url(../public/assets/images/logos/bootstrap.svg)]',
  //   },
  //   description: 'Full Stack Developer',
  //   link: 'https://i4vision.de/',
  //   github: '',
  // },
  {
    title: 'Protest',
    image: '/assets/images/portfolio/protest.jpg',
    tools: {
      'Next.js': 'bg-[url(../public/assets/images/logos/nextjs.png)]',
      TypeScript: 'bg-[url(../public/assets/images/logos/typescript.svg)]',
      GraphQL: 'bg-[url(../public/assets/images/logos/graphql.svg)]',
    },
    description: 'Sportswear shopping site',
    link: 'https://www.protest.eu/',
    github: '',
  },
  {
    title: 'ETQ',
    image: '/assets/images/portfolio/etq.jpg',
    tools: {
      'Next.js': 'bg-[url(../public/assets/images/logos/nextjs.png)]',
      'Redux-Toolkit': 'bg-[url(../public/assets/images/logos/redux.svg)]',
      Shopify: 'bg-[url(../public/assets/images/logos/shopify.svg)]',
    },
    description: 'ETQ Shoes shopping site',
    link: 'https://www.etq-amsterdam.com/',
    github: '',
  },
  {
    title: 'Save Whales',
    image: '/assets/images/portfolio/save_whales.jpg',
    tools: {
      React: 'bg-[url(../public/assets/images/logos/react.svg)]',
      GSAP: 'bg-[url(../public/assets/images/logos/gsap.svg)]',
    },
    description:
      'A non-commercial project created to raise awareness of the endangered whale species',
    link: 'https://save-whales.com/',
    github: '',
  },
  // {
  //   title: 'Dummy Products',
  //   image: '/assets/images/portfolio/dummy_products.jpg',
  //   tools: {
  //     React: 'bg-[url(../public/assets/images/logos/react.svg)]',
  //     'Redux-Toolkit': 'bg-[url(../public/assets/images/logos/redux.svg)]',
  //     TypeScript: 'bg-[url(../public/assets/images/logos/typescript.svg)]',
  //     TailwindCSS: 'bg-[url(../public/assets/images/logos/tailwindcss.svg)]',
  //   },
  //   description: 'Displaying dummy products info',
  //   link: '#',
  //   github: 'https://github.com/0xLe0x/dummy-products',
  // },
]

const PortfolioSection = () => {
  return (
    <SectionContainer
      id="portfolio"
      addClass="bg-[linear-gradient(#000,rgba(0,0,0,0.93),rgba(0,0,0,0.66))] pb-20"
    >
      <SectionTitle>Portfolio</SectionTitle>
      <GridContainer>
        {projects.map((project, index) => (
          <PortfolioCard key={`portfolio-${index}`} {...project} />
        ))}
      </GridContainer>
    </SectionContainer>
  )
}

export default PortfolioSection
