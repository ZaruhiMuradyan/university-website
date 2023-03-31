import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import StudentLife from "./Pages/StudentLife";
import TuitionFees from "./Pages/TuitionFees";
import NoPage from "./Pages/NoPage";
import Layout from "./Pages/Layout";
import styled from "styled-components";
import Faculties from "./Pages/Faculties";
import ApplyNow from "./Pages/ApplyNow";
import InternationalDep from "./Pages/InternationalDep";
import About from "./Pages/About";
import Students from "./Pages/Students";
import Department from "./Pages/Department";


const AppWrapper = styled.div`
  background-image: url("main-background.jpg");
  background-repeat: no-repeat;
  background-size:100%;
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100%;
  width: 100%;`;

export default function App() {
  return (<AppWrapper>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Layout />} >
                      <Route index element={<Home />} />
                      <Route path="student-life" element={<StudentLife />} />
                      <Route path="international-department" element={<InternationalDep />} />
                      <Route path="tuition-fees" element={<TuitionFees />} />
                      <Route path="faculties" element={<Faculties />} />
                      <Route path="department" element={<Department />} />
                      <Route path="about" element={<About />} />
                      <Route path="students" element={<Students />} />
                      <Route path="apply-now" element={<ApplyNow />} />
                      <Route path="*" element={<NoPage />} />
                  </Route>
              </Routes>
          </BrowserRouter>
  </AppWrapper>

  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);