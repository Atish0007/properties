import {useState, useEffect} from "react";
import './App.css'
import Header from "./components/Header";
import Hero from "./components/Hero";
import StickyButton from "./components/StickyButton";
import PopupForm from "./components/PopupForm";

import About from "./components/About";
import Overview from "./components/Overview";
import AmenitiesOld from "./components/AmenitiesOld";

import FloatingButtons from "./components/floatingButtons";
import Gallery from "./components/Gallery";
import PlanSection from "./components/PlanSection";
import MapSection from "./components/MapSection";



import ProjectOverview from "./components/ProjectOverview";
import QriousSection from "./components/QriousSection";
import Plans from "./components/Plans";
import Amenities from "./components/Amenities";
import LocationSection from "./components/LocationSection";
import CommonForm from "./components/CommonForm";
import ProjectInfo from "./components/ProjectInfo";

function App() {

  const [open, setOpen] = useState(false);

  const [showForm, setShowForm] = useState(false);
  const [formTitle, setFormTitle] = useState("");
  const [unlockPlans, setUnlockPlans] = useState(false);

  const openForm = (title) => {
    setFormTitle(title);
    setShowForm(true);
  };

  return (
    <>
      <Header openForm={openForm}/>
      <Hero openForm={openForm}/>
      <StickyButton onClick={() => setOpen(true)} />
      <PopupForm isOpen={open} onClose={() => setOpen(false)} />
      <ProjectOverview />
      <QriousSection />
      <Plans openForm={openForm} unlocked={unlockPlans} />
      <Amenities />
      <LocationSection openForm={openForm} />

      {/* <Overview />
      <About />
      <AmenitiesOld />
      <Gallery />
      <PlanSection />
      <MapSection /> */}
      <ProjectInfo />


      <CommonForm
        isOpen={showForm}
        onClose={() => setShowForm(false)}
        title={formTitle}
        onSuccess={() => setUnlockPlans(true)}
      />

      {/* <FloatingButtons />   */}
    </>
  )
}

export default App
