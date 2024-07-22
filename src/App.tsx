import "./App.css";
import Catalogue from "./pages/Catalogue.tsx";
import Matrix from "./pages/Matrix.tsx";
import Profile from "./pages/Profile.tsx";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Catalogue />} />
      <Route path="/Matrix" element={<Matrix />} />
      <Route path="/LLM/:id" element={<Profile />} />
    </Routes>
  );
}

export default App;
