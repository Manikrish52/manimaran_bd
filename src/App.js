import { HashRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Birthday from "./Pages/Birthday";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/birthday" element={<Birthday />} />
      </Routes>
    </HashRouter>
  );
}

export default App;