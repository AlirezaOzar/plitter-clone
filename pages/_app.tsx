import Layout from "@/components/Layout";
import LoginModels from "@/components/models/LoginModels";
import RegisterModels from "@/components/models/RegisterModels";
// import Model from "@/components/Model";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import EditModel from "@/components/models/EditModel";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <Model actionLabel="Submit" isOpen title="Test model"/> */}
      <SessionProvider session={pageProps.session}>
        <Toaster/>
        <EditModel/>
        <RegisterModels />
        <LoginModels />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </>
  );
}
