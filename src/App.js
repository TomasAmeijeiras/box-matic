import React, {useState, useEffect} from "react"
import './App.css';
import Cover from "./components/Cover.js"
import ResponsiveAppBar from "./components/navbar/Navbar";
import Navbar from './components/navbar/Navbar';
import About from "./components/about/About";
import Info from "./components/info/Info";
import Footer from "./components/footer/Footer";
//import Map from "./maps/Map"
import Home from "./maps/Map";
import CarouselFadeExample from "./components/slider/Slider";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from "./cards/Cards";

// import credentials from "./maps/credentials";
// const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapsKey}`;

function App() {

  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position)
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
  }, [scrollHeight])

  return (
    <div className="App">
      <ResponsiveAppBar/>
      {/* <Navbar isScrolling = {scrollHeight} /> */}
      <Cover />
      <About />
      <Cards></Cards>
      <Info />
      <Footer />
    </div>
  );
}

export default App;

