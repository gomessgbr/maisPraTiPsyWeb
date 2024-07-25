import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Header, Footer } from "./components";
import { Consult, Contact, Home } from "./pages";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/consult" Component={Consult} />
          <Route path="/contact" Component={Contact} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
