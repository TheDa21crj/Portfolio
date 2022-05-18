import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Pages/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        Hello World
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes> */}
      </Layout>
    </BrowserRouter>
  );
}

export default App;
