import Head from 'next/head'
import Layout from '../components/layout'
import Form from '../components/form'
import ThankYou from '../components/thank-you'
import { useState } from 'react'

export default function Home() {
  const [formRating, setFormRating] = useState()

  return (
    <Layout>
      <Head>
        <title>Frontend Mentor | Interactive rating component</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {!formRating && <Form formRating={formRating} setFormRating={setFormRating} />}
      {formRating && <ThankYou formRating={formRating} />}

    </Layout>
  )
}
