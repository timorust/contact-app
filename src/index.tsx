import React from "react";
import ReactDom from "react-dom";
import Layout from "./components/layout/Layout";
import Routes from "./components/routes/Routes";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

ReactDom.render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes />
      </Layout>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
