import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About3 from "./About";
import Courses from "./Courses";
import CodeSphereForm from "./CodeSphereForm";
import Footer from "./Footer";
import CustomAlert from "./CustomAlert";

function App() {
  const [alert, setalert] = useState(false);

  const showAlert = () => {
    setalert(true);
    setTimeout(() => {
      setalert(false);
    }, 2000);
  };

  return (
    <>
      <CustomAlert alert={alert}></CustomAlert>
      <Navbar></Navbar>
      <Hero></Hero>
      <About3></About3>
      <Courses></Courses>
      <CodeSphereForm showAlert={showAlert}></CodeSphereForm>
      <Footer></Footer>
    </>
  );
}

export default App;
