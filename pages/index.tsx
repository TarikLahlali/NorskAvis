import Head from "next/head";
import ArticleContainer from "../components/ArticleContainer";
import { newsData } from "../components/newsData";
import SectionContainer from "../components/SectionContainer";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Nyheter fra Norges mest leste nyttavis</title>
        <meta
          name="keywords"
          content="Nyheter Norge nyttavis norway news newspaper"
        />
      </Head>
      <div className="flex flex-col items-center  h-96 px-2 max-w-5xl mx-auto pt-20">
        <ArticleContainer
          title={newsData[0].title}
          image={newsData[0].image}
          label={newsData[0].label}
          timestamp={newsData[0].timestamp}
        />
        <SectionContainer />
        <h2>under construction...</h2>
      </div>
    </div>
  );
}
