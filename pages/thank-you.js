import Head from 'next/head'
import { useRouter } from 'next/router'

import Layout from '../components/layout'
import ThankYou from '../components/thank-you'

export default function ThankYouPage() {
    // non-JS submission
    const router = useRouter()
    const {rating} = router.query

  return (
    <Layout>
      <Head>
        <title>Frontend Mentor | Interactive rating component</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {rating && <ThankYou formRating={rating} />}

    </Layout>
  )
}