import Layout from "@/components/layout/layout";
import { LanguageContextProvider } from "@/store/language";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <LanguageContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LanguageContextProvider>
  );
}
