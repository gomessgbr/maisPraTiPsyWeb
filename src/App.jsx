import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Header, Footer } from "./components";
import { Consult, Contact, Habits, Home } from "./pages";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/consult" Component={Consult} />
          <Route path="/contact" Component={Contact} />
          <Route path="/habits" Component={Habits} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
