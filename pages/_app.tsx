import Layout from "@/components/Layout";
import LoginModels from "@/components/models/LoginModels";
import RegisterModels from "@/components/models/RegisterModels";

import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import EditModel from "@/components/models/EditModel";

export default function App({ Component, pageProps }: AppProps) {
  const AnyComponent = Component as any;
  
  return (
    <SessionProvider session={pageProps.session}>
      <Toaster />
      <RegisterModels />
      <LoginModels />
      <EditModel />
      <Layout>
        <AnyComponent {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
