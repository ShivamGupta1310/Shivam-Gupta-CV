import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header";
import { main } from './mockData';
import About from './Components/About';
import Resume from './Components/Resume';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

/*************  ✨ Windsurf Command ⭐  *************/
/**
 * The main App component.
 * 
 * It renders the Header, About, Resume, Portfolio, Contact and Footer components.
 * 
/*******  668de6d2-0177-4355-91f6-2ce1dab9018f  *******/function App() {
  console.log("jdsjd", main)
  return (
      <div className="App">
        <Header data={main} />
        <About data={main} />
        <Resume data={main.resume} />
        <Portfolio data={main.portfolio} />
        {/* <Contact data={main} /> */}
        {/* <Footer data={main} /> */}
      </div>
  );
}

export default App;
