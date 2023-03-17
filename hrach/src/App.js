import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import NoPage from "./Pages/NoPage";
import Layout from "./Pages/Layout";

export default function App() {
  return (<>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Layout />}>
                      <Route index element={<Home />} />
                      <Route path="student-life" element={<Blog />} />
                      <Route path="tuition-fees" element={<Contact />} />
                      <Route path="*" element={<NoPage />} />
                  </Route>
              </Routes>
          </BrowserRouter>
  </>

  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);