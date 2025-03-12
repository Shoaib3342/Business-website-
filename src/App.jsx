import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "./components/navbar";
import HeadSec from "./components/headSec";
import FeatureService from "./components/featuresService/featureService";
import About from "./components/about";
import Clients from "./components/clients";
import MainFeat from "./components/featuresMain/featMain";
import FeatureDetails from "./components/featuresDetails/featuresDetails";
import Service from "./components/Services/service";
import MoreFeat from "./components/MoreFeatures/moreFeatures";
import Pricing from "./components/Pricing/pricing";
import Frequency from "./components/faqs/frequency";
import Testimonilas from "./components/testimonials/testimonials";
import Contact from "./components/contacts/contacts";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Navbar />
      <HeadSec />
      <FeatureService />
      <About />
      <Clients />
      <MainFeat />
      <FeatureDetails />
      <Service />
      <MoreFeat />
      <Pricing />
      <Frequency />
      <Testimonilas />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
