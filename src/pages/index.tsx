import { Layout } from '@src/components/layout'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import React from 'react'
import utilStyles from '../styles/utils.module.css'

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const myProps = 'Hello world!'
  return {
    props: { myProps },
  }
}

export default function Home({ myProps }: HomeProps) {
  return (
    <Layout home>
      <Head>
        <title>My Template WebApp</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>{myProps}</h2>
      </section>
    </Layout>
  )
}

type HomeProps = {
  myProps: any
}
