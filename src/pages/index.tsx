import * as React from "react";
import Layout from "../Components/Layout";
import Seo from "../Components/Seo";

export default function IndexPage() {
  return (
    <Layout title="Welcome my DevStickers 👋">
      <div></div>
    </Layout>
  );
}

export const Head = () => <Seo title="Home" />;
