import React from "react";
import Layout from "../components/Layout";
import History from "./history";

export default function Home(props) {
  return (
    <Layout {...props}>
      <History {...props} />
    </Layout>
  )
}
