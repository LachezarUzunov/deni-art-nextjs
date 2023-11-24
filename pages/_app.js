import Head from "next/head";
import Layout from "@/components/layout/layout";
import { LanguageContextProvider } from "@/store/language";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <LanguageContextProvider>
      <Layout>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1"
          title="Paintings for sell"/>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </LanguageContextProvider>
  );
}
