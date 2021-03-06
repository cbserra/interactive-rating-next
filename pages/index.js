import Head from 'next/head'
import { useState } from 'react'

import Form from '../components/form'
import Layout from '../components/layout'
import ThankYou from '../components/thank-you'

export default function Home() {
  const [formRating, setFormRating] = useState()

  return (
    <Layout>
      <Head>
        <title>Frontend Mentor | Interactive rating component</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {!formRating && <Form setFormRating={setFormRating} />}
      {formRating && <ThankYou formRating={formRating} />}

    </Layout>
  )
}
