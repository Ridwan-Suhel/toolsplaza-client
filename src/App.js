import "./App.css";
import Header from "./components/Shared/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import Login from "./components/Pages/Login/Login";
import Blog from "./components/Pages/Blog/Blog";
import NotFound from "./components/Pages/NotFound/NotFound";
import Purchase from "./components/Pages/Purchase/Purchase";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Blog />} />
        <Route path="/purchase/:id" element={<Purchase />} />
        <Route path="/blog" element={<Login />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
