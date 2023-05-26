import Layout from "@/components/Layout";
import LoginModels from "@/components/models/LoginModels";
import RegisterModels from "@/components/models/RegisterModels";
// import Model from "@/components/Model";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <Model actionLabel="Submit" isOpen title="Test model"/> */}
      <RegisterModels/>
      <LoginModels/>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
