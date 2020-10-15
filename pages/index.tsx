import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { GetStaticProps } from 'next'
import Cadastro from '../pages/signup/signup.component';

export default function Home({allPostsData}) {
  return (
    <Layout home>
      <section className={utilStyles.headingMd}>
        <div style={{alignItems: "center", justifyContent: 'center'}}>

        <Cadastro></Cadastro>

        </div>
      <br />
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
          </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export const getStaticProps : GetStaticProps = async conrtext => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}