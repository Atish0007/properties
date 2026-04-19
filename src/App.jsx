import {useState, useEffect} from "react";
import './App.css'
import Header from "./components/Header";
import Hero from "./components/Hero";
import StickyButton from "./components/StickyButton";
import PopupForm from "./components/PopupForm";
import About from "./components/About";
import Overview from "./components/Overview";
import Amenities from "./components/Amenities";

import FloatingButtons from "./components/floatingButtons";

function App() {

  const [open, setOpen] = useState(false);

  return (
    <>
      <Header />
      <Hero />
      <StickyButton onClick={() => setOpen(true)} />
      <PopupForm isOpen={open} onClose={() => setOpen(false)} />
      <Overview />
      <About />
      <Amenities />

      {/* <FloatingButtons />   */}
    </>
  )
}

export default App
