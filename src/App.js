
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ContactForm from "./section/ContactForm";
import FactCounter from "./section/FactCounter";
import FindUs from "./section/FindUs";
import ServiceSec from "./section/ServiceSec";
import Testimonial from "./section/Testimonial";
//import VideoSec from "./section/VideoSec";



function App() {
  return (
    <div >
    <Header />
    <Hero />
    <ServiceSec/>
    <FactCounter/>
    {/* <VideoSec/> */}
    <Testimonial/>
    <ContactForm/>
    <FindUs/>
    <Footer/>
    </div>
  );
}

export default App;
