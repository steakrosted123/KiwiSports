import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Location from "./components/Location";
import Newletter from "./components/Newletter";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="scroll-smooth hover:scroll-auto">
      <Navbar />
      <Hero />
      <Location/>
      <Newletter />
      <Cards />
    </div>
    
  );
}

export default App;
