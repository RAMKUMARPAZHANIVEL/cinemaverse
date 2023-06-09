import { Routes, Route } from "react-router-dom";
import "./App.css";
import Detail from "./pages/Detail";
import Search from "./pages/Search";
import Home from "./pages/Home";
import NotFound from "./pages/notFound";

function App() {
  return (
    <main >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Detail/:id" element={<Detail />} />
        <Route path="/Search" element={<Search />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <Footer /> */}
    </main>
  );
}

export default App;
