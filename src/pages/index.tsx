import Link from 'next/link';
import React from 'react';
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout >
      <section >
        <div style={{textAlign: 'center'}}>

        <Link href='/signup'>
            <a>Cadastro</a>
        </Link><br/>
        <Link href='/plans'>
            <a>Planos</a>
        </Link>

        </div>
      </section>
    </Layout>
  )
}