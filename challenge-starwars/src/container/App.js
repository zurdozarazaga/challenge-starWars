import React from "react";
import Layout from "../components/Layout";
import Home from "./Home";

function App() {
  console.log("app");
  return (
    <div className="">
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}

export default App;
