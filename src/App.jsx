import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";

// Layout
import Layout from "./Pages/Layout";

// Home
import Home from "./Pages/Home";
import Error from "./Pages/Error";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
