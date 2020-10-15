import Link from 'next/link';
import React from 'react';
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <section className={utilStyles.headingMd}>
        <div style={{alignItems: "center", justifyContent: 'center'}}>

        <Link href='/signup'>
            <a>Cadastro</a>
        </Link>

        </div>
      </section>
    </Layout>
  )
}