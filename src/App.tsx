'use client';

//import css
import './App.css';

//import components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';

function App() {
  return (
    <div id="root">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}

export default App;
