import React from 'react';
import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../services/termos';

const TermosDeUso: React.FC<any> = ({postData}) => {

  return (
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  );
}

export default TermosDeUso;

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}
