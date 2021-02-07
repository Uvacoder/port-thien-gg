import Head from 'next/head'
import Layout from '../components/Layout'
import Card from '../components/Card'
import HeroWelcome from '../components/HeroWelcome'
import ThienHero from '../components/ThienHero'

export default function Home() {
  return (
    <div>
      <Head>
        <title>thien.gg</title>
        <meta name='keywords' content='web development, programming, coding, javascript, react, tailwind' />
      </Head>

      <div className='flex flex-col content-center'>
        <ThienHero/>
        <h1>thientran.me</h1>
        <p>this is my homepage.</p>

      </div>
    </div>
  )
}

