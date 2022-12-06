import React, {useState, useEffect} from "react"
import './App.css';
import Cover from "./components/Cover.js"
import ResponsiveAppBar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Info from "./components/info/Info";
import Footer from "./components/footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from "./cards/Cards";



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
      <ResponsiveAppBar />
      <Cover />
      <About />
      <Cards></Cards>
      <Info />
      <Footer />
    </div>
  );
}

export default App;

