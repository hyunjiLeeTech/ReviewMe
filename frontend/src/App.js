import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import { useEffect, useState } from "react";
import ContactUs from "./components/contactus/ContactUs";
import Header from "./components/style/Header";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  });
  return (
    <div>
      <Header />
      <p>{!data ? "Loading" : data}</p>
      <ContactUs />
    </div>
  );
}

export default App;
