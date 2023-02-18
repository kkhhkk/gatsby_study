import React from "react";
import Layout from "../Components/Layout";
import Seo from "../Components/Seo";

export default function blog() {
  return (
    <Layout title="Blog">
      <div>
        <p>The most recent new from my shop.</p>
      </div>
    </Layout>
  );
}

export const Head = () => <Seo title="Blog" />;
