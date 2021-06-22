import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import ContactUs from "./components/contactus/ContactUs";
import Header from "./components/style/Header";
import Footer from "./components/style/Footer";

function App() {
  return (
    <div>
      <Header />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
