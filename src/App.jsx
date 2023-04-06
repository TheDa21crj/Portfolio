import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Error from "./Pages/Error";

// Components
import Nav from "./Components/Nav";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Nav leftTitle="My Portfolio" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
