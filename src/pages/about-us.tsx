import React from "react";
import Layout from "../Components/Layout";
import Seo from "../Components/Seo";

export default function AboutUs() {
  return (
    <Layout title="About Us">
      <div>
        <p>we are the good stickers shop</p>
      </div>
    </Layout>
  );
}

export const Head = () => <Seo title="About Us" />;
