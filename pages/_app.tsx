import Layout from "@/components/Layout";
// import Model from "@/components/Model";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <Model actionLabel="Submit" isOpen title="Test model"/> */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
