import Head from 'next/head'
import Link from 'next/link'
import {ArticleContainer, ContentSection, ContentBack, ContentTitle, ContentArticle} from '../styles/articlestyles'
import HerobgSection from '../components/backgroundG'
import Navbar from '../components/navbar'



export default function Post({ children, frontMatter }) {
  const { title } = frontMatter;
  return (
    <>
    <ArticleContainer>
    <Navbar/>
    <HerobgSection/>
      <Head>
        <title>{ title }</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ContentSection>
        <ContentTitle>
          { title }
        </ContentTitle>
        <ContentArticle>
          { children }
        </ContentArticle>
        <ContentBack>
          <Link href="/">
            <a>
            ← Back to home
            </a>
          </Link>
        </ContentBack>
      </ContentSection>
    </ArticleContainer>
    <HerobgSection/>
  </>
  )
}