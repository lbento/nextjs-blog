import React from 'react';
import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../services/termos';
import TextoContainer from '../../components/textocontainer'

const texto: React.FC<any> = ({postData}) => {

  return (
    <Layout>
      <TextoContainer>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </TextoContainer>
    </Layout>
  );
}

export default texto;

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
