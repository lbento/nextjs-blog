import Head from 'next/head'
import Header from './header'
import Footer from './footer'

export default function Layout({ children, home }: any) {
  return (
    <div>
      <Head>
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' />
        <meta name='description' content='Description' />
        <meta name='keywords' content='Keywords' />
        <title>Bike Itaú</title>

        <link rel="manifest" href="/manifest.json" />
        <link href='/bike_sampa.png' rel='icon' type='image/png' sizes='16x16' />
        <link href='/bike_sampa.png' rel='icon' type='image/png' sizes='32x32' />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#FF5900"/>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}