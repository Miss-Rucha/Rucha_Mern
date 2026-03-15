import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import AddAlbum from "./Pages/AddAlbum";
import EditAlbum from "./Pages/EditAlbum";
import Show from "./Pages/Show";

function App() {
  return (
    <Router>
      <Navbar />

      <div className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddAlbum />} />
          <Route path="/edit/:id" element={<EditAlbum />} />
          <Route path="/show/:id" element={<Show />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
