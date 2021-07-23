import React from "react";
import "./App.css";
import Cover from "./components/HomePage/Cover";
import About from "./components/AboutPage/About";
import Main from "./components/Projects/Main";
import Contact from "./components/Contact/Contact";
import Particles from "react-tsparticles";
import Footer from "./components/Contact/Footer";

function App() {
  return (
    <div className="main">
      <Particles
        className="particles"
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "#232526",
            },
          },
          fpsLimit: 100,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "pull",
              },
              onHover: {
                enable: true,
                mode: "pulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 1000,
                duration: 8,
                opacity: 0.4,
                size: 30,
              },
              push: {
                quantity: 2,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 350,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 0.5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.01,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
      <Cover />
      <About />
      <Main />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
