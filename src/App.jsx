import Hero from './sections/Hero';
import ShowCaseSection from './sections/ShowCaseSection';
import Navbar from './components/Navbar';
import FeatureCards from './components/FeatureCards';
import Education from './sections/Education';
import Journey from './sections/Journey';
import TechStack from './sections/TechStack';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

const App = () => {
    return (
        <>
          <Navbar/>
          <Hero />
          <ShowCaseSection/>
          <FeatureCards/>
          <Education/>
          <Journey/>
          <TechStack/>
          <Contact/>
          <Footer/>
        </>
    )
};
export default App;