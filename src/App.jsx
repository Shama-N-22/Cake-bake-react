import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Cakes from "./components/Cakes";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import CakeDetails from "./components/CakeDetails";

function App() {
  const cakes = [
    {
      type: "birthday",
      name: "Birthday Cake",
      image:
        "https://img.freepik.com/free-photo/delicious-cake-with-fruits_23-2150727658.jpg",
      desc: "This delicious Birthday cake is perfect for your loved ones birthdays.Rich, moist, and topped with a creamy frosting.",
    },
    {
      type: "wedding",
      name: "Wedding Cake",
      image: "https://images8.alphacoders.com/133/1337257.png",
      desc: "Where Sweet Dreams Become Reality..Celebrate your love with our exquisite wedding cakes, crafted to perfection for your special day. Each cake is a masterpiece, tailored to reflect your unique style and flavor preferences.",
    },
    {
      type: "custom",
      name: "Custom Cake",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6-DbtxG2lFDfzh4JDdAPs4LXuzklNSH3BQg&s",
      desc: "Crafting Sweet Memories, One Slice at a Time..Your imagination,Our Creation",
    },
  ];

  const [cake, setCake] = useState("");

  function getData() {
    return cakes.find((c) => c.type == cake);
  }

  return (
    <div
      style={{
        width: "99vw",
        overflow: "clip",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {cake == "" ? (
        <>
          <Navbar />
          <Home />
          <Cakes setCake={setCake} />
          <Gallery />
          <Testimonials />
          <Footer />
        </>
      ) : (
        <CakeDetails data={getData()} setCake={setCake} />
      )}
    </div>
  );
}

export default App;
