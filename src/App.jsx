import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { BsWhatsapp } from "react-icons/bs";

function App() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Header />
      <a
        href="https://api.whatsapp.com/send?phone=553534381131&text=Ol%C3%A1!%20%F0%9F%91%8B%20estou%20interessado%20em%20me%20hospedar%20no%20Spa%20da%20Alma.%20Gostaria%20de%20obter%20mais%20informa%C3%A7%C3%B5es%20sobre%20disponibilidade%2C%20pre%C3%A7os%20e%20comodidades."
        target="_blank"
        rel="noreferrer"
        className="bg-gray-900 p-4 rounded-full fixed right-8 bottom-8 z-10"
      >
        <BsWhatsapp size={30} color="white" />
      </a>
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
